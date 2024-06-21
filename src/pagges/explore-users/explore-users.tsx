import Explore_Sidebar from "../../components/explore-sidebar/explore-sidebar";
import { observer } from "mobx-react-lite";
import ExploreMainView from "../../components/exploreMainView";

const Explore_Users = () => {
    return (
        <div className="h-full w-full flex">
            <div className="w-1/4 sidebar hidden lg:block bg-pink-50 px-8">
                <Explore_Sidebar />
            </div>
            <div className="w-full lg:w-3/4">
                <ExploreMainView />
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Explore_Users);
