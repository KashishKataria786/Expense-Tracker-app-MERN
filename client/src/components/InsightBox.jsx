import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

const InsightBox = ({type, quantity,percentage}) => {
  return (
    <div className=' py-2 px-1 space-y-1'>
        <h6 className='font-bold text-sm'>{type}</h6>
        <h3 className='font-md text-3xl font-semibold'>{quantity}</h3>
        <div className='flex gap-1 items-center text-[14px] text-gray-600'>
            <FaArrowTrendUp color={'green'}/>
            <h6 className='text-[12px] text-gray-600'>{percentage}% vs Last Year</h6>
        </div>
    </div>
  )
}

export default InsightBox