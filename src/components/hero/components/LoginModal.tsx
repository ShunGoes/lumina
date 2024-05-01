import Modal from "react-responsive-modal";
import { useAuth } from "../../../context/auth.context";
import { useForm } from "react-hook-form";
import Input from "../../Input";
import { FaFacebookF, FaRegUser } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../validators/authValidator";
import { FcGoogle } from "react-icons/fc";

const LoginModal = () => {
    const {
        toggleLoginModal,
        isLoginModalOpen,
        toggleSignUpModal,
        signInWithSocial,
        loginUser,
        formError,
    } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogin>({
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit = (data: ILogin) => {
        loginUser(data);
    };

    return (
        <Modal open={isLoginModalOpen} onClose={toggleLoginModal} center>
            <div className="w-[290px]  lg:w-[547px]  py-[20px] rounded-[10px] ">
                <div className=" flex flex-col gap-[2rem] h-full lg:gap-[3rem] ">
                    <div>
                        <div className="h-[106px]"></div>
                        <h4 className=" text-[18px] text-center lg:font-[600] lg:text-[30px] text-[#2B2B2B]">
                            Log in to Lumina
                        </h4>
                        {formError && (
                            <div className="text-center text-[#FF0000] font-[500] text-[14px] lg:text-[16px]">
                                {formError}
                            </div>
                        )}
                    </div>
                    <div className="lg:h-[370px]  flex flex-col gap-[3rem] lg:gap-3 lg:justify-between ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col items-center gap-4 lg:gap-5  ">
                                <div className="relative lg:h-[40px] lg:w-[367px] w-11/12 ">
                                    <Input
                                        type="email"
                                        {...register("email")}
                                        placeholder="Enter yoour email address"
                                        error={errors.email?.message}
                                    />

                                    <div className="flex items-center  left-3 lg:left-5 h-full absolute top-0 w-[30px]">
                                        <FaRegUser />
                                    </div>
                                </div>
                                <div className="lg:h-[46px] lg:w-[367px] w-11/12  ">
                                    <Input
                                        type="password"
                                        {...register("password")}
                                        placeholder="Password"
                                        error={errors.password?.message}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-11/12 lg:w-[367px] lg:h-[58px] rounded-[32px] px-[24px] py-[10px] bg-[#F74887] font-[600] lg:font-[700] text-[16px] text-[#FDF7FF] "
                                >
                                    Continue
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-col gap-3 w-full  lg:gap-5 items-center">
                            <div
                                onClick={() => signInWithSocial("google")}
                                className="flex w-11/12 mx-auto lg:w-[367px] cursor-pointer h-[50px] lg:h-[58px] items-center px-[18px] gap-[5px] lg:py-[10px] lg:px-[24px] border-2 lg:border-4 rounded-[32px] border-[#CCCCCC] "
                            >
                                <FcGoogle />
                                <p className="font-[700] text-[16px] lg:font-[700] lg:text-[18px]  text-[#808080] text-center  w-full ">
                                    Log in with Google
                                </p>
                            </div>

                            <div
                                onClick={() => signInWithSocial("facebook")}
                                className="flex w-11/12 mx-auto lg:w-[367px] cursor-pointer h-[50px] lg:h-[58px] items-center px-[18px] gap-[5px] lg:py-[10px] lg:px-[24px] border-2 lg:border-4 rounded-[32px] border-[#CCCCCC] "
                            >
                                <FaFacebookF />
                                <p className="font-[700] text-[16px] lg:font-[700] lg:text-[18px]  text-[#808080] text-center  w-full ">
                                    Log in with Facebook
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="lg:font-[700] font-[500] text-center text-[15px] lg:text-[18px] text-[#808080] ">
                            Don't have an account{" "}
                            <span
                                onClick={() => {
                                    toggleSignUpModal();
                                    toggleLoginModal();
                                }}
                                className="text-[#F74887] cursor-pointer"
                            >
                                Sign Up
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default LoginModal;
