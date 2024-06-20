import { useState } from "react";
import helper from "../../helper/helper";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";
import { IoInformationCircle } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
import PassionItem from "../PassionItem";

// eslint-disable-next-line react-refresh/only-export-components
const ExploreCard = ({
    pictures,
    passions,
    name,
    age,
    gender,
    id,
    interested_in,
}: IExplore) => {
    const {
        ExploreStore: { like, dislike },
    } = useStore();
    const [tab, setTab] = useState(0);

    const [showProfile, setShowProfile] = useState(false);

    const overlay = {
        background: "linear-gradient(to bottom, #00000014, #000000E0)",
    };
    const inverted_overlay = {
        background: "linear-gradient(to top, #000000E0, #00000014 )",
    };

    return (
        <div className="w-full h-full lg:w-[375px] lg:h-[667px] relative overflow-hidden overflow-y-scroll lg:rounded-[20px]">
            <div className="h-full lg:rounded-[20px] relative">
                <div className="grid grid-cols-6 gap-4 w-[90%]  z-10 mx-auto cursor-pointer absolute top-5 left-0 right-0">
                    {pictures.map((item, index) => (
                        <div
                            onClick={() => setTab(index)}
                            key={index}
                            className={`${
                                tab === index
                                    ? "bg-[#FEFEFA] border border-[#FFFFFF]"
                                    : "bg-[#555555]"
                            }  col-span-1  h-[6px]`}
                        >
                            <p className="hidden">{item.id}</p>{" "}
                        </div>
                    ))}
                </div>

                <img
                    src={pictures[tab].url}
                    alt=""
                    className={`${
                        showProfile
                            ? "h-[468.75px] lg:rounded-b-none"
                            : "min-h-full"
                    } w-full object-cover lg:rounded-[20px]`}
                />
                <div
                    className={`absolute right-6 bottom-[50%] lg:bottom-40 w-8 h-8 rounded-full bg-primary text-white cursor-pointer flex items-center justify-center ${
                        showProfile ? "" : "hidden"
                    }`}
                    onClick={() => setShowProfile(!showProfile)}
                >
                    <FaArrowDown />
                </div>

                <div
                    style={overlay}
                    className={`${
                        showProfile ? "hidden" : ""
                    } h-full absolute top-0 w-full flex flex-col lg:rounded-[20px] justify-end `}
                >
                    <div className="  flex flex-col gap-[1rem] mx-[2rem]">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-[700] text-[22px] text-[#FFFFFF]">
                                    {name}, {age}
                                </p>
                                <p className="font-[700] text-[16px] text-[#FFFFFF]  ">
                                    {gender}
                                </p>
                            </div>
                            <div
                                onClick={() => setShowProfile(!showProfile)}
                                className="flex items-center cursor-pointer text-primary"
                            >
                                <IoInformationCircle size={24} />
                            </div>
                        </div>
                        <div className="flex gap-[10px] w-10/12  flex-wrap  shrink-0  user-passion">
                            {passions.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-[20px] border px-[16px] py-[6px] text-center font-[700] text-[12px] text-[#FDF7FF] "
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        style={inverted_overlay}
                        className="h-[120px]  flex flex-col justify-center w-full  lg:rounded-[20px]"
                    >
                        <div className="w-9/12 mx-auto  h-3/5 flex justify-around ">
                            <img
                                src={helper.Interest}
                                className="cursor-pointer"
                                alt="lumina like icon"
                                aria-description="like"
                                onClick={() => {
                                    like(id);
                                }}
                            />
                            <img
                                src={helper.No_Match}
                                alt="lumina no-like icon"
                                className="cursor-pointer"
                                aria-description="dislike"
                                onClick={() => {
                                    dislike(id);
                                }}
                            />
                            {/* <img
                                src={helper.Favorite}
                                alt="lumina favorite icon"
                                className="cursor-pointer"
                                aria-description="favorite"
                            /> */}
                        </div>
                    </div>
                </div>
                {showProfile && (
                    <div>
                        <div className="p-4 border-b">
                            <p className="font-bold text-2xl">
                                {name}, {age}
                            </p>
                            <p>{gender}</p>
                        </div>
                        <div className="p-4 border-b">
                            <p className="font-bold text-xl">Interested in</p>
                            <div className="flex flex-wrap">
                                {interested_in.map((pass) => (
                                    <div className="rounded-[20px] flex justify-center items-center lg:py-[8px] px-[12px] py-[4px] border lg:border-[2px] m-[5px] border-[#CCCCCC] text-[12px] lg:text-[14px] font-[200] lg:font-[400] cursor-pointer ">
                                        {pass}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="font-bold text-xl">Passions</p>
                            <div className="flex flex-wrap">
                                {passions.map((pass) => (
                                    <PassionItem
                                        passion={pass}
                                        isActive={false}
                                        selectPassion={() => null}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(ExploreCard);
