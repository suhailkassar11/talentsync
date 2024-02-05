import React from 'react'
import { images } from '../../constants'

const companies=[
    {id:1,icon:<img src={images.Shopify} alt="shopify" />},
    {id:2,icon:<img src={images.Coinbase} alt="coinbase" />},
    {id:3,icon:<img src={images.Dropbox} alt="dropbaox"/>},
    {id:4,icon:<img src={images.Intercom} alt="intercom"/>},
    {id:5,icon:<img src={images.Marvel} alt="marvel"/>},
    {id:6,icon:<img src={images.Automatic} alt="automatic"/>}
]

const Companies = () => {
  return (
    <div className='h-[313px] top-[868px] py-[96px] px-0 bg-[#FFFFFF]'>
      <div className='py-0 px-[32px] gap-[48px] h-[121px] flex flex-col items-center justify-center'>
        <h2 className='text-center font-inter font-medium text-xl text-[#475467]'>
        Join 1,500+ companies already video conferencing the ClearLink way
        </h2>
        <div className='flex gap-[69px] items-center'>
            {companies.map((item)=>(
                <div key={item.id} className='w-[151.56px] h-[43px] flex items-center'>
                    {item.icon}
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Companies
