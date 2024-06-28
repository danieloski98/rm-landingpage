import React from 'react'

export default function Discoverapp() {
    return (
        <div className=' w-full px-[116px] relative ' >
            <div className=' w-[569px] h-[253px] absolute border border-secondary04 rounded-2xl right-0 top-20 '  />
            <div className=' w-full py-20 flex flex-col gap-3 ' >
                <h1 className=' text-[32px] leading-[48px] font-bold ' >Come And Grow With <br /> The RHEMA MENA Community</h1>
                <p className=' leading-6 ' >A 45+ year history of success. Carrying the banner of faith to <br /> this generation! come and grow with us!</p>
                <div className=' relative w-full rounded-2xl bg-primary03 h-[228px] mt-6 pl-14 flex items-center justify-between  ' >
                    <div className=' w-full ' >
                        <h2 className=' text-5xl leading-[64px] font-bold ' >45yrs</h2>
                        <p className=' font-medium leading-6 ' >Of Growing leaders for Jesus christ</p>
                    </div>
                    <div className=' w-full ' >
                        <h2 className=' text-5xl leading-[64px] font-bold ' >1k+</h2>
                        <p className=' font-medium leading-6 ' >Years of instructor experience</p>
                    </div>
                    <div className=' w-full ' >
                        <h2 className=' text-5xl leading-[64px] font-bold ' >116k+</h2>
                        <p className=' font-medium leading-6 ' >Graduated Student </p>
                    </div>
                </div>
            </div>
            <div className=' w-full  py-20 flex flex-col gap-4  relative' >
                <h2 className=' text-[48px] leading-[64px] font-bold ' >Discover your Purpose with RHEMA</h2>
                <p>"The sun never sets on a Rhema graduate preaching the Word of God." <br /> - Kenneth W. Hagin</p>
                <div className=' flex gap-4 mt-4 ' >
                    <button className=' text-sm leading-[22px] border border-primary h-[48px] px-4 rounded-[8px] ' >
                        Learn more about RHEMA
                    </button>
                    <button className=' text-sm leading-[22px] border border-primary03 bg-primary03 h-[48px] px-4 rounded-[8px] ' >
                        APPLY NOW!
                    </button>
                </div>
            </div>
            <div className=' w-[656px] h-[190px] absolute border border-secondary04 rounded-2xl right-5 -bottom-20 '  />
        </div>
    )
}
