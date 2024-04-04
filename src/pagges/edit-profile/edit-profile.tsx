import { useState } from "react";
import User_Profile from "../../components/user-profile/user-profile";
import helper from "../../helper/helper";
import {motion} from "framer-motion"

const Edit_Profile = () => {
    const [tabs, setTabs] = useState(0)

    function handleTabChange(id: number){
        setTabs(id)
    }

  const shadow_styles = {
    boxShadow: "4px 4px 0 0 #0000001F",
  };
  const tabs_styles = {
    borderRadius: "10px 0px 0px 10px"
  }
  return (
    <div>
      <div className="grid grid-cols-12  h-auto explore-profile ">
        <div
          style={shadow_styles}
          className="col-span-4 h-[865px] border-b-0  hidden lg:block"
        >
          <div className=" w-full mt-[3rem]    px-3">
            <div className="h-[84px] mb-[2rem] border rounded-[10px] flex flex-col px-3 justify-center ">
              <h4 className="font-[700] text-[20px] text-[#555555] mb-[]">
                {" "}
                Lumina Plus{" "}
              </h4>
              <p className="font-[400] text-[12px] text-[#555555]">
                Subscribe to Lumina Premium Plus and get boosted visibility
              </p>
            </div>
            <div className="h-[84px] mb-[2rem] border rounded-[10px] flex flex-col px-3 justify-center ">
              <h4 className="font-[700] text-[20px] text-[#555555] mb-[]">
                {" "}
                Lumina Gold{" "}
              </h4>
              <p className="font-[400] text-[12px] text-[#555555]">
                Subscribe to Lumina Premium Gold and get advanced matching
                algorithm
              </p>
            </div>
            <div className="h-[84px] mb-[2rem] border rounded-[10px] flex flex-col px-3 justify-center ">
              <h4 className="font-[700] text-[20px] text-[#555555] mb-[]">
                {" "}
                Lumina Elite{" "}
              </h4>
              <p className="font-[400] text-[12px] text-[#555555]">
                Would be highlighted and featured prominently in search results
                and recommendations
              </p>
            </div>
            <div className="h-[84px] mb-[2rem] border rounded-[10px] flex flex-col px-3 justify-center ">
              <h4 className="font-[700] text-[20px] text-[#555555] mb-[]">
                {" "}
                Upgrade Your Love Life{" "}
              </h4>
              <p className="font-[400] text-[12px] text-[#555555]">
                Subscribe to Lumina Premium subscription
              </p>
            </div>

            <p className="font-[700] text-[20px] text-[#555555] text-center mt-[6rem]">
              Logout
            </p>
          </div>
        </div>

        <div className="col-span-12 h-full lg:col-span-8  w-full lg:mt-[3rem] ">
            <div className="h-[52px]  lg:w-[520px] flex lg:mx-auto ">
                <motion.div   key={(0)} onClick={() => handleTabChange(0)} style={tabs_styles} className={`${tabs === 0 ? " border-[#EDF0F7] text-[#F93333BD]" : "text-[#555555] border-[#EDF0F7]" } relative w-[50%] border h-full  flex justify-center items-center font-[700] text-[18px]  lg:text-[20px] cursor-pointer`}>
                    Edit
                    {
                        tabs === 0 && (
                <motion.div transition={{ duration: 0.1 }} layoutId="tab" className="w-full h-full absolute top-0 bg-[#CBD2E0] z-[-1]" />


                        )
                    }
                </motion.div>
                <motion.div   key={1} onClick={() => handleTabChange(1)} style={tabs_styles} className={`${tabs === 1 ? " border-[#EDF0F7] text-[#F93333BD]" : "text-[#555555] border-[#EDF0F7]" } relative w-[50%] h-full flex justify-center items-center z-[99] font-[700] text-[18px] lg:text-[20px] border cursor-pointer`}>
                    Preview
                    {
                        tabs === 1 && (
                <motion.div transition={{ duration: 0.1 }} layoutId="tab" className="w-full h-full absolute top-0 bg-[#CBD2E0] z-[-1]" />


                        )
                    }
                </motion.div>
            </div>
          <div>
            <div className="w-full h-[500px]  lg:w-[520px] lg:h-[654px] lg:mx-auto">
              <img
                src={helper.Fresh_Guy}
                alt="lumina edit profile photo"
                className="object-contain h-full w-full "
              />
            </div>
            <div className=" px-3 lg:px-0 flex flex-col gap-2 lg:gap-1 lg:w-[520px] lg:mx-auto lg:mt-[10px]">
              <h5 className=" font-[700] text-[18px] lg:text-[22px] text-[#2B2B2B] ">
                Arinze Daewoo 28
              </h5>
              <div className="flex gap-[10px] items-center mb-4">
                <img src={helper.User} alt="lumina user icon" />
                <span className="font-[400] text-[18px] text-[#808080] ">
                  Man
                </span>
              </div>
                <User_Profile />
              <button
                className={` w-9/12 lg:w-[276px] lg:h-[49px] rounded-[32px] px-[24px] py-[10px] bg-[#F74887] font-[700] text-[16px] text-[#FDF7FF] mt-4`}
              >
                Edit Info (4% complete)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10rem]">

      </div>
    </div>
  );
};

export default Edit_Profile;
