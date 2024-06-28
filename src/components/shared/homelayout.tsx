import Image from 'next/image'
import React from 'react'

export default function Homelayout({
    children,
    hidemena,
}: Readonly<{
    children: React.ReactNode;
    hidemena?: boolean
}>) {

    return (
        <div className=' w-full relative ' >
            {!hidemena && (
                <Image className=' absolute left-1 top-[230px] ' src={"/images/home/MENA.svg"} alt='MENA' width={100} height={168} />
            )}
            {children}
        </div>
    )
}
