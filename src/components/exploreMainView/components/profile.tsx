import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../../../stores";
import PassionItem from "../../PassionItem";

// eslint-disable-next-line react-refresh/only-export-components
const Profile = () => {
    const {
        ExploreStore: { user, isLoading },
    } = useStore();
    const [tab, setTab] = useState(0);

    if (isLoading.getUser) {
        return (
            <div className="profile w-full flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="relative profile overflow-hidden overflow-y-scroll border-l">
            <div className="grid grid-cols-6 gap-4 w-[90%] z-10 mx-auto cursor-pointer absolute top-5 left-0 right-0">
                {user?.pictures.map((item, index) => (
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
                src={user?.pictures[tab].url}
                alt=""
                className="h-[50vh] w-full object-cover"
            />
            <div className="p-4 border-b">
                <p className="font-bold text-2xl">
                    {user?.name}, {user?.age}
                </p>
                <p>{user?.gender}</p>
            </div>
            <div className="p-4 border-b">
                <p className="font-bold text-xl">Interested in</p>
                <div className="flex flex-wrap">
                    {user?.interested_in.map((pass) => (
                        <div className="rounded-[20px] flex justify-center items-center lg:py-[8px] px-[12px] py-[4px] border lg:border-[2px] m-[5px] border-[#CCCCCC] text-[12px] lg:text-[14px] font-[200] lg:font-[400] cursor-pointer ">
                            {pass}
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-4">
                <p className="font-bold text-xl">Passions</p>
                <div className="flex flex-wrap">
                    {user?.passions.map((pass) => (
                        <PassionItem
                            passion={pass}
                            isActive={false}
                            selectPassion={() => null}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Profile);
