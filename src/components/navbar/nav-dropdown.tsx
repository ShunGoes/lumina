import { motion, AnimatePresence, Variants } from "framer-motion";
import { useAuth } from "../../context/auth.context";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

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
    const { signUpWithFacebook, signUpWithGoogle } = useAuth()!;

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
                        onClick={() => signUpWithGoogle()}
                        className="w-10/12 mx-auto h-[2rem] py-3 flex items-center gap-4 "
                    >
                        <FcGoogle />
                        <span className="font-[700] text-[18px] text-white">
                            Sign in with Google
                        </span>
                    </motion.div>
                    <motion.div
                        variants={chiildVariant}
                        onClick={() => signUpWithFacebook()}
                        className="w-10/12 mx-auto  h-[2rem]  flex items-center gap-4"
                    >
                        <FaFacebookF />
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
