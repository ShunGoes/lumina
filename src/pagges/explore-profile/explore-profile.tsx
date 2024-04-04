import helper from "../../helper/helper"
import "./explore-profile.css"
import { useNavigate } from "react-router-dom"



const Explore_Profile = () => {
  const navigate = useNavigate()

  function go_to_profile_page(){
    navigate("/explore/edit-profile")
  }
  const shadow_styles = {
    boxShadow: '4px 4px 0 0 #0000001F'
  }
  return (
    <div className="grid grid-cols-12  h-auto explore-profile ">
      <div style={shadow_styles} className="col-span-4 h-[865px] border-b-0  hidden lg:block" >
        <div className=" w-full mt-[3rem]    px-3">
            <div className="h-[84px] mb-[2rem] border rounded-[10px] flex flex-col px-3 justify-center ">
                <h4 className="font-[700] text-[20px] text-[#555555] mb-[]"> Lumina Plus </h4>
                <p className="font-[400] text-[12px] text-[#555555]">Subscribe to Lumina  Premium Plus and get boosted visibility</p>
            </div>
            <div className="h-[84px] mb-[2rem] border rounded-[10px] flex flex-col px-3 justify-center ">
                <h4 className="font-[700] text-[20px] text-[#555555] mb-[]"> Lumina Gold </h4>
                <p className="font-[400] text-[12px] text-[#555555]">Subscribe to Lumina  Premium Gold and get  advanced matching algorithm</p>
            </div>
            <div className="h-[84px] mb-[2rem] border rounded-[10px] flex flex-col px-3 justify-center ">
                <h4 className="font-[700] text-[20px] text-[#555555] mb-[]"> Lumina Elite </h4>
                <p className="font-[400] text-[12px] text-[#555555]">Would be highlighted and featured prominently in search results and recommendations</p>
            </div>
            <div className="h-[84px] mb-[2rem] border rounded-[10px] flex flex-col px-3 justify-center ">
                <h4 className="font-[700] text-[20px] text-[#555555] mb-[]"> Upgrade Your Love Life </h4>
                <p className="font-[400] text-[12px] text-[#555555]">Subscribe to Lumina Premium subscription</p>
            </div>

            <p className="font-[700] text-[20px] text-[#555555] text-center mt-[6rem]">Logout</p>
        </div>
      </div>

        <div className="col-span-12 h-full lg:col-span-8  w-full lg:mt-[3rem] ">
            <div>
                <div className="w-full h-[500px]  lg:w-[520px] lg:h-[654px] lg:mx-auto">
                    <img src={helper.Fresh_Guy} alt="lumina edit profile photo" className="object-contain h-full w-full " />
                </div>
                <div className=" px-3 lg:px-0 flex flex-col gap-2 lg:gap-1 lg:w-[520px] lg:mx-auto lg:mt-[10px]">
                    <h5 className=" font-[700] text-[18px] lg:text-[22px] text-[#2B2B2B] ">
                      Arinze Daewoo 28
                    </h5>
                    <div className="flex gap-[10px] items-center mb-4">
                      <img src={helper.User} alt="lumina user icon" />
                      <span className="font-[400] text-[18px] text-[#808080] ">Man</span>
                    </div>
                   
                    <button onClick={go_to_profile_page} className={` w-9/12 lg:w-[276px] lg:h-[49px] rounded-[32px] px-[24px] py-[10px] bg-[#F74887] font-[700] text-[16px] text-[#FDF7FF] `}>
                    Edit Info   (4% complete)
                    </button>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore_Profile