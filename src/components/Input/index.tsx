import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    width?: string;
    error?: string;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    ({ label, width = "full", error, ...props }, ref) => {
            // console.log(props.value, props.name)
        return (
            <div
                className={`w-${width} flex flex-col gap-2 ${
                    width !== "full" ? "my-0" : "my-2"
                }`}
            >
                {label && (
                    <label
                        htmlFor=""
                        className="font-[500] text-[18px] text-[#2B2B2B] "
                    >
                        {" "}
                        {label}
                    </label>
                )}
                <input
                    {...{ ref }}
                    {...props}
                    className={`h-[50px]  bg-[#EDF0F7]  font-[400] text-[#2b2b2b] text-[16px]  border border-[${
                        error ? "#AA4A44" : "#CCCCCC"
                    }] outline-none px-4 rounded-[10px] w-${width}`}
                />
                {error && <p className="text-[#AA4A44] text-[14px]">{error}</p>}
            </div>
        );
    },
);

export default Input;
