import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";
import { useEffect, useState } from "react";
import ProfileCard from "../../components/profileCard";

const Matches = () => {
    const {
        ExploreStore: { matches, getMatches, isLoading, getUser, user },
    } = useStore();

    const [view, setView] = useState<"match" | "profile">("match");
    console.log(view)
    const handleView = (id: string) => {
        getUser(id);
        setView("profile");
    };

    useEffect(() => {
        getMatches();
    }, [getMatches]);
    return (
        <div className="h-full w-full flex  lg:w-[95%] lg:mx-auto lg:h-[950px] lg:justify-between items-center">
            <div className={`w-full h-full lg:w-4/12 hidden lg:block p-[25px]`}>
                <h1 className="text-2xl font-bold">Matches</h1>
                <p className="text-gray-200 mb-8">
                    Discover connections waiting to blossom.
                </p>
                <div className="flex gap-4 flex-wrap">
                    {matches.map((match) => (
                        <div
                            className="h-[178px] w-[141px] cursor-pointer"
                            key={match.id}
                            onClick={() => handleView(match.id)}
                        >
                            <img
                                className="object-cover h-full w-full rounded-lg"
                                src={match.pictures[0].url}
                                alt={match.name}
                            />
                            <p>{match.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={`lg:w-8/12 w-full explore-sm flex justify-center items-center`}
            >
                {isLoading.getUser ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {user ? (
                            <ProfileCard {...user} />
                        ) : (
                            <p>Select a match to view their profile</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default observer(Matches);
