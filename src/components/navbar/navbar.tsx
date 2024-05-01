import "./nav.css";
import { useAuth } from "../../context/auth.context";

const Navbar = () => {
    const { toggleLoginModal, toggleSignUpModal } = useAuth()!;

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
                        onClick={() => toggleLoginModal()}
                        className="w-[220px] h-[(58px] rounded-[32px] py-[10px] px-[24px] bg-[#F96C9F] font-[700] flex justify-center items-center members "
                    >
                        Members Log In
                    </div>
                    <div
                        onClick={() => toggleSignUpModal()}
                        className=" h-[(58px]  flex justify-center gap-[10px] rounded-[32px] py-[10px] px-[24px] border-2  font-[700]  "
                    >
                        <p className="font-[700] text-[#FFFFFF]">
                            Create Account
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
