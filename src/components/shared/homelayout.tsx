import Image from 'next/image'
import React from 'react'

export default function Homelayout({
    children,
    hidemena,
    redbgHeight,
    first
}: Readonly<{
    children: React.ReactNode;
    hidemena?: boolean,
    redbgHeight?: string,
    first?: boolean
}>) { 
    return (
        <div className=' w-full relative ' >
            {!hidemena && (
                <Image className=' absolute lg:block hidden left-1 top-[230px] ' src={"/images/home/MENA.svg"} alt='MENA' width={100} height={168} />
            )}
            {first && (
                <div className={` max-w-[534px] w-full lg:w-[534px] ${redbgHeight ?? "h-[182px]"} rounded-lg lg:rounded-2xl bg-primary03 z-10 absolute top-0 left-0 lg:left-[50px] `} />
            )}
            {children}
        </div>
    )
}
