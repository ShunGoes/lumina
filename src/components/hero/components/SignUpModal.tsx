import Modal from "react-responsive-modal";
import { useAuth } from "../../../context/auth.context";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const SignUpModal = () => {
    const {
        isSignUpModalOpen,
        toggleSignUpModal,
        toggleEmailModal,
        toggleLoginModal,
        signUpWithFacebook,
        signUpWithGoogle,
    } = useAuth();

    return (
        <Modal open={isSignUpModalOpen} onClose={toggleSignUpModal} center>
            <div className="  w-[290px]  lg:h-[465px] lg:w-[547px]  flex justify-between items-center flex-col gap-[3rem] lg:gap-0  ">
                <div className="w-full gap-2   lg:h-[400px] lg:w-[400px] flex flex-col justify-center lg:gap-3 items-center">
                    <div className="text-center mb-3">
                        <h2 className="text-[20px] lg:leading-[39px] lg:font-[600] lg:text-[30px] lg:text-[#555555]  mb-2">
                            Create account
                        </h2>
                        <p className="w-[90%] mx-auto text-[13px] lg:text-[16px] font-[300] lg:w-[378px] lg:h-[42px] lg:font-[500] lg:leading-[20.8px] ">
                            By clicking Log in, you agree to our{" "}
                            <span className="text-[#F74887]">Terms</span> of
                            Lumina Service and{" "}
                            <span className="text-[#F74887]">
                                {" "}
                                Privacy Policy{" "}
                            </span>{" "}
                            .
                        </p>
                    </div>

                    <div className="flex flex-col gap-3  w-full mt-[1rem] lg:gap-5 items-center">
                        <div
                            onClick={() => toggleEmailModal()}
                            className="flex w-11/12 mx-auto lg:w-[367px] cursor-pointer h-[50px] lg:h-[58px] items-center px-[18px] gap-[5px] lg:py-[10px] lg:px-[24px] border-2 lg:border-4 rounded-[32px] border-[#CCCCCC] "
                        >
                            <HiOutlineMail />
                            <p className="font-[700] text-[16px] lg:font-[700] lg:text-[18px]  text-[#808080] text-center  w-full ">
                                Sign Up with Email
                            </p>
                        </div>

                        <div
                            onClick={() => signUpWithGoogle()}
                            className="flex w-11/12 mx-auto lg:w-[367px] cursor-pointer h-[50px] lg:h-[58px] items-center px-[18px] gap-[5px] lg:py-[10px] lg:px-[24px] border-2 lg:border-4 rounded-[32px] border-[#CCCCCC] "
                        >
                            <FcGoogle />
                            <p className="font-[700] text-[16px] lg:font-[700] lg:text-[18px]  text-[#808080] text-center  w-full ">
                                Sign Up with Google
                            </p>
                        </div>

                        <div
                            onClick={() => signUpWithFacebook()}
                            className="flex w-11/12 mx-auto lg:w-[367px] cursor-pointer h-[50px] lg:h-[58px] items-center px-[18px] gap-[5px] lg:py-[10px] lg:px-[24px] border-2 lg:border-4 rounded-[32px] border-[#CCCCCC] "
                        >
                            <FaFacebookF />
                            <p className="font-[700] text-[16px] lg:font-[700] lg:text-[18px]  text-[#808080] text-center  w-full ">
                                Sign Up with Facebook
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="font-[700] text-[14px] lg:text-[18px] text-[#808080] ">
                        Have an account already?{" "}
                        <span
                            onClick={() => toggleLoginModal()}
                            className="text-[#F74887] cursor-pointer"
                        >
                            Log in
                        </span>
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default SignUpModal;
