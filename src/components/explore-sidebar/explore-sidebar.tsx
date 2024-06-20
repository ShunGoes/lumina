import { EXPORT_SIDEBAR_DATA } from "../../explore-sidebar-data";
import "./explore-sidebar.css";

import Modal from "react-responsive-modal";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";
import Matches from "./components/matches";
import Messages from "./components/messages";

const Explore_Sidebar = () => {
    const [showModal, setShowModal] = useState(false);

    const [passion_index, set_passion_index] = useState(0);
    const modal_view = EXPORT_SIDEBAR_DATA.find(
        (obj) => obj.id === passion_index,
    );

    const {
        ExploreStore: { activeSideBar, toggleSideBar },
    } = useStore();

    const handle_open_modal = (id: number) => {
        setShowModal(true);
        set_passion_index(id);
    };
    const handle_close_modal = () => {
        setShowModal(false);
    };
    return (
        <aside className="explore-sidebar h-full">
            <div className="px-[5px] mb-[2rem] sticky top-0 lg:static z-10  py-3 lg:py-0 ">
                <h2 className="font-[700] text-[24px] text-[#323232]  ">
                    Explore
                </h2>
                <p className="font-[400] text-[14px] text-[#A0ABC0]  ">
                    Discover, swipe, and connect.
                </p>
            </div>
            <div>
                <ul className="flex gap-4 py-2">
                    <li>
                        <div
                            className={`border-b-2 cursor-pointer ${
                                activeSideBar === "matches"
                                    ? "border-b-primary"
                                    : "border-b-transparent"
                            }`}
                            onClick={() => toggleSideBar("matches")}
                        >
                            Matches
                        </div>
                    </li>
                    <li>
                        <div
                            className={`border-b-2 cursor-pointer ${
                                activeSideBar === "messages"
                                    ? "border-b-primary"
                                    : "border-b-transparent"
                            }`}
                            onClick={() => toggleSideBar("messages")}
                        >
                            Messages
                        </div>
                    </li>
                    <li>
                        <div
                            className={`border-b-2 cursor-pointer ${
                                activeSideBar === "explore"
                                    ? "border-b-primary"
                                    : "border-b-transparent"
                            }`}
                            onClick={() => toggleSideBar("explore")}
                        >
                            Explore
                        </div>
                    </li>
                </ul>
            </div>

            <div className="overflow-y-scroll overflow-hidden h-4/5">
                {activeSideBar === "explore" && (
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-3 lg:gap-[10px] ">
                        {EXPORT_SIDEBAR_DATA.map((data) => (
                            <div
                                onClick={() => handle_open_modal(data.id)}
                                style={{
                                    backgroundImage: `url(${data.img})`,
                                }}
                                className={`h-[257px] rounded-[10px] relative bg-cover bg-center cursor-pointer`}
                                key={data.id}
                            >
                                <div className="bg-[#0000004D] h-full rounded-[10px] flex items-center justify-center w-full">
                                    <h2 className="font-[700] text-[18px] text-[#FDF7FF] w-[125px]">
                                        {data.text}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeSideBar === "matches" && <Matches />}
                {activeSideBar === "messages" && <Messages />}
            </div>

            <Modal open={showModal} onClose={handle_close_modal} center>
                <div className="w-[270px] h-[400px]  lg:w-[500px] lg:h-[600px] rounded-[10px] bg-white flex flex-col items-center gap-[4rem]">
                    <p className="font-[700] text-[18px] text-[#2B2B2B]">
                        {modal_view?.text}{" "}
                    </p>
                    <div className=" flex flex-col gap-4">
                        <div className="h-[200px]  lg:h-[343.33px]  ">
                            <img
                                src={modal_view?.svgImg}
                                alt="lumina image "
                                className="object-cover lg:object-fill w-full h-full "
                            />
                        </div>
                        <div className="flex flex-col gap-[19px] items-center">
                            <button className="h-[50px] w-full lg:w-[220px] lg:h-[58px] rounded-[32px] outline-none bg-[#F74887] lg:px-[24px] lg:py-[10px] font-[700] text-[16px] text-[#FDF7FF] ">
                                Join now
                            </button>
                            <button className="lg:w-[220px] lg:h-[58px] rounded-[32px] outline-none px-[24px] py-[10px] font-[700] text-[16px] text-[#D9D9D9] border-2 border-[#D9D9D9] ">
                                Join now
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </aside>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Explore_Sidebar);
