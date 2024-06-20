import { observer } from "mobx-react-lite";
import Modal from "react-responsive-modal";
import { useStore } from "../../stores";
import ChatBubble from "../chatBubble";

// eslint-disable-next-line react-refresh/only-export-components
const MatchModal = () => {
    const {
        ExploreStore: { showMatchModal, toggleMatchModal },
    } = useStore();
    return (
        <Modal
            open={showMatchModal}
            onClose={() => toggleMatchModal()}
            center
            classNames={{
                modal: "rounded-xl max-w-[500px] w-full bg-[#FFFFFF]",
            }}
        >
            <div>
                <div className="border-b">
                    <h1 className="font-bold text-xl">It's a match!</h1>
                    <p>You can now chat with this user.</p>
                </div>
                <div className="min-h-[50px] max-h-[300px] overflow-hidden overflow-y-scroll py-4">
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
                </div>
                <div className="border-t pt-2">
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
        </Modal>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(MatchModal);
