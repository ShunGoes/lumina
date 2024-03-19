import { motion, AnimatePresence, Variants } from "framer-motion";
import helper from "../../helper/helper";
import { useContext, useState } from "react";
// @ts-ignore
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { Auth_Context } from "../../context/auth.context";
import {
  signInWithFacebookPopup,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.config";

const parentVariant: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "16rem",
    transition: { duration: 0.4, when: "beforeChildren", staggerChildren: 0.4 },
  },
  remove: { opacity: 0 },
};
const chiildVariant: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  // remove: {x: 100,opacity: 0}
};
interface NavProp {
  isOpen: boolean;
}

const Nav_Dropdown = ({ isOpen }: NavProp) => {
  const [show] = useState(isOpen);
  const { setFormError, set_social_user } = useContext(Auth_Context)!;

  const get_facebook_signup_details = async () => {
    try {
      const response = await signInWithFacebookPopup();
        
      const { displayName, email } = response.user;

      if (typeof displayName === "string" && typeof email === "string") {
        const name = displayName.split(" ")[0];
        set_social_user({ name, email });
        
      }
    } catch (err) {
      setFormError({ error: err });
    }
  };

  const get_google_signup_details = async () => {
    const response = await signInWithGooglePopup();

    const { displayName, email } = response.user;

    if (typeof displayName === "string" && typeof email === "string") {
      const name = displayName?.split(" ")[0];
      set_social_user({ name, email });
    }
  };
  return (
    <div className=" w-full right-0  z-20  absolute top-[4.5rem] lg:hidden bg-black text-white ">
      <AnimatePresence>
        {show && (
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav_Dropdown;
