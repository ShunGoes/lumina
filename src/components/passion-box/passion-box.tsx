import { useContext, useState } from "react";
import { Auth_Context } from "../../context/auth.context";

interface PassionProps {
  passion: string | number;
  idx: number | string;
}

const Passion_Box = ({ passion, idx }: PassionProps) => {
  // console.log(passion, idx)

  const { setRegisterInfo, registerInfo } = useContext(Auth_Context)!;
  const [active, setActive] = useState(false);

  const add_item_to_passion = (index: number) => {
    const item_to_add = index;
    const passion_set: Set<number> = new Set([...registerInfo.passion]);

    if (registerInfo.passion.has(item_to_add)) {
      // passion_set.delete(item_to_add)
      // setRegisterInfo({
      //   ...registerInfo,
      //   passion: new Set([...passion_set]),
      // });
      return;
    } else if (
      !registerInfo.passion.has(item_to_add) &&
      registerInfo.passion.size < 4
    ) {
      passion_set.add(item_to_add);
      setRegisterInfo({
        ...registerInfo,
        passion: new Set([...passion_set]),
      });
    }
    setActive((prev: boolean) => !prev);
  };

  return (
    <span
      onClick={() => add_item_to_passion(idx as number)}
      className={`${
        active ? "border-[#F74887]" : ""
      } rounded-[20px] flex justify-center items-center lg:py-[8px] px-[12px] py-[4px] border lg:border-[2px] m-[5px] border-[#CCCCCC] text-[12px] lg:text-[14px] font-[200] lg:font-[400] cursor-pointer `}
    >
      {passion}
    </span>
  );
};

export default Passion_Box;
