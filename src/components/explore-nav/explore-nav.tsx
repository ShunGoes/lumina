import helper from "../../helper/helper";
import "./explore-nav.css";

const Explore_Nav = () => {
  return (
    <nav className="h-[80px] py-3 explore-nav ">
      <div className="grid grid-cols-12 w-[95%] mx-auto  h-full">
        <div className="col-span-2  lg:col-span-4  flex justify-between">
          <div className="flex items-center ">
            <div className="w-[50px] h-[50px] rounded-full">
              <img
                src={helper.Profile_Picture}
                alt="lumina user profile picture object-cover "
              />
            </div>
            <p className="font-[400] hidden lg:block text-[18px] text-[#323232] ml-3 ">
              David
            </p>
          </div>

          <div className=" justify-between items-center w-5/12 hidden lg:flex">
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
        <div className="col-span-10  lg:col-span-8 flex justify-center items-center">
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
      </div>
    </nav>
  );
};

export default Explore_Nav;
