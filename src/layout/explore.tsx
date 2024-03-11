import { Outlet } from "react-router-dom";
import Explore_Nav from "../components/explore-nav/explore-nav";
import Explore_Sidebar from "../components/explore-sidebar/explore-sidebar";
import './explore.css'


const Explore_Layout = () => {
  return (
    <div>
      <Explore_Nav />
      <div className="grid grid-cols-12 w-[95%] mx-auto lg:gap-[2rem]">
        <div className=" hidden  col-span-4 lg:block ">
          <Explore_Sidebar />
        </div>
        <div className="col-span-12  lg:col-span-8  explore-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Explore_Layout;
