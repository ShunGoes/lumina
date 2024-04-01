import { Outlet } from "react-router-dom";
import Explore_Nav from "../components/explore-nav/explore-nav";
import './explore.css'


const Explore_Layout = () => {
  return (
    <div className="flex flex-col">
      <Explore_Nav />
      <div className="flex-1">
          <Outlet />
      </div>
    </div>
  );
};

export default Explore_Layout;
