'use client';
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'


import { useRouter } from 'next/navigation'
export default function PostCard() {
    const router = useRouter();
    const navigate = () => {
        router.push("/training/blog/2lnenqlelf")
    }
    return (
        <div onClick={navigate} className="w-full sm:h-auto lg:h-[210px] flex sm:flex-col lg:flex-row items-center mb-10">
            <div className="sm:w-[100%] lg:w-[30%] h-[200px] bg-gray-500 rounded-lg overflow-hidden">
                <img src='/images/man.svg' alt='image' className="w-[100%] h-[100%] object-cover" />
            </div>
            <div className="flex flex-col sm:ml-0 lg:ml-4 sm:mt-4 lg:mt-0">
                <p className=" text-red-500 text-[14px] font-bold">Article</p>
                <h3 className="font-semibold text-[18px] text-white sm:w-full lg:w-[60%]">Introduction to Bible Study: Unlocking the Power of God's Word</h3>
                <p className=" font-normal text-[16px] text-[#828282] mt-2 sm:w-full lg:w-[60%]">In this foundational post, we'll explore the significance of Bible study, its transformative potential, and why it's ...</p>

                <div className="flex items-center mt-2 ">
                    <div className="w-14 h-14 rounded-full bg-gray-500">
                    <img src='/images/priest.svg' alt='image' className="w-[100%] h-[100%] object-cover" />
                    </div>
                    <div className="ml-3">
                        <p className="font-semibold text-[16px] text-[whitesmoke]">Phoniex Baker</p>
                        <p className="font-normal text-[16px] text-[whitesmoke]">19 Jan 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}