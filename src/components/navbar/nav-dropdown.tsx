import { motion, AnimatePresence, Variants } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// relative imports
import helper from "../../helper/helper";
import { Auth_Context } from "../../context/auth.context";
import {
    signInWithFacebookPopup,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.config";

// motion div styles
const parentVariant: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: "16rem",
        transition: {
            duration: 0.4,
            when: "beforeChildren",
            staggerChildren: 0.4,
        },
    },
    remove: { opacity: 0 },
};
const chiildVariant: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

const Nav_Dropdown = () => {
    const { setFormError, set_social_user } = useContext(Auth_Context)!;
    const navigate = useNavigate();

    const go_to_register_page = () => {
        navigate("/register");
    };

    const get_facebook_signup_details = async () => {
        try {
            const response = await signInWithFacebookPopup();

            const { displayName, email } = response.user;

            if (typeof displayName === "string" && typeof email === "string") {
                const firstName = displayName.split(" ")[0];
                set_social_user({ firstName, email });
                go_to_register_page();
            }
        } catch (err) {
            setFormError(err as string);
        }
    };

    const get_google_signup_details = async () => {
        const response = await signInWithGooglePopup();

        const { displayName, email } = response.user;

        if (typeof displayName === "string" && typeof email === "string") {
            const firstName = displayName?.split(" ")[0];
            set_social_user({ firstName, email });
            go_to_register_page();
        }
    };

    return (
        <div className=" w-full right-0  z-20  absolute top-[4.5rem] lg:hidden bg-black text-white ">
            <AnimatePresence>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={parentVariant}
                    exit={{ opacity: 0, transition: { duration: 2 } }}
                    className=" h-[16rem] flex flex-col py-[1.5rem] gap-[2rem]"
                >
                    <motion.div
                        variants={chiildVariant}
                        onClick={get_google_signup_details}
                        className="w-10/12 mx-auto h-[2rem] py-3 flex items-center gap-4 "
                    >
                        <img src={helper.Google} alt="" />{" "}
                        <span className="font-[700] text-[18px] text-white">
                            Sign in with Google
                        </span>
                    </motion.div>
                    <motion.div
                        variants={chiildVariant}
                        onClick={get_facebook_signup_details}
                        className="w-10/12 mx-auto  h-[2rem]  flex items-center gap-4"
                    >
                        <img src={helper.Facebook} alt="" />{" "}
                        <span className="font-[700] text-[18px] text-white">
                            Sign in with Facebook
                        </span>
                    </motion.div>
                    <motion.div
                        variants={chiildVariant}
                        className="w-10/12  mx-auto  mt-4 h-[2rem] flex items-center justify-center"
                    >
                        <span className="font-[700] text-[18px]   text-white">
                            Terms and Policy
                        </span>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Nav_Dropdown;
