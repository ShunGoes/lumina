import { useEffect } from "react";
import { useStore } from "../../../stores";
import ExploreCard from "../../explore-card";
import { observer } from "mobx-react-lite";

// eslint-disable-next-line react-refresh/only-export-components
const Explore = () => {
    const {
        ExploreStore: { users, explore, isLoading },
    } = useStore();

    useEffect(() => {
        explore();
    }, [explore]);

    return (
        <div className="w-full h-full flex justify-center items-center relative">
            {isLoading.explore ? (
                <p>Loading...</p>
            ) : users.length < 1 ? (
                <p>All Caught Up!</p>
            ) : (
                <ExploreCard {...users[0]} />
            )}
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Explore);
