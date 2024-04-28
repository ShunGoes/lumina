import { useContext } from "react";

// relative imports
import Helper from "../../helper/helper";
import "./nav.css";
import { Auth_Context } from "../../context/auth.context";
import { signInWithFacebookPopup } from "../../utils/firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { set_show_login_modal, set_social_user, setFormError } =
        useContext(Auth_Context)!;
    const navigate = useNavigate();

    const go_to_register_page = () => {
        navigate("/register");
    };

    const handle_login_modal = () => {
        set_show_login_modal(true);
    };

    const get_facebook_signup_details = async () => {
        try {
            console.log("clicked");

            const response = await signInWithFacebookPopup();

            const { displayName, email } = response.user;

            if (typeof displayName === "string" && typeof email === "string") {
                const firstName = displayName?.split(" ")[0];
                set_social_user({ firstName, email });
                go_to_register_page();
            }
        } catch (err) {
            setFormError(err as string);
        }
    };

    return (
        <nav className="h-[68px]   nav  lg:h-[90px] lg:flex items-center justify-center">
            <div className=" flex  justify-between items-center w-[95%] mx-auto h-full lg:h-[56px] lg:w-10/12 ">
                <div className="flex items-center">
                    {/* <img src={Helper.Logo} alt="" className="" /> */}
                    <h3 className="font-[800] text-[21.91px] text-[#fff] lg:text-[30px]">
                        Lumina
                    </h3>
                </div>

                <div className="hidden z-10 cursor-pointer lg:flex w-[557px] justify-content gap-[16px]  ">
                    <div
                        onClick={handle_login_modal}
                        className="w-[220px] h-[(58px] rounded-[32px] py-[10px] px-[24px] bg-[#F96C9F] font-[700] flex justify-center items-center members "
                    >
                        {" "}
                        Members Log In
                    </div>
                    <div
                        onClick={get_facebook_signup_details}
                        className=" h-[(58px]  flex justify-center gap-[10px] rounded-[32px] py-[10px] px-[24px] border-2  font-[700]  "
                    >
                        <img src={Helper.Facebook} alt="" />
                        <p className="font-[700] text-[#FFFFFF]">
                            Log in with Facebook
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
