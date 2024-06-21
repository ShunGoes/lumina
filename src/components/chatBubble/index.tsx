import { LuCheck, LuCheckCheck } from "react-icons/lu";

interface ChatBubbleProps {
    type: "send" | "receive";
    message: string;
    time: string;
    status?: TMessageStatus;
}
const ChatBubble = ({ type, message, time, status }: ChatBubbleProps) => {
    return (
        <div
            className={`flex ${
                type === "send" ? "justify-end" : "justify-start"
            }`}
        >
            <div>
                <p
                    className={`chat-bubble ${
                        type === "send"
                            ? "bg-primary rounded-xl rounded-br-none"
                            : "bg-[#555555] rounded-xl rounded-bl-none"
                    }`}
                >
                    {message}
                </p>
                <div
                    className={`flex gap-1 items-center justify-${
                        type === "send" ? "end" : "start"
                    }`}
                >
                    <p className={`text-xs `}>{time}</p>
                    {status && (
                        <p
                            className={`text-xs text-${
                                type === "send" ? "right" : "left"
                            }`}
                        >
                            {status === "sent" ? (
                                <LuCheck />
                            ) : status === "delivered" ? (
                                <LuCheckCheck />
                            ) : (
                                <LuCheckCheck color="#F74887" />
                            )}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatBubble;
