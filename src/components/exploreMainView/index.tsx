import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";
import Explore from "./components/explore";
import Message from "./components/message";
import Profile from "./components/profile";

// eslint-disable-next-line react-refresh/only-export-components
const MainView = () => {
    const {
        ExploreStore: { mainView },
    } = useStore();

    return (
        <div className="w-full h-full">
            {mainView === "explore" ? (
                <Explore />
            ) : (
                <div className="flex">
                    <div className="w-2/3">
                        <Message />
                    </div>
                    <div className="w-1/3">
                        <Profile />
                    </div>
                </div>
            )}
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(MainView);
