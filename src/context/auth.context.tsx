import { createContext, useState, useEffect, useContext } from "react";

import { Provider_Prop } from "../types/auth.context";
import { useNavigate } from "react-router-dom";
import {
    auth,
    signInWithFacebookPopup,
    signInWithGooglePopup,
} from "../utils/firebase/firebase.config";
import { logUserOut, login, signup } from "../requests/auth";
import { IError, errorFormater } from "../utils/errorFormater";
import { getPassions } from "../requests/passion";
import { UserCredential, signOut } from "firebase/auth";
import client from "../requests";

const AuthContext = createContext<AuthContextType>({
    isSignUpModalOpen: false,
    toggleSignUpModal: () => {},
    isLoginModalOpen: false,
    toggleLoginModal: () => {},
    isEmailModalOpen: false,
    toggleEmailModal: () => {},
    signUpWithEmail: () => {},
    registerInfo: {
        email: "",
        name: "",
        day: "",
        month: "",
        year: "",
        gender: "",
        password: "",
        passion: [],
        pictures: [],
        social_token: "",
        interested_in: [],
    },
    signInWithSocial: async () => {},
    signUpWithGoogle: async () => {},
    signUpWithFacebook: async () => {},
    user: null,
    loginUser: async () => {},
    passions: [],
    formError: "",
    signedInWithSocials: false,
    isLoading: false,
    registerUser: async () => {},
    logout: () => {},
    verifiedEmail: false,
    closeVerifyEmailModal: () => null,
    loading: {
        resendOtp: false,
    },
    resendOtp: async () => {},
    message: "",
});

export const AuthProvider = ({ children }: Provider_Prop) => {
    const navigate = useNavigate();
    const [formError, setFormError] = useState<string>("");
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [registerInfo, setRegisterInfo] = useState<RegisterUserInfo>({
        email: "",
        name: "",
        day: "",
        month: "",
        year: "",
        gender: "",
        password: "",
        passion: [],
        pictures: [],
        social_token: "",
        interested_in: [],
    });
    const [user, setUser] = useState<ILoginresponse | null>(null);
    const [passions, setPassions] = useState<IPassion[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [signedInWithSocials, setSignedInWithSocials] = useState(false);
    const [verifiedEmail, setVerifiedEmail] = useState(false);
    const [loading, setLoading] = useState({
        resendOtp: false,
    });
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchPassions = async () => {
            const passions = await getPassions();
            setPassions(passions.data);
        };
        fetchPassions();

        const storedUser = localStorage.getItem("lumina-user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            setUser(null);
        }
    }, []);
    const closeVerifyEmailModal = () => {
        setVerifiedEmail(true);
    };
    const toggleSignUpModal = () => {
        setIsSignUpModalOpen(!isSignUpModalOpen);
    };

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const toggleEmailModal = () => {
        setIsEmailModalOpen(!isEmailModalOpen);
    };

    const signUpWithEmail = (email: string) => {
        toggleEmailModal();
        toggleSignUpModal();
        setRegisterInfo({
            ...registerInfo,
            email,
        });
        navigate("/register");
    };

    const signInWithSocial = async (type: "facebook" | "google") => {
        let email = "";
        let providerId = "";
        let displayName = "";
        try {
            setSignedInWithSocials(true);
            let response: UserCredential;

            toggleLoginModal();

            if (type === "google") {
                response = await signInWithGooglePopup();
            } else {
                response = await signInWithFacebookPopup();
            }
            email = response.user.email ?? "";
            providerId = response.user.providerId;
            displayName = response.user.displayName ?? "";

            if (email) {
                const res = await login({
                    email,
                    social_token: providerId,
                });
                localStorage.setItem("lumina-user", JSON.stringify(res.data));
                setUser(res.data);

                navigate("/explore");
            }
        } catch (err) {
            const error = err as unknown as IError;
            if (error.response?.status === 404) {
                setRegisterInfo({
                    ...registerInfo,
                    email,
                    social_token: providerId,
                    name: displayName,
                });
                navigate("/register");
            }
        }
    };

    const signUpWithGoogle = async () => {
        try {
            setSignedInWithSocials(true);
            const response = await signInWithGooglePopup();

            const { displayName, email, providerId } = response.user;

            if (displayName && email) {
                setRegisterInfo({
                    ...registerInfo,
                    name: displayName,
                    email,
                    social_token: providerId,
                });

                navigate("/register");
            } else {
                setFormError("Unable to sign up with google");
            }
        } catch (err) {
            console.log(err, "google sign up error");
        }
    };

    const signUpWithFacebook = async () => {
        setSignedInWithSocials(true);
        try {
            const response = await signInWithFacebookPopup();

            const { displayName, email, providerId } = response.user;

            if (displayName && email) {
                setRegisterInfo({
                    ...registerInfo,
                    name: displayName,
                    email,
                    social_token: providerId,
                });

                navigate("/register");
            } else {
                setFormError("Unable to sign up with facebook");
            }
        } catch (err) {
            console.log(err, "facebook sign up error");
        }
    };

    const loginUser = async (data: ILogin) => {
        setIsLoading(true);
        setFormError("");
        try {
            const response = await login(data);
            localStorage.setItem("lumina-user", JSON.stringify(response.data));
            localStorage.setItem("lumina-token", response.data.token);
            setUser(response.data);
            navigate("/explore");
        } catch (error) {
            setFormError(errorFormater(error as unknown as IError));
        } finally {
            setIsLoading(false);
        }
    };

    const resendOtp = async () => {
        setLoading((prev) => ({ ...prev, resendOtp: true }));
        try {
            const res = await client.post("/auth/resend-otp", {
                email: user?.email,
            });
            setMessage(res.data.message);
        } catch (error) {
            setMessage(errorFormater(error as unknown as IError));
        } finally {
            setLoading((prev) => ({ ...prev, resendOtp: false }));
        }
    };

    // unfixed

    const logout = async () => {
        await logUserOut();
        localStorage.removeItem("lumina-user");
        setUser(null);
        signOut(auth).then(() => {
            navigate("/");
        });
    };

    // this function submits the registered user form
    const registerUser = async (data: RegisterUserInfo) => {
        setIsLoading(true);
        setFormError("");

        const register_user_details: ISignUp = {
            email: data.email,
            name: data.name,
            birthday: `${data.day}-${data.month}-${data.year}`,
            gender: data.gender,
            password: data.password,
            passions: data.passion,
            pictures: data.pictures,
            social_token: data.social_token,
            interested_in: data.interested_in,
        };

        try {
            const response = await signup(register_user_details);

            localStorage.setItem("lumina-user", JSON.stringify(response.data));
            setUser(response.data);
            navigate("/explore");
        } catch (error) {
            setFormError(errorFormater(error as unknown as IError));
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        isSignUpModalOpen,
        toggleSignUpModal,
        isLoginModalOpen,
        toggleLoginModal,
        isEmailModalOpen,
        toggleEmailModal,
        signUpWithEmail,
        signInWithSocial,
        signUpWithGoogle,
        signUpWithFacebook,
        loginUser,
        passions,
        isLoading,
        formError,
        user,
        registerInfo,
        signedInWithSocials,
        registerUser,
        logout,
        verifiedEmail,
        closeVerifyEmailModal,
        loading,
        resendOtp,
        message,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
};
