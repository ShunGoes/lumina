import { EXPORT_SIDEBAR_DATA } from "../../explore-sidebar-data";
import './explore-sidebar.css'

import Modal from "react-responsive-modal";
import { useState } from "react";

const Explore_Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [passion_index, set_passion_index] = useState(0);
  const modal_view = EXPORT_SIDEBAR_DATA.find(
    (obj) => obj.id === passion_index
  );

  const handle_open_modal = (id: number) => {
    setShowModal(true);
    set_passion_index(id);
  };
  const handle_close_modal = () => {
    setShowModal(false);
  };
  return (
    <aside className="explore-sidebar h-[80vh] lg:h-auto  lg:pr-2">
      <div className="px-[5px] mb-[2rem] sticky top-0 lg:static   bg-white z-10  py-3 lg:py-0 ">
        <h2 className="font-[700] text-[24px] text-[#323232]  ">Explore</h2>
        <p className="font-[400] text-[14px] text-[#A0ABC0]  ">
          Discover, swipe, and connect.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-3 lg:gap-[10px] ">
        {EXPORT_SIDEBAR_DATA.map((data) => (
          <div
            onClick={() => handle_open_modal(data.id)}
            className="h-[257px] rounded-[10px] -500  relative"
            key={data.id}
          >
            <img src={data.img} alt="" className="w-full h-full rounded-[10px] object-cover" />
            <div className="bg-[#0000004D] h-full  absolute flex items-center justify-center top-0 w-full">
              <h2 className="font-[700] text-[18px] text-[#FDF7FF] w-[125px]">{data.text}</h2>
            </div>
          </div>
        ))}
      </div>

      <Modal open={showModal} onClose={handle_close_modal} center>
        <div className="w-[270px] h-[400px]  lg:w-[500px] lg:h-[600px] rounded-[10px] bg-white flex flex-col items-center gap-[4rem]">
          <p className="font-[700] text-[18px] text-[#2B2B2B]">
            {modal_view?.text}{" "}
          </p>
          <div className=" flex flex-col gap-4">
            <div className="h-[200px]  lg:h-[343.33px]  ">
              <img src={modal_view?.svgImg} alt="lumina image " className="object-cover lg:object-fill w-full h-full "/>
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

export default Explore_Sidebar;
