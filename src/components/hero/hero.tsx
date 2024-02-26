import "./hero.css";
import helper from "../../helper/helper";
import { useNavigate } from "react-router-dom";


const Hero = () => {

  const navigate = useNavigate()

  const go_to_register_page = () => {
    navigate('/register')
  }

  return (
    <div className="hero relative w-full z-100  h-full text-white flex justify-center items-center">
      <div className=" h-[446px] w-[386px]  lg:w-[808px] lg:h-[378px] flex flex-col justify-around">
        <div className="h-[240px] z-10  leading-[80px] flex flex-col justify-around">
          <h2 className="font-[700] text-[33px] lg:text-[70px]  leading-10  text-center">
            <span className="text-[#006DF8]">Discover</span>  Your Perfect
          </h2>
          <h2 className="font-[700] text-[33px] lg:text-[70px] leading-10  text-center ">
            Match <span className="text-[#006DF8]">with</span> 
          </h2>
          <h2 className="font-[700] text-[33px] lg:text-[70px] leading-10  text-center ">
            Lumina
          </h2>
        </div>

        <div className="flex flex-col justify-around items-center gap-[10px]">
          <div className="bg-[#F74887] z-10 py-[10px] px-[24px] cursor-pointer rounded-[32px] h-[58px] w-11/12 flex justify-center items-center  gap-[10px] lg:w-[220px] " onClick={go_to_register_page}>
            <span className="font-[700] text-white"> create  account </span> <img src={helper.Arrow_Right} alt="" />
          </div>
          <div className="bg-[transparent] lg:hidden border-2 border-[#fff] cursor-pointer z-10 py-[10px] px-[24px] rounded-[32px] h-[58px] w-11/12 flex justify-center items-center  ">
            <span className="font-[700] text-white"> log in </span> 
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flower-sm h-[284px] lg:hidden">
       
      </div>
      <div className=" w-full h-full absolute hidden top-0 flower-lg lg:block  ">
        
        </div>
    </div>
  );
};

export default Hero;
