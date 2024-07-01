import Image from 'next/image'
import React from 'react'
import Homelayout from '../shared/homelayout'

export default function Herosection() {

    const LocationCard = () => {
        return (
            <div className=' flex gap-4 ' >
                <div className=' w-[82px] h-[82px] rounded-xl bg-green-600 ' ></div>
                <div className=' mt-auto ' >
                    <p className=' text-xs leading-[18px] ' >Pray for</p>
                    <p className='  leading-7 font-semibold ' >Algeria</p>
                </div>
            </div>
        )
    } 
    
    return (
        <Homelayout>
            <div className=' w-[534px] h-[182px] rounded-2xl bg-primary03 z-10 absolute top-0 left-[50px] ' />
            <div className=' w-[537px] h-[162px] rounded-t-2xl border border-b-0 border-secondary04 absolute bottom-0 right-0 ' />
            <div className=' w-full text-primary pl-[116px] z-10 relative py-[115px] ' >
                <h1 className=' text-5xl leading-[64px] font-bold ' >RHEMA MENA IS FOR YOU!</h1>
                <p className=' max-w-[551px] mt-4 leading-6 ' >
                    {`RHEMA MENA is a regional extension of Kenneth Hagin’s Rhema Bible Training College - with same goal of strengthening God’s Church to fulfill its purpose in the MENA region.`}
                    <br /><br />
                    {`RHEMA MENA is a regional extension of Kenneth Hagin’s Rhema Bible Training College - with same goal of strengthening God’s Church to fulfill its purpose in the MENA region.`}
                </p>
                <div className=' w-full relative pt-12 pr-12 ' >
                    <div className=' w-[537px] h-[182px] bg-secondary04 rounded-2xl absolute right-0 top-0 ' />
                    <Image src={"/images/home/Slider.png"} alt='Slider'
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=' rounded-2xl relative z-10 '
                        style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className=' w-full relative mt-6 pt-[120px] ' >
                    <div className=' w-[537px] h-[182px] rounded-2xl bg-secondary10 absolute top-0 ' />
                    <div className=' w-full relative z-10 pl-20 ' >
                        <h2 className=' text-2xl leading-9 ' >MENA Prayer Meetings</h2>
                        <p className=' text-sm leading-[22px] ' >Join the MENA Prayer Meetings</p>
                        <div className=' w-fit flex mt-8 justify-between gap-12 items-center ' >
                            <div className=' w-fit flex flex-col gap-6  ' >
                                <LocationCard />
                                <LocationCard />
                            </div>
                            <div className=' w-[1px] h-[160px] bg-secondary04 ' />
                            <div className=' w-fit flex flex-col gap-6  ' >
                                <LocationCard />
                                <LocationCard />
                            </div>
                            <div className=' w-[1px] h-[160px] bg-secondary04 ' />
                            <div className=' w-fit flex flex-col gap-6  ' >
                                <LocationCard />
                                <LocationCard />
                            </div>
                            <div className=' w-[1px] h-[160px] bg-secondary04 ' />
                            <div className=' w-fit flex flex-col gap-6  ' >
                                <LocationCard />
                                <LocationCard />
                            </div>
                        </div>
                        <button className=' text-sm leading-[22px] border border-primary h-[38px] px-4 rounded-[32px] mt-11 ' >
                            View all
                        </button>
                    </div>
                </div>
            </div>
        </Homelayout>
    )
}
