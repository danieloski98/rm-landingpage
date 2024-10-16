import React from 'react'

interface IProps {
    title: string,
    body: string
}

export default function HeaderCompontent({
    title,
    body
}: IProps) {
    return (
        <div className=' w-full pb-4 lg:py-0 border-b lg:border-b-0 border-secondary04 ' >
            <h1 className=' pl-6 text-2xl lg:text-[64px] leading-[36px] lg:leading-[80px] font-bold ' >{title}</h1>
            <p className=' pl-6 text-secondary01 leading-6 mt-3 lg:mt-5 ' >{body}</p>
        </div>
    )
}
