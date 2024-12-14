import React from 'react'
import Newsletter from '../shared/newsletter' 
import { usePathname } from 'next/navigation'
import DownloadApp from './downloadApp'

export default function ContactInfo() { 

    const pathname = usePathname()

    return ( 
        <>
            {pathname === "/" && (
                <div className=' w-full flex lg:px-[116px] lg:flex-row flex-col-reverse gap-6 lg:justify-between  ' >
                    <div className=' flex flex-col gap-1 text-secondary01 ' >
                        <h6 className=' font-bold text-lg leading-[28px] ' >Contact us</h6>
                        <p className=' text-sm leading-[22px] mt-2 ' >RHEMA MENA</p>
                        <p className=' text-sm leading-[22px] ' >+961 81 206 946</p>
                        <p className=' text-sm leading-[22px] ' ><span className='text-secondary02 ' >Email: </span>admin@rhemamena.com</p>
                    </div>
                    <Newsletter />
                    <div className=' lg:block hidden   ' > 
                        <DownloadApp />
                    </div>
                </div>
            )}
        </>
    )
}
