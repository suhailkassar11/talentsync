import React from 'react'
import {IoVideocamOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
import { LiaUnlockAltSolid } from "react-icons/lia";
import { BsSoundwave } from "react-icons/bs";
import { images } from '../../constants';

const gridItems=[
    {
        icon:<IoVideocamOutline className='h-[18px] w-[18px] text-[#175CD3] top-[3px] left-[3px]'/>,
        heading:"Crystal-clear HD video",
        text:"No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings."
    },
    {
        icon:<BsSoundwave className='h-[18px] w-[18px] text-[#175CD3] top-[3px] left-[3px]'/>,
        heading:"Noise-canceling audio",
        text:"Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations."
    },
    {
        icon:<TfiBag className='h-[18px] w-[18px] text-[#175CD3] top-[3px] left-[3px]'/>,
        heading:"Scheduling made easy",
        text:"Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."
    },
    {
        icon:<LiaUnlockAltSolid className='h-[18px] w-[18px] text-[#175CD3] top-[3px] left-[3px]'/>,
        heading:"Bank-grade security",
        text:"Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders."
    },
]

const About = () => {
  return (
    <div className='flex flex-col h-[983px] py-[96px] px-[160px] gap-[80px] top-[1181px]'>
      <div>
       <div className='gap-[12px] h-[100px]'>
       <p className='font-inter font-semibold text-lg text-[#175CD3]'>The ClerkLink Advantage</p>
        <h2 className='font-inter font-semibold text-5xl leading-15 tracking-tighter text-left text-[#1D2939]'>
            Why choose ClerkLink?
        </h2>
       </div>
    <div className='flex'>
    <p className='text-2xl h-[64px] w-[842px] text-[#667085]'>In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</p>
        <img  className='absolute right-0 z-20 w-[238.23px] h-[157.32px]' src={images.arrow} alt="" />
    </div>
      </div>
      <div className='w-[1408px] h-[527px] flex justify-between items-center'>
        <div className='flex flex-wrap gap-[40px] h-[488px] w-[800px]'>
            {gridItems.map((item,index)=>(
                <div key={index} className='flex flex-col gap-[20px] h-[200px] w-[360px]'>
                    <span className='p-4 gap-[10px] rounded-[100px] border-[1px] h-14 w-14 bg-[#F9FAFB] border-[#EAECF0]'>{item.icon}</span>
                    <div className='w-[360px] h-[124px] gap-[8px]'>
                        <h2 className='text-2xl font-semibold text-[#101828]'>{item.heading}</h2>
                        <p className='text-lg font-normal text-[#475467]'>{item.text}</p>
                    </div>

                </div>
            ))}
        </div>
        <div>
            <img className='w-[544px] h-[527px]' src={images.Rectangle} alt="rectangle" />
        </div>
      </div>
    </div>
  )
}

export default About
