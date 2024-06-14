import { useEffect } from "react";
import "./explore-user.css";
import Explore_Sidebar from "../../components/explore-sidebar/explore-sidebar";
import { Modal } from "react-responsive-modal";
import { useStore } from "../../stores";
import ExploreCard from "../../components/explore-card";
import { observer } from "mobx-react-lite";

const Explore_Users = () => {
    const {
        ExploreStore: { users, explore, isLoading, showModal, toggleModal },
    } = useStore();

    useEffect(() => {
        explore();
    }, [explore]);

    return (
        <div className="h-full w-full  flex lg:w-[95%] lg:mx-auto lg:h-[950px] lg:justify-between items-center ">
            <div className="w-4/12 hidden lg:block  ">
                <Explore_Sidebar />
            </div>
            <div className="lg:w-8/12 w-full  relative  explore-sm  flex justify-center items-center lg:items-start  ">
                {isLoading.explore ? (
                    <p>Loading...</p>
                ) : users.length < 1 ? (
                    <p>All Caught Up!</p>
                ) : (
                    <>
                        {users.map((user) => (
                            <ExploreCard key={user.id} {...user} />
                        ))}
                    </>
                )}
            </div>
            <Modal open={showModal} onClose={toggleModal} center>
                <Explore_Sidebar />
            </Modal>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Explore_Users);
