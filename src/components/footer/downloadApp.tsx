import { AppleStore, GooglePlayStore } from '@/svg'
import React from 'react'

export default function DownloadApp() {
    return ( 
        <div className=' flex flex-col gap-1 text-white lg:px-[116px] ' >
            <p className=' text-sm leading-[22px] ' >Download the <br /> Student App</p>
            <div className=' mt-3 flex flex-col gap-4 ' >
                <button className=' w-[135px] h-[40px] ' >
                    <AppleStore />
                </button>
                <button className=' w-[135px] h-[40px] ' >
                    <GooglePlayStore />
                </button>
            </div>
        </div>
    )
}
