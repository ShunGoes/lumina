import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const Matches = () => {
    const {
        ExploreStore: {
            matches,
            getMatches,
            getUser,
            toggleSideBar,
            toggleMainView,
        },
        MessageStore: { startChat },
    } = useStore();

    const handleView = (match: IExplore) => {
        getUser(match.id);
        toggleSideBar("messages");
        toggleMainView("messages");
        startChat(match);
    };

    useEffect(() => {
        getMatches();
    }, [getMatches]);

    return (
        <div className="flex gap-4 flex-wrap">
            {matches.map((match) => (
                <div
                    className="h-[178px] w-[141px] cursor-pointer"
                    key={match.id}
                    onClick={() => handleView(match)}
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
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Matches);
