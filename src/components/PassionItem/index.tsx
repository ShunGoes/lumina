interface PassionProps {
    passion: IPassion;
    isActive: boolean;
    selectPassion: (id: number) => void;
}

const PassionItem = ({ passion, isActive, selectPassion }: PassionProps) => {
    return (
        <span
            onClick={() => selectPassion(passion.id)}
            className={`${
                isActive ? "border-primary" : ""
            } rounded-[20px] flex justify-center items-center lg:py-[8px] px-[12px] py-[4px] border lg:border-[2px] m-[5px] border-[#CCCCCC] text-[12px] lg:text-[14px] font-[200] lg:font-[400] cursor-pointer `}
        >
            {passion.name}
        </span>
    );
};

export default PassionItem;
