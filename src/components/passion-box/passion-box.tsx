import { useContext, useState } from "react";
import { Auth_Context } from "../../context/auth.context";

import { PASSION_DATA } from "../registration-form/passion-data";

interface PassionProps {
  passion: string;
  idx: number;
}

const Passion_Box = ({ passion, idx }: PassionProps) => {
  const { setRegisterInfo, registerInfo } = useContext(Auth_Context)!;
  const [active, setActive] = useState(false)
  

  const add_item_to_passion = (index: number) => {
    const item_to_add = PASSION_DATA[index];
    const passion_set: Set<string> = new Set([...registerInfo.passion])

    if(registerInfo.passion.has(item_to_add)){
      passion_set.delete(item_to_add)
      setRegisterInfo({
        ...registerInfo,
        passion: new Set([...passion_set]),
      });
    } else{
      passion_set.add(item_to_add)
        setRegisterInfo({
          ...registerInfo,
          passion: new Set([...passion_set]),
        });

    }
    setActive((prev: boolean) => !prev)
  };

  return (
    <span
      onClick={() => add_item_to_passion(idx)}
      className={`${active ? 'border-[#F74887]' : "" } rounded-[20px] flex justify-center items-center lg:py-[8px] px-[12px] py-[4px] border lg:border-[2px] m-[5px] border-[#CCCCCC] text-[12px] lg:text-[14px] font-[200] lg:font-[400] cursor-pointer `}
      >
      {passion}
    </span>
  );
};

export default Passion_Box;
