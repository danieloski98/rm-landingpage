import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { boolean } from 'zod';

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
        <main className="flex w-screen overflow-x-hidden min-h-screen flex-col items-center ">
            <Navbar />
            <div className=" w-full pt-8 " >
                {children}
                <div className=" w-full px-[94px] " >
                    <Footer hide={hidefooterinfo} />
                </div>
            </div>
        </main>
    )
}
