import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores";

// eslint-disable-next-line react-refresh/only-export-components
const Messages = () => {
    const {
        MessageStore: { activeChats, activeChat, selectChat },
    } = useStore();
    return (
        <div className="flex flex-col gap-4 py-2">
            {activeChats.map((chat) => (
                <div
                    key={chat.id}
                    className={`flex items-center gap-2 border-r-4 h-24 cursor-pointer ${
                        chat.id === activeChat?.id
                            ? "border-r-primary"
                            : "border-transparent"
                    }`}
                    onClick={() => {
                        selectChat(chat);
                    }}
                >
                    <img
                        className="h-20 w-20 rounded-full object-cover"
                        src={chat.picture}
                    />
                    <div>
                        <p className="font-bold text-xl">{chat.name}</p>
                        <p>
                            {chat.messages[chat.messages.length - 1]?.message}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Messages);
