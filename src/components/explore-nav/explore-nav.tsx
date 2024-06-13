import { useRef, useState } from "react";
import helper from "../../helper/helper";
import "./explore-nav.css";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

const Explore_Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const {logout } = useAuth();
  const ref = useRef(null);

  // let firstName;

  // if (typeof user?.name === "string") {
  //   firstName = user?.name.split(" ")[0];
  // }

  const navigate = useNavigate();

  function nav_function(id: string) {
    navigate(id);
  }
  const items = [
    {
      title: "Location",
      icon: helper.Location_Icon,
      link: "/explore/location",
    },
    {
      title: "Message",
      icon: helper.Mail_Black,
      link: "/explore/message",
    },
    {
      title: "Match",
      icon: helper.Frame_3,
      link: "/explore/match",
    },
  ];

  useClickAway(ref, () => setDropdown(false));

  function handleOpenDropdown() {
    setDropdown(!dropdown);
  }

  function toggleDesktopDropdown(){
    setDesktopDropdown(!desktopDropdown)
  }
 


  return (
    <nav ref={ref} className="h-[80px] py-3 explore-nav relative ">
      <div className="grid grid-cols-12 w-[95%] gap-[1rem] lg:gap-0 mx-auto h-full">
        <div className="col-span-10  lg:col-span-8 flex justify-center items-center  ">
          <div className="relative w-11/12 lg:w-[380px] h-[48px]  rounded-[10px]  bg-[#FEFEFA] ">
            <input
              type="search"
              className="w-full h-full rounded-[8px] px-10 outline-none font-[400] text-[14px]"
              placeholder="search by location"
            />
            <div className="absolute left-3 top-0 flex items-center h-full ">
              <img src={helper.Search} alt=" search on lumina" className="" />
            </div>
          </div>
        </div>

        <div className="col-span-2  hidden  lg:col-span-4  lg:flex gap-[4rem] flex-row-reverse">
          <div className="flex items-center gap-[10px] ">
            <div className="w-[50px] h-[50px] rounded-full">
              <img
                src={helper.Profile_Picture}
                alt="lumina user profile picture object-cover "
              />
            </div>
            {/* <p className="font-[400] capitalize hidden lg:block text-[18px] text-[#323232] ml-3 ">
                            {firstName}
                        </p> */}
            <img src={helper.Dropdown} alt="dropdown icon" onClick={toggleDesktopDropdown} />
          </div>

          <div className=" justify-between items-center w-5/12 hidden lg:flex ">
            <img
              src={helper.Location_Icon}
              alt="lumina user profile picture "
            />
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-black/30">
              <img src={helper.Mail_Icon} alt="lumina mail icon" />
            </div>
            <img src={helper.Frame_3} alt="lumina" />
          </div>
        </div>

        <div className="col-span-2 lg:hidden h-full flex justify-end items-center">
          {dropdown ? (
            <FaTimes onClick={handleOpenDropdown} />
          ) : (
            <BsThreeDotsVertical onClick={handleOpenDropdown} />
          )}
        </div>
      </div>

      {/* mobile screen dropdown  */}
      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[4rem] w-full bg-white px-3 py-[1rem] explore-dropdown border-4 "
          >
            {items.map((item, index) => (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + index / 10,
                }}
                key={index}
                onClick={() => nav_function(item.link)}
                className="h-[50px] mb-[10px] border rounded-[10px] flex justify-center items-center text-[18px] w-full font-[700] gap-4"
              >
                <img src={item.icon} alt="lumina icon" width={25} height={25} />
                <h5 className="text-[#333333] font-semibold  w-3/12">
                  {item.title}
                </h5>
              </motion.div>
            ))}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5,
              }}
              onClick={() => logout()}
              className="text-red-500 cursor-pointer font-semibold text-center mt-3 text-[18px] "
            >
              Logout
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* desktop screen dropdown */}
      {
        desktopDropdown && (
      <div className="hidden lg:block  lg:w-[240px] rounded-[10px] bg-[#FFFFFF] profile-dropdown absolute top-[5rem] right-0 z-20 ">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className=" w-full bg-white px-3 py-[23px]  "
          >
            {items.map((item, index) => (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + index / 10,
                }}
                key={index}
                onClick={() => nav_function(item.link)}
                className="h-[50px] mb-[10px] border rounded-[10px] flex justify-center items-center text-[18px] w-full font-[700] gap-4"
              >
                <p className="text-[#333333] font-[500] text-[18px]  w-3/12">
                  {item.title}
                </p>
              </motion.div>
            ))}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5,
              }}
              onClick={() => logout()}
              className="cursor-pointer text-[#333333] text-center font-[500] text-[18px]"
            >
              Logout
            </motion.div>

          </motion.div>
      </AnimatePresence>
        </div>

        )
      }
    </nav>
  );
};

export default Explore_Nav;
