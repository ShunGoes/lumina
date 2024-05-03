import { createContext, useState, useEffect } from "react";

import client, {
  sign_in_with_social,
  get_passions_array,
} from "../utils/auth.helper";
import {
  Auth_Context_Type,
  UserType,
  Provider_Prop,
} from "../types/auth.context";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const Auth_Context = createContext<Auth_Context_Type | null>(null);

export const Auth_Context_Provider = ({ children }: Provider_Prop) => {
  const [user, setUser] = useState<UserType>(null);
  const [formError, setFormError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [social_user, set_social_user] = useState({
    firstName: "",
    email: "",
  });

  const [registerInfo, setRegisterInfo] = useState<RegisterUserInfo>({
    email: "",
    firstName: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    password: "",
    passion: [],
    pictures: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [show_login_modal, set_show_login_modal] = useState(false);
  const [signedInWithSocials, setSignedInWithSocials] = useState(false);

  const [PASSION_DATA, SET_PASSION_DATA] = useState<Record<string, number>[]>(
    []
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetch_passions = async () => {
      const { passions } = await get_passions_array()!;
      
      SET_PASSION_DATA(passions);
    };
    fetch_passions();

    const storedUser = localStorage.getItem("lumina-user");

    if (typeof storedUser === "string") {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("lumina-user");
    setUser(null);
    navigate("/");
  };

  const gender_to_lower_case = registerInfo.gender.toLowerCase();

  const social_register_details = {
    email: registerInfo.email,
    firstName: registerInfo.firstName,
    birthday: `${registerInfo.day}-${registerInfo.month}-${registerInfo.year}`,
    gender: gender_to_lower_case,
    passions: [1, 2, 3, 4],
  };

  const handle_signin_with_social = async () => {
    setIsLoading(true);
    setFormError("");

    console.log("signing up with socials");
    const response = await sign_in_with_social(
      JSON.stringify(social_register_details),
      "auth-login"
    );
    console.log(response);
    setIsLoading(false);

    if (response?.error) {
      return setFormError(response?.error);
    }
    return response;
  };

  // this function submits the registered user form
  const handle_register_user = async (data: RegisterUserInfo) => {
    setIsLoading(true);
    setFormError("");

    const register_user_details = {
      email: data.email,
      firstName: data.firstName,
      birthday: `${data.day}-${data.month}-${data.year}`,
      gender: data.gender,
      password: data.password,
      passions: data.passion,
      passwordConfirmation: data.password,
      pic1: data.pictures[0],
      pic2: data.pictures[1],
      pic3: data.pictures[2],
      pic4: data.pictures[3],
      pic5: data.pictures[4],
      pic6: data.pictures[5],
    };

    try {
      const response = await client.post(
        "create-account",
        register_user_details,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("lumina-user", JSON.stringify(response.data.user));
      setUser(response.data);
    } catch (error) {
        
      const err = error as unknown as AxiosError<{
        errors?: Array<{
          location: string;
          msg: string;
          path: string;
          type: string;
        }>;
        message?: string;
      }>;
      const errorArrayMessage = err.response?.data.errors
        ? err.response.data.errors[0].msg
        : "";
      setFormError(err.response?.data.message || errorArrayMessage);
    } finally {
      setIsLoading(false);
    }
  };

  //   this function handles the login component submit button
  const handle_login_user = async (data: EmailAndPasswordType) => {
    setIsLoading(true);
    setFormError("");

    try {
      const response = await client.post("sign-in", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem("lumina-user", JSON.stringify(response?.data?.usr));
      setUser(response?.data?.usr);
    } catch (error) {
      const err = error as unknown as AxiosError<{
        errors?: Array<{
          location: string;
          msg: string;
          path: string;
          type: string;
        }>;
        message?: string;
      }>;
      const errorArrayMessage = err.response?.data.errors
        ? err.response.data.errors[0].msg
        : "";
      setFormError(err.response?.data.message || errorArrayMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    handle_register_user,
    handle_login_user,
    setLoginInfo,
    setRegisterInfo,
    isLoading,
    formError,
    user,
    registerInfo,
    loginInfo,
    social_user,
    set_social_user,
    handle_signin_with_social,
    setFormError,
    showModal,
    setShowModal,
    show_login_modal,
    set_show_login_modal,
    logout,
    signedInWithSocials,
    setSignedInWithSocials,
    PASSION_DATA,
  };

  return (
    <Auth_Context.Provider value={value}>{children}</Auth_Context.Provider>
  );
};
