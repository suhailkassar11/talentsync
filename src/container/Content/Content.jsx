import React from 'react'
import {images} from "../../constants"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

const Content = () => {
  return (
    <div className='h-[748px] top-[2164px] py-[96px] px-0 flex items-center justify-center gap-[64px] bg-[#F9FAFB]'>
      <div className='w-[1408px] h-[556px] py-0 px-8 flex gap-[64px]'>
        <div className='w-[640px] flex flex-col h-[556px] gap-[48px]'>
          <img className='h-[32px] w-[112.79px]' src={images.Shopify} alt="shopify" />
          <img className='w-[116px] h-[20px] gap-[4px] flex' src={images.Stars} alt="stars" />
          <p className='w-[640px] h-[300px] text-[44px] leading-[60px] tracking-tighter font-medium text-[#101828]'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</p>
          <div className='flex items-center w-[640px] h-[60px] gap-[12px]'>
            <div className='flex items-center gap-4 w-[484px] h-[60px]'>
              <img className='text-xl w-14 h-14' src={images.Avatar} alt="avatar" />
              <div className='flex flex-col w-[412px] h-[60px] gap-[2px]'>
                <h2 className='text-xl font-semibold leading-[30px] text-[#101828]'>Sarah Thompson</h2>
                <p className='font-normal text-lg text-[#475467]'>Project Manager, Shopify</p>
              </div>
            </div>
            <div className='flex gap-8 h-14 w-36'>
              <button className='flex justify-center items-center w-14 h-14 gap-[12px] rounded-[28px]  border-[1px] border-[#D1E9FF] text-[#175CD3] '><FaArrowLeft className='top-[5px] left-[5px]  w-[14px] h-[14px] text-[#175CD3]'/></button>
              <button className='flex justify-center items-center w-14 h-14 gap-[12px] rounded-[28px]  border-[1px] border-[#D1E9FF] text-[#175CD3] '><FaArrowRight className='top-[5px] left-[5px]  w-[14px] h-[14px] text-[#175CD3]'/></button>
              
            </div>
          </div>
        </div>
        <div className='w-[640px] h-[496px]'>
          <img  src={images.Contents} alt="contents" />
        </div>
      </div>
    </div>
  )
}

export default Content
