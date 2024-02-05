import React from 'react'
import { images } from '../../constants'
import { FaLinkedin,FaTwitter,FaFacebook,FaInstagramSquare,FaGithub,FaYoutube } from "react-icons/fa";

const FooterIcon=[
    {id:1,icon:<FaLinkedin className='text-[#98A2B3] w-6 h-6'/>},
    {id:2,icon:<FaTwitter className='text-[#98A2B3] w-6 h-6'/>},
    {id:3,icon:<FaFacebook className='text-[#98A2B3] w-6 h-6'/>},
    {id:4,icon:<FaInstagramSquare className='text-[#98A2B3] w-6 h-6'/>},
    {id:5,icon:<FaGithub className='text-[#98A2B3] w-6 h-6'/>},
    {id:6,icon:<FaYoutube className='text-[#98A2B3] w-6 h-6'/>}
]

const Product=[
    "Overview","Features","Solutions","Tutorials","Pricing"
]
const Company=[
    "About us","Careers","press","News","Contact"
]
const Resources=[
    "Blog","Events","Help center","Tutorials","Support"
]
const Legal=[
    "Terms","Privacy","Cookies","Licenses","Contact"
]

const Footer = () => {
  return (
    <div className='h-[508px] flex items-center flex-col top-[4523px] bg-[#FFFFFF]'>
      <div className=' flex items-center h-[388px] py-24 px-0 gap-16'>
        <div className='flex h-[244px] gap-[100px]'>
            <div className='flex flex-col gap-8 h-[145px] w-[400px]'>
                <h2 className='flex gap-[10px] text-2xl font-semibold text-[#101828]'><span><img className='w-[25.38px] h-7' src={images.Group} alt="group" /></span>ClerkLink</h2>
                <p className='text-lg text-[#475467] font-normal w-[400px] h-[84px]'>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
            </div>
            <div className='flex gap-8 w-[903px] h-[244px]'>
                <div className='flex flex-col gap-4 w-[160px]'>
                    <h2 className='text-[#667085] text-base'>Product</h2>
                    {Product.map((item,index)=>(
                        <h3 className='text-[#475467] text-lg font-semibold' key={index}>{item}</h3>
                    ))}
                </div>
                <div className='flex flex-col gap-4 w-[160px]'>
                    <h2 className='text-[#667085] text-base'>Company</h2>
                    {Company.map((item,index)=>(
                        <h3 className='text-[#475467] text-lg font-semibold' key={index}>{item}</h3>
                    ))}
                </div>
                <div className='flex flex-col gap-4 w-[160px]'>
                    <h2 className='text-[#667085] text-base'>Resources</h2>
                    {Resources.map((item,index)=>(
                        <h3 className='text-[#475467] text-lg font-semibold' key={index}>{item}</h3>
                    ))}
                </div>
                <div className='flex flex-col gap-4 w-[160px]'>
                    <h2 className='text-[#667085] text-base'>Legal</h2>
                    {Legal.map((item,index)=>(
                        <h3 className='text-[#475467] text-lg font-semibold' key={index}>{item}</h3>
                    ))}
                </div>
                <div className='flex flex-col gap-4 w-[160px]'>
                    <h2 className='text-[16px] font-semibold leading-[24px] text-[#004EEB]'>Get the app</h2>
                    <div className='flex flex-col gap-4 w-[135px] h-24'>
                        <img className='h-10' src={images.Mobile} alt="Mobile" />
                        <img className='h-10' src={images.MobileBadge} alt="mobileBadge" />
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-[#F9FAFB] gap-16 py-12 px-0 h-[120px] flex justify-center items-center'>
        <div className='flex  gap-8 h-6 w-[1408px] items-center justify-center'>
            <h2 className='text-base font-normal text-[#667085] w-[1112px] items-center'>© 2023 ClearLink. All rights reserved.</h2>
            <div className='flex gap-6 items-center'>
                {FooterIcon.map((item)=>(
                    <span key={item}>{item.icon}</span>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
