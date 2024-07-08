import Image from 'next/image'
import React from 'react'

interface IProps {
    limit?: boolean
}

export default function PrayerCard({ limit }: IProps) {

    const LocationCard = () => {
        return (
            <div className=' flex gap-4 ' >
                <Image src={"/images/pray.png"} width={82} height={82} alt='pray' />
                <div className=' mt-auto ' >
                    <p className=' text-xs leading-[18px] ' >Pray for</p>
                    <p className='  leading-7 font-semibold ' >Algeria</p>
                </div>
            </div>
        )
    }

    return (
        <>
            {limit && (
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
            )}
            {!limit && (
                <div className=' w-fit flex justify-between gap-12 relative ' > 
                    <div className=' w-[537px] h-[182px] rounded-2xl bg-secondary10 z-0 absolute -top-8 -left-10 ' />
                    <div className=' w-fit flex relative flex-col gap-6  ' >
                        <LocationCard />
                        <LocationCard />
                        <LocationCard />
                        <LocationCard />
                        <LocationCard />
                    </div>
                    <div className=' w-[1px] h-[160px] relative bg-secondary04 ' />
                    <div className=' w-fit flex relative flex-col gap-6  ' >
                        <LocationCard />
                        <LocationCard />
                        <LocationCard />
                        <LocationCard />
                    </div>
                    <div className=' w-[1px] h-[160px] relative bg-secondary04 ' />
                    <div className=' w-fit flex relative flex-col gap-6  ' >
                        <LocationCard />
                        <LocationCard />
                        <LocationCard />
                        <LocationCard />
                    </div>
                    <div className=' w-[1px] h-[160px] relative bg-secondary04 ' />
                    <div className=' w-fit flex relative flex-col gap-6  ' >
                        <LocationCard />
                        <LocationCard />
                        <LocationCard />
                        <LocationCard />
                    </div>
                </div>
            )}
        </>
    )
}
