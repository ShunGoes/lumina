interface PassionProps {
    passion: string | number;
    idx: number;
    isActive: boolean;
    selectPassion: (id: number) => void;
}

const PassionItem = ({
    passion,
    idx,
    isActive,
    selectPassion,
}: PassionProps) => {
    return (
        <span
            onClick={() => selectPassion(idx)}
            className={`${
                isActive ? "border-[#F74887]" : ""
            } rounded-[20px] flex justify-center items-center lg:py-[8px] px-[12px] py-[4px] border lg:border-[2px] m-[5px] border-[#CCCCCC] text-[12px] lg:text-[14px] font-[200] lg:font-[400] cursor-pointer `}
        >
            {passion}
        </span>
    );
};

export default PassionItem;
