import React from 'react'

export default function BlogData() {

    const BlogCard = () => {
        return (
            <div className=' w-full flex flex-col gap-6 ' >
                <div className=' w-full h-[240px]  rounded-2xl ' >
                    <img alt='blog' src='/images/blogimg.png' className=' w-full h-full object-cover rounded-2xl ' />
                </div>
                <div className=' w-full flex flex-col gap-2 ' >
                    <p className=' text-sm leading-[22px] text-primary01 font-medium ' >Articles</p>
                    <p className=' text-xl leading-[28px] font-semibold ' >Bible School Alumni Stories: Impacting the World for Christ</p>
                    <p className=' leading-6 ' >Be inspired by the remarkable stories and achievements of our Bible school alumni, individuals who have gone on to...</p>
                </div>
                <div className=' flex items-center gap-3 ' >
                    <div className=' rounded-full w-10 h-10 ' >
                        <img alt='blog' src='/images/Avatar.png' className=' w-full h-full object-cover rounded-full ' />
                    </div>
                    <div className=' ' >
                        <p className=' font-semibold text-sm leading-5 ' >Olivia Rhye</p>
                        <p className=' text-sm leading-5 ' >20 Jan 2024</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className=' relative w-full flex lg:flex-row flex-col gap-4 mt-8  ' >
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    )
}
