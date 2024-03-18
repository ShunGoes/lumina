import { motion, AnimatePresence, Variants } from "framer-motion";
import helper from "../../helper/helper";
import { useState } from "react";
// @ts-ignore
import { LoginSocialGoogle } from "reactjs-social-login";

const parentVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, when: "beforeChildren", staggerChildren: 0.4 },
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

  return (
    <div className=" w-full right-0  z-20  absolute top-[4.5rem] lg:hidden bg-black text-white ">
      <AnimatePresence>
        {show && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={parentVariant}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className=" h-[12rem] flex flex-col py-[1.5rem] gap-[2rem]"
          >
            <motion.div
              variants={chiildVariant}
              className="w-10/12 mx-auto h-[2rem] flex items-center gap-4 "
            >
              {/* <img src={helper.Google} alt="" />{" "} */}
              {/* <span className="font-[700] text-[18px] text-white">
                Sign in with Google
              </span> */}
              <LoginSocialGoogle
                isOnlyGetToken={false}
                className=""
                client_id={import.meta.env.VITE_CLIENT_ID}
                scope="https://www.googleapis.com/auth/userinfo.email"
                onResolve={({ data }: any) => {
                  const { email, given_name } = data;
                  console.log(email, given_name);
                  
                //   set_social_user({ name: given_name, email });
                }}
                onReject={(err: any) => {
                    console.log(err);
                    
                //   setFormError(err);
                }}
              >
                {/* <GoogleLoginButton /> */}
                <div className="flex w-[367px] cursor-pointer h-[58px] gap-[5px] py-[10px] px-[24px] border-4 rounded-[32px] border-[#CCCCCC] ">
                  <img src={helper.Google} alt="" />
                  <p className="font-[700] text-[18px] leading-[#808080] text-[#808080] text-center  w-full ">
                    Continue with Google
                  </p>
                </div>
              </LoginSocialGoogle>
            </motion.div>
            <motion.div
              variants={chiildVariant}
              className="w-10/12 mx-auto  h-[2rem]  flex items-center gap-4"
            >
              <img src={helper.Facebook} alt="" />{" "}
              <span className="font-[700] text-[18px] text-white">
                Sign in with Facebook
              </span>
            </motion.div>
            <motion.div
              variants={chiildVariant}
              className="w-10/12 mx-auto pl-[2.5rem] h-[2rem] flex items-center"
            >
              <span className="font-[700] text-[18px]  text-white">
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
