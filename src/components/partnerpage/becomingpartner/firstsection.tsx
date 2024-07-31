import React from 'react'
import Homelayout from '../../shared/homelayout'
import HeaderCompontent from '@/components/shared/header'

export default function Firstsection() {
    return (
        <Homelayout first={true} redbgHeight=' lg:h-[107px] h-[51px] ' >
            <div className=' w-full text-primary lg:pl-[116px] z-10 relative py-[10px] ' >
                <HeaderCompontent title='Become a Partner' body='Partnership' />
                <div className=' w-full pt-16 flex flex-col ' >
                    <h3 className=' text-center font-bold text-lg lg:text-[32px] lg:mx-auto lg:w-fit leading-[18px] lg:leading-[48px] pb-1 border-b border-primary03 ' >A LETTER TO OUR PARTNERS FROM KENNETH W. HAGIN</h3>
                    <div className=' w-full flex lg:flex-row flex-col mt-10 gap-8 ' >
                        <div className=' w-full lg:w-[404px] h-[229.23px] lg:h-[270px] rounded-2xl ' >
                            <img alt='blog' src='/images/partner.png' className=' w-full h-full object-cover rounded-2xl ' />
                        </div>
                        <div className=' flex flex-col flex-1 ' >
                            <h5 className=' text-[20px] leading-[30px] text-primary font-bold ' >Dear Friend,</h5>
                            <p className=' leading-[24px] mt-4 text-primary ' >
                                {`Everyone wants to be a part of something greater than themselves. We dream of changing the world, making it a better place for us and our children. We dream of making a difference.`}
                                <br /><br />
                                {`In a world filled with fear, oppression, and sickness—a world where people die every day without knowing their Savior—you can make that difference. Your mission, should you choose to accept it, is to join us in reaching the world for Jesus.`}
                                <br /><br />
                                {`RHEMA Partners are vital members of the Rhema family. Through their prayers and financial support, they help fulfill God’s plan to save people and set them free. Together, we are reaching across generations, cultures, and nations to share the Good News of Jesus Christ and the message of faith in God with men, women, and children in every corner of the earth.`}
                                <br /><br />
                                {`If you’ve been helped, strengthened, or blessed through this ministry, we encourage you to become an essential piece of what we do. Become a Partner and join the adventure. Live the life you were meant to live, leave your mark throughout the earth, and experience the joy and satisfaction that come only with knowing you have made a difference—an eternal difference—in life after life around the world.`}
                                <br /><br />
                                {`In Christ,`}
                            </p>
                            <h5 className=' text-[20px] leading-[30px] text-primary font-bold mt-4 ' >Kenneth W. Hagin</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Homelayout>
    )
}
