import { forwardRef, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label? : string,
    width? : string
}


const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({label, width = "full" , ...props}, ref) => {
  return (
    <div className={`w-${width} flex flex-col gap-2 h-[94px] ${width !== "full" ? "my-0" : "my-2"}`}>
   {
    label && (
      <label htmlFor="" className="font-[500] text-[18px] text-[#2B2B2B] ">
      {" "}
      {label}
    </label>
    )
   }
    <input
    {...{ref}}
      {...props}
      className="h-[50px]  bg-[#EDF0F7] font-[400] text-[#2b2b2b] text-[16px]  border border-[#CCCCCC] outline-none px-4 rounded-[10px]  "
    />
  </div>
  )
})

export default Input