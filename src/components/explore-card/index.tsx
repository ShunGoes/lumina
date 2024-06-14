import { useState } from "react";
import { AiOutlineNodeCollapse } from "react-icons/ai";
import helper from "../../helper/helper";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";

// eslint-disable-next-line react-refresh/only-export-components
const ExploreCard = ({ pictures, passions, name, age, gender }: IExplore) => {
    const {
        ExploreStore: { toggleModal },
    } = useStore();
    const [tab, setTab] = useState(0);

    const overlay = {
        background: "linear-gradient(to bottom, #00000014, #000000E0)",
    };
    const inverted_overlay = {
        background: "linear-gradient(to top, #000000E0, #00000014 )",
    };

    return (
        <div className="w-[500px]  h-full lg:h-[90%] lg:max-h-[654px] lg:mt-[2.5rem]   relative ">
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

            <div className="h-full lg:rounded-[20px] relative  ">
                <img
                    src={pictures[tab].url}
                    alt=""
                    className="h-full w-full object-cover lg:rounded-[20px]"
                />
                <div
                    onClick={() => toggleModal()}
                    className=" w-[50px] h-[50px] absolute top-[50%] bottom-[50%] right-2 lg:hidden text-[#FFFFFF] bg-black/50 z-10 flex justify-center items-center rounded-[10px]"
                >
                    <AiOutlineNodeCollapse size={30} />
                </div>
                <div
                    style={overlay}
                    className=" h-full absolute top-0  w-full flex flex-col lg:rounded-[20px] justify-end "
                >
                    <div className="  flex flex-col gap-[1rem] mx-[2rem]">
                        <div>
                            <p className="font-[700] text-[22px] text-[#FFFFFF]">
                                {name}, {age}
                            </p>
                            <p className="font-[700] text-[16px] text-[#FFFFFF]  ">
                                {gender}
                            </p>
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
                        <div className="w-9/12 mx-auto  h-3/5 flex justify-between">
                            <img src={helper.Interest} alt="lumina like icon" />
                            <img
                                src={helper.No_Match}
                                alt="lumina no-like icon"
                            />
                            <img
                                src={helper.Favorite}
                                alt="lumina favorite icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(ExploreCard);
