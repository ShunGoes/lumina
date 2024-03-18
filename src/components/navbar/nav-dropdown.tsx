import { motion, AnimatePresence, Variants } from "framer-motion";
import helper from "../../helper/helper";
import { useContext, useState } from "react";
// @ts-ignore
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { Auth_Context } from "../../context/auth.context";

const parentVariant: Variants = {
  hidden: { opacity: 0, height:0 },
  visible: {
    opacity: 1, height: '16rem',
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
  const {setFormError, set_social_user} = useContext(Auth_Context)!

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
              className="w-10/12 mx-auto h-[2rem]  "
            >
              <LoginSocialGoogle
                isOnlyGetToken={false}
                className=" py-3 flex items-center gap-4"
                client_id={import.meta.env.VITE_CLIENT_ID}
                scope="https://www.googleapis.com/auth/userinfo.email"
                onResolve={({ data }: any) => {
                    const { email, given_name } = data;
                    console.log(email, given_name);
                      set_social_user({ name: given_name, email });
                }}
                onReject={(err: any) => {
                    console.log(err);
                      setFormError(err);
                }}
                >
                  <img src={helper.Google} alt="" />{" "}
                  <span className="font-[700] text-[18px] text-white">
                    Sign in with Google
                  </span>
               
              </LoginSocialGoogle>
            </motion.div>
            <motion.div
              variants={chiildVariant}
              className="w-10/12 mx-auto  h-[2rem]  flex items-center gap-4"
            >
           
               <LoginSocialFacebook
                 fieldsProfile={`id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender`}
                className=" py-3 flex items-center gap-4"
                appId={import.meta.env.VITE_FACEBOOK_APP_ID}
                redirect_url={`https://lumina-kohl.vercel.app/register`}
                onResolve={({ data }: any) => {
                    // const { email, given_name } = data;
                    console.log(data);
                    //   set_social_user({ name: given_name, email });
                }}
                onReject={(err: any) => {
                    console.log(err);
                      setFormError(err);
                }}
                >
                     <img src={helper.Facebook} alt="" />{" "}
              <span className="font-[700] text-[18px] text-white">
                Sign in with Facebook
              </span>
               
              </LoginSocialFacebook>
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
