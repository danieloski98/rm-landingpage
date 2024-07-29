import React from "react";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import PostCard from "./PostCard";
import Image from 'next/image'
import VideoCard from "./VideoCard";

const items = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    1,
    2,
    3,
    4,
];

export default function VideosArea() {
    const [page, setPage] = React.useState(1);

    const handleForward = React.useCallback(() => {
        if (page !== items.slice(0, 6).length) {
            setPage(page + 1);
        }
    }, [page]);

    const handleBackward = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);
    return (
        <div className="w-full h-auto flex  mt-20 lg:pl-16">
            <div className="sm:w-full lg:w-[60%] flex flex-col sm:px-3 lg:px-0">
                {items.map((_, index) => <PostCard key={index.toString()} />)}

                <div className="w-full border-t-2 border-t-white py-6 flex justify-between">

                    <div onClick={handleBackward} className="sm:flex lg:hidden w-12 h-12 bg-white rounded-lg justify-center items-center">
                        <ArrowLeft size={'30px'} variant="Outline" color="black" />
                    </div>

                    <div onClick={handleBackward} className="w-[20%] h-[50px] items-center sm:hidden lg:flex  cursor-pointer">
                        <ArrowLeft size={'30px'} variant="Outline" color="white" />
                        <p className="font-semibold text-[16px] ml-2">Previous</p>
                    </div>

                    <div className="w-[60%]  h-[50px] items-center justify-center px-6 flex">
                        <div className="sm:hidden lg:flex">
                        {items.slice(0, 6).map((item, index) => (
                            <div key={index.toString()} onClick={() => setPage(index)} className={`w-14 h-14 rounded-md flex justify-center items-center ${page === index && 'bg-white'} cursor-pointer`}>
                                <p className={`font-semibold text-xl ${page === index && 'text-black'}`}>{index + 1}</p>
                            </div>
                        ))}
                        </div>
                        <div className="sm:flex lg:hidden">
                            <p className="font-normal text-[#F4F4F4] text-[14px">page {page} of {items.slice(0, 6).length}</p>
                        </div>
                    </div>

                    <div onClick={handleForward} className="w-[20%]  h-[50px] items-center sm:hidden lg:flex justify-end cursor-pointer z-50">
                        <p className="font-semibold text-[16px] mr-2">Next</p>
                        <ArrowRight size={'30px'} variant="Outline" color="white" />
                    </div>

                    <div onClick={handleForward} className="sm:flex lg:hidden w-12 h-12 bg-white rounded-lg justify-center items-center z-50">
                        <ArrowRight size={'30px'} variant="Outline" color="black" />
                    </div>

                </div>

            </div>

            <div className="lg:w-[30%] lg:flex flex-col sm:hidden">
                <div className="flex w-full h-[70px] items-center border-b-2 border-b-white mb-10">
                    <Image src="/images/fast.svg" width={40} height={40} alt="thunder bolt"className="w-[40px] h-[40px]"  />
                    <p className="ml-6 text-2xl">Highlight of the  week</p>
                </div>
                {items.slice(0, 4).map((_, index) => <VideoCard key={index.toString()} />)}
            </div>

        </div>
    );
}
