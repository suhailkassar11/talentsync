import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import {images} from "../../constants"

const Points=[
    "30 days free trial",
    "Cancel at any time",
    "Access to all features",
    "Peronalized onboarding"
]

const Product = () => {
  return (
    <div className='h-[697px] top-[3826px] flex justify-between py-24 px-40'>
      <div className='flex flex-col gap-10 h-[432px] w-[579px]'> 
        <div className='gap-8 h-[340px]'>
            <h2 className='h-[120px] text-5xl font-semibold tracking-tighter text-[#101828]'>Ready to clear the path to perfect communication?</h2>
            <div className='pl-4 p-0 h-[188px] gap-5 flex flex-col'>
                {Points.map((item,index)=>(
                    <h2 key={index} className='flex items-center text-[#475467] font-normal text-2xl gap-3'><span className='items-center flex w-7 h-7 rounded-[14px]'><CiCircleCheck className='top-[2.33px] left-[2.33px] h-6 w-6 text-[#175CD3]'/></span>{item}</h2>
                ))}
            </div>
        </div>
        <div className='gap-2 flex h-[52px] w-[347px]'>
            <button className='w-36 h-[52px] rounded-[100px] border-[1px] py-[14px] px-6 gap-1 border-[#98A2B3] bg-[#FFFFFF] text-[#101828] text-base font-semibold'>Talk to sales</button>
            <button className='w-[195px] h-[52px] rounded-[100px] border-t-2 border-0 py-[14px] px-6 gap-1 bg-[#175CD3] text-[#FFFFFF] text-base shadow-sm font-semibold'>Start your free trial</button>
        </div>
      </div>
      <div className='w-[704px] h-[505px]'>
        <img src={images.bottom} alt="bottom" />
      </div>
    </div>
  )
}

export default Product
