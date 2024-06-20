import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores";
import { MdOutlineClose } from "react-icons/md";
import ChatBubble from "../../chatBubble";

// eslint-disable-next-line react-refresh/only-export-components
const Message = () => {
    const {
        ExploreStore: { toggleMainView },
        MessageStore: { activeChat },
    } = useStore();

    return (
        <div className="relative h-full">
            <div className="flex justify-between h-[80px] border-b items-center px-4">
                <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={activeChat?.picture}
                    alt={activeChat?.name}
                />
                <MdOutlineClose
                    onClick={() => {
                        toggleMainView("explore");
                    }}
                    size={24}
                />
            </div>
            <div
                style={{
                    height: "calc(100vh - 233px)",
                }}
                className="overflow-hidden overflow-y-scroll p-4"
            >
                <ChatBubble
                    type="send"
                    message="Hello 😍, I am Ayebakuro Ombu. Nice to meet you."
                    time="07:35am"
                    status="sent"
                />
                <ChatBubble
                    type="receive"
                    message="Hello 😍, I am Ayebakuro Ombu. Nice to meet you."
                    time="07:35am"
                />
                <ChatBubble
                    type="send"
                    message="Hello 😍, I am Ayebakuro Ombu. Nice to meet you."
                    time="07:35am"
                    status="read"
                />
                <ChatBubble
                    type="receive"
                    message="Hello 😍, I am Ayebakuro Ombu. Nice to meet you."
                    time="07:35am"
                />
                <ChatBubble
                    type="receive"
                    message="Hello 😍, I am Ayebakuro Ombu. Nice to meet you."
                    time="07:35am"
                />
            </div>
            <div className="border-t fixed bottom-0 p-2 w-1/2 max-w-full">
                <form className="relative">
                    <input
                        type="text"
                        placeholder="Type a message"
                        className="rounded-2xl bg-gray-100 px-4 w-full h-14 outline-primary"
                    />
                    <button className=" btn rounded-2xl h-10 absolute -translate-y-1/2 top-1/2 right-2">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Message);
