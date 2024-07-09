'use client';
/* eslint-disable react/no-unescaped-entities */

import { useRouter } from 'next/navigation'
export default function NewPostCard() {
    const router = useRouter();
    const navigate = () => {
        router.push("/training/blog/2lnenqlelf")
    }
    return (
        <div onClick={navigate} className="w-full h-auto flex flex-col items-center mb-10">
            <div className="w-[100%] h-[400px] bg-gray-500 rounded-lg"></div>
            <div className="flex flex-col sm:ml-0 lg:ml-4 sm:mt-4 lg:mt-0">
                <p className=" text-red-500 text-[14px] font-bold my-4">Article</p>
                <h3 className="font-semibold text-[18px] text-gray-600 sm:w-full lg:w-[90%]">Introduction to Bible Study: Unlocking the Power of God's Word</h3>
                <p className=" font-normal text-[16px] text-[#828282] mt-2 sm:w-full lg:w-[90%]">In this foundational post, we'll explore the significance of Bible study, its transformative potential, and why it's ...</p>

                <div className="flex items-center mt-2 ">
                    <div className="w-14 h-14 rounded-full bg-gray-500"></div>
                    <div className="ml-3">
                        <p className="font-semibold text-[16px] text-gray-600">Phoniex Baker</p>
                        <p className="font-normal text-[16px] text-gray-400">19 Jan 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}