import Modal from "react-responsive-modal";
import { useAuth } from "../../../context/auth.context";
import { useForm } from "react-hook-form";
import Input from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailSchema } from "../../../validators/authValidator";

const EmailModal = () => {
    const { isEmailModalOpen, toggleEmailModal, signUpWithEmail } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IEmail>({
        resolver: yupResolver(EmailSchema),
    });

    const onSubmit = (data: IEmail) => {
        signUpWithEmail(data.email);
    };

    return (
        <Modal open={isEmailModalOpen} onClose={toggleEmailModal} center>
            <div className="  w-[300px] h-[500px] flex flex-col gap-[35px] lg:gap-[32px] items-center  lg:w-[500px] ">
                <div>
                    <div className="h-[84px]"></div>
                    <h4 className="font-[400] text-[18px] lg:font-[500] lg:text-[22px] text-[#2B2B2B] ">
                        Enter your Email address
                    </h4>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col items-center gap-8"
                >
                    <Input
                        label="Email"
                        type="email"
                        {...register("email")}
                        placeholder="Enter your email address"
                        {...register}
                        error={errors.email?.message}
                    />
                    <button
                        type="submit"
                        className="text-white bg-primary h-[] lg:h-[58px] lg:w-[261px] rounded-[32px] px-[24px] py-[10px]  lg:font-[700] text-[18px]"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default EmailModal;
