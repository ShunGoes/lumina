import { useState } from "react";
import helper from "../../helper/helper";
import './explore-user.css'
const Explore_Users = () => {
  const [tab, setTab] = useState(0);
  const tab_array: undefined[] = Array.from({ length: 6 });
  const img_array = [
    helper.Fresh_Guy,
    helper.Adventurous_Dates,
    helper.Exploring_Together,
    helper.Fun_Activities,
    helper.Cozy_Evening,
    helper.Friendship_Goals,
  ];

  const handle_chsnge_tab = (index: number) => {
    setTab(index);
  };

  const overlay = {
    background: "linear-gradient(to bottom, #00000014, #000000E0)",
  };
  const inverted_overlay = {
    background: "linear-gradient(to top, #000000E0, #00000014 )",
  }

  return (
    <div className="h-full  flex justify-center items-center">
      <div className="w-[500px] h-[90%]  relative ">
        <div className="grid grid-cols-6 gap-4 w-[90%] z-10 mx-auto cursor-pointer absolute top-5 left-0 right-0">
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

        <div className="h-full">
          <img
            src={img_array[tab]}
            alt=""
            className="h-full w-full object-contain rounded-[20px]"
          />
          <div
            style={overlay}
            className=" h-full absolute top-0  w-full flex flex-col justify-end "
          >
            <div className="  flex flex-col gap-[1rem] mx-[2rem]">
              <div>
              <div className="flex gap-1">
                <div className="bg-[#79E87D] w-[10px] h-[10px] " />
                <p className="font-[700] text-[16px] text-[#FFFFFF] ">
                  Recently Active
                </p>
              </div>
              <p className="font-[700] text-[22px] text-[#FFFFFF]">
                {" "}
                Arinze Dewoo 28 
              </p>
              </div>
              <div className="flex gap-[10px] w-8/12 h-[80px] flex-wrap  shrink-0  user-passion">
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
                <div className="rounded-[20px] border px-[16px] py-[6px] text-center font-[700] text-[12px] text-[#FDF7FF] ">
                  Home workout
                </div>
                <div className="rounded-[20px] border px-[16px] py-[6px] text-center font-[700] text-[12px] text-[#FDF7FF] ">
                  Home workout
                </div>
              </div>
            </div>
            <div style={inverted_overlay} className="h-[120px]  flex flex-col justify-center w-full">
                <div className="w-7/12 mx-auto  h-3/5 flex justify-between">
                    <img src={helper.Interest} alt="lumina like icon" />
                    <img src={helper.No_Match} alt="lumina no-like icon" />
                    <img src={helper.Favorite} alt="lumina favorite icon" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore_Users;
