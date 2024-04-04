import { useState } from "react";
import helper from "../../helper/helper";
import "./explore-user.css";
import Explore_Sidebar from "../../components/explore-sidebar/explore-sidebar";
import {Modal} from "react-responsive-modal"
// import { BiCollapse } from "react-icons/bi";

import { AiOutlineNodeCollapse } from "react-icons/ai"

const Explore_Users = () => {
  const [tab, setTab] = useState(0);
  const [show_explore_modal, set_show_explore_modal] = useState(false)
  const tab_array: undefined[] = Array.from({ length: 6 });
  const img_array = [
    helper.Fresh_Guy,
    helper.Adventurous_Dates,
    helper.Exploring_Together,
    helper.Fun_Activities,
    helper.Cozy_Evening,
    helper.Friendship_Goals,
  ];

  function openExploreModal(){
    set_show_explore_modal(true)
  }
  function closeExploreModal(){
    set_show_explore_modal(false)
  }
  
  const handle_chsnge_tab = (index: number) => {
    setTab(index);
  };

  const overlay = {
    background: "linear-gradient(to bottom, #00000014, #000000E0)",
  };
  const inverted_overlay = {
    background: "linear-gradient(to top, #000000E0, #00000014 )",
  };

  return (
    <div className="h-full w-full  flex lg:w-[95%] lg:mx-auto lg:h-[950px] lg:justify-between items-center">
      <div className="w-4/12 hidden lg:block  ">
        <Explore_Sidebar />
      </div>
      <div className="lg:w-8/12 w-full lg:h-full explore-sm   flex justify-center items-center lg:items-start  ">
        <div className="w-[500px]  h-full lg:h-[654px] lg:max-h-[654px] lg:mt-[2.5rem]  relative ">
          <div className="grid grid-cols-6 gap-4 w-[90%]  z-10 mx-auto cursor-pointer absolute top-5 left-0 right-0">
            {tab_array.map((item: undefined, index) => (
              <div
                onClick={() => handle_chsnge_tab(index)}
                key={index}
                className={`${
                  tab === index
                    ? "bg-[#FEFEFA] border border-[#FFFFFF]"
                    : "bg-[#555555]"
                }  col-span-1  h-[6px]`}
              >
                <p className="hidden">{item}</p>{" "}
              </div>
            ))}
          </div>

          <div className="h-full lg:rounded-[20px] relative ">
            <img
              src={img_array[tab]}
              alt=""
              className="h-full w-full object-cover lg:rounded-[20px]"
            />
              <div onClick={openExploreModal} className=" w-[50px] h-[50px] absolute top-[50%] bottom-[50%] right-2 lg:hidden text-[#FFFFFF] bg-black/50 z-10 flex justify-center items-center rounded-[10px]">
                  <AiOutlineNodeCollapse  size={30}/>
              </div>
            <div
              style={overlay}
              className=" h-full absolute top-0  w-full flex flex-col lg:rounded-[20px] justify-end "
            >
              <div className="  flex flex-col gap-[1rem] mx-[2rem]">
                <div>
                  <div className="flex gap-1 items-center">
                    <div className="bg-[#79E87D] w-[10px] h-[10px] " />
                    <p className="font-[700] text-[16px] text-[#FFFFFF]  ">
                      Recently Active
                    </p>
                  </div>
                  <p className="font-[700] text-[22px] text-[#FFFFFF]">
                    {" "}
                    Arinze Dewoo 28
                  </p>
                </div>
                <div className="flex gap-[10px] w-10/12  flex-wrap  shrink-0  user-passion">
                  <div className="rounded-[20px] border px-[16px] py-[6px] text-center font-[700] text-[12px] text-[#FDF7FF] ">
                    Home workout
                  </div>
                  <div className="rounded-[20px] border px-[16px] py-[6px] text-center font-[700] text-[12px] text-[#FDF7FF] ">
                    Home workout
                  </div>
                  <div className="rounded-[20px] border px-[16px] py-[6px] text-center font-[700] text-[12px] text-[#FDF7FF] ">
                    Home workout
                  </div>
                  <div className="rounded-[20px] border px-[16px] py-[6px] text-center font-[700] text-[12px] text-[#FDF7FF] ">
                    Home workout
                  </div>
                </div>
              </div>
              <div
                style={inverted_overlay}
                className="h-[120px]  flex flex-col justify-center w-full  lg:rounded-[20px]"
              >
                <div className="w-9/12 mx-auto  h-3/5 flex justify-between">
                  <img src={helper.Interest} alt="lumina like icon" />
                  <img src={helper.No_Match} alt="lumina no-like icon" />
                  <img src={helper.Favorite} alt="lumina favorite icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={show_explore_modal} onClose={closeExploreModal} center>
          <Explore_Sidebar />
      </Modal>
    </div>
  );
};

export default Explore_Users;
