import "./hero.css";
import helper from "../../helper/helper";
import { useAuth } from "../../context/auth.context";
import EmailModal from "./components/EmailModal";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";

const Hero = () => {
    const { toggleSignUpModal, toggleLoginModal } = useAuth()!;

    return (
        <div className="hero relative w-full z-100   h-full text-white flex justify-center items-center">
            <div className=" h-auto w-[386px]  lg:w-[808px] lg:h-[378px] flex flex-col  lg:gap-0  lg:justify-around">
                <div className=" h-[180px] lg:h-[200px] z-10  lg:leading-[80px] ">
                    <h2 className="font-[700] hero-text text-[32px] lg:text-[70px]  px-1 text-center">
                        <span className="text-[#006DF8]">Discover</span> Your
                        Perfect <br />
                        Match <span className="text-[#006DF8]">with</span>{" "}
                        <br />
                        Lumina
                    </h2>
                </div>

                <div className="flex flex-col  justify-around items-center gap-[10px]">
                    <div
                        className="bg-[#F74887] z-10 py-[10px] px-[24px] cursor-pointer rounded-[32px] h-[50px] w-11/12 flex justify-center items-center  gap-[10px] lg:w-[220px] "
                        onClick={() => toggleSignUpModal()}
                    >
                        <span className="font-[700] text-white">
                            {" "}
                            create account{" "}
                        </span>{" "}
                        <img src={helper.Arrow_Right} alt="" />
                    </div>
                    <div
                        onClick={() => toggleLoginModal()}
                        className="bg-[transparent] lg:hidden border-2 border-[#fff] cursor-pointer z-10 py-[10px] px-[24px] rounded-[32px] h-[50px] w-11/12 flex justify-center items-center  "
                    >
                        <span className="font-[700] text-white"> log in </span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full flower-sm  h-[284px]  lg:hidden">
                <div className=" flex flex-col justify-end h-full items-center w-full">
                    <span className="font-[700] text-[20px]  mb-[2rem]  text-white">
                        Terms and Policy
                    </span>
                </div>
            </div>
            <div className=" w-full h-full absolute hidden top-0 flower-lg lg:block  "></div>

            <EmailModal />
            <LoginModal />
            <SignUpModal />
        </div>
    );
};

export default Hero;
