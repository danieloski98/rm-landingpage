"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image' 
import React, { useState } from 'react'

interface Props { }

function Carousel(props: Props) {

    const { } = props

    const boxAnimation = {
        key: "box",
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    }

    const [isShown, setIsShown] = React.useState(0)


    const data = [
        "/images/home/Slider.png",
        "/images/home/Slider1.png",
        "/images/home/Slider2.png",
        "/images/home/Slider3.png"
    ]

    React.useEffect(() => {
        const t1 = setTimeout(() => {
            if (isShown === data.length - 1) {
                setIsShown(0)
            } else {
                setIsShown(prev => prev + 1)
            }
        }, 5000);
        return () => {
            clearTimeout(t1);
        }
    }, [isShown])

    return (
        <div className=' w-full relative h-[300px] lg:h-[500px] rounded-2xl ' >
            <div className=' absolute inset-0 h-[300px] lg:h-[500px] rounded-2xl  ' >
                {data?.map((item: string, index: number) => {
                    return (
                        <AnimatePresence key={index} >
                            {index === isShown &&
                                <motion.div {...boxAnimation} className=' h-[300px] lg:h-[500px] ' style={{ width: "100%", borderRadius: "16px", position: "absolute", inset: "0px", objectFit: "cover" }} > 
                                    <Image
                                        src={item}
                                        alt="Slider"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className=" rounded-2xl object-cover relative z-10 "
                                        layout="fill"
                                        style={{ width: "100%" }}
                                    />
                                </motion.div>
                            }
                        </AnimatePresence>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
