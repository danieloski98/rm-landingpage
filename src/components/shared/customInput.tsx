import React from 'react'

interface Option {
    name: string,
    value: string
}

interface IProps {
    className?: string,
    width?: string;
    height?: string;
    label?: string;
    placeholder?: string;
    textarea?: boolean;
    select?: boolean;
    optionData?: Array<Option>;
    leftIcon?: React.ReactNode;
    [x: string]: any;
}

export default function CustomInput({
    className,
    width,
    height,
    label,
    placeholder,
    textarea,
    select,
    optionData,
    leftIcon,
    ...rest
}: IProps) {
    return (
        <div style={{ width: width ?? "267px", height: height ?? "48px" }} className=' relative ' >
            {label && (
                <p className=' bg-secondary05 -top-2 left-4 absolute px-[2px] text-xs leading-[18px] text-primary ' >{label}</p>
            )}
            {leftIcon && (
                <div className=' absolute w-12 h-full flex justify-center items-center' >
                    {leftIcon}
                </div>
            )}
            {(!textarea && !select) && (
                <input {...rest} placeholder={placeholder} className={` ${leftIcon && "pl-12"} w-full h-[48px] border border-[#919EAB52] rounded-lg px-4 bg-transparent text-sm leading-[22px] outline-none ${className} `} />
            )}
            {textarea && (
                <textarea {...rest} placeholder={placeholder} className={` w-full h-[100px] border border-[#919EAB52] rounded-lg px-4 bg-transparent text-sm leading-[22px] outline-none ${className} `} />
            )}
            {select && (
                <select {...rest} className={` ${leftIcon && "pl-12"} w-full h-[48px] border border-[#919EAB52] rounded-lg px-4 bg-transparent text-sm leading-[22px] outline-none ${className} `} >
                    <option value={""} >{placeholder}</option>
                    {optionData && (
                        <>
                            {optionData?.map((item, index) => (
                                <option key={index} value={item?.value} >{item?.name}</option>
                            ))}
                        </>
                    )}
                </select>
            )}

        </div>
    )
}
