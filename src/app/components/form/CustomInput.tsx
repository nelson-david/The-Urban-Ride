import { CustomInputProps } from "@/app/types";

const CustomInput = ({
    value,
    onChange,
    placeholder,
    type,
    useLabel,
    label,
}: CustomInputProps) => {
    return (
        <div>
            {useLabel && (
                <label className="font-inter font-semibold opacity-65 text-black text-[0.8vw] tracking-tight">
                    {label}
                </label>
            )}
            <input
                placeholder={!useLabel ? placeholder : ""}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
                type={type ? type : "text"}
                className="w-full h-[50px] px-[10px] border border-[#1b212e11] focus:outline-none focus:ring-0 focus:border-[#1b212e33] shadow-none text-sm font-medium mt-1 tracking-tight resize-none font-inter placeholder-slate-300"
            />
        </div>
    );
};

export default CustomInput;
