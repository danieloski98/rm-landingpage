import React from 'react'
import Navbar from './navbar'
import Footer from '../footer' 

export default function Landingpagelayout({
    children,
    hidemena,
    hidefooterinfo
}: Readonly<{
    children: React.ReactNode;
    hidemena?: boolean,
    hidefooterinfo?: boolean
}>) {
    return (
        <main className="flex w-full overflow-x-hidden h-auto flex-col items-center ">
            <Navbar />
            <div className=" w-full lg:px-0 " >
                {children}
                <div className=" w-full lg:px-[94px] px-3 " >
                    <Footer />
                </div>
            </div>
        </main>
    )
}
