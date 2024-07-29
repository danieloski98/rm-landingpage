'use client';
/* eslint-disable react/no-unescaped-entities */

import { useRouter } from 'next/navigation'
export default function VideoCard() {
    const router = useRouter();
    const navigate = () => {
        router.push("/training/blog/2lnenqlelf")
    }
    return (
        <div onClick={navigate} className="w-full sm:h-auto lg:h-auto flex sm:flex-col lg:flex-row items-center mb-10">
            <div className="sm:w-[100%] lg:w-[96px] h-[64px] bg-gray-500 rounded-lg overflow-hidden">
            <img src='/images/hand.svg' alt='image' className="w-[100%] h-[100%] object-cover" />
            </div>
            <div className="flex flex-col sm:ml-0 lg:ml-4 sm:mt-4 lg:mt-0">
                <h3 className="font-semibold text-[14px] text-white sm:w-full lg:w-[60%]">Introduction to Bible Study: Unlocking the Power of God's Word</h3>
                <p className=" font-normal text-[12px] text-[#828282] mt-2 sm:w-full lg:w-[60%]">In this foundational post, we'll explore the significance of Bible study, its transformative potential, and why it's ...</p>
            </div>
        </div>
    )
}