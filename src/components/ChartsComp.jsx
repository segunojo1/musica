import React from 'react'
import Heart from '../assets/Heart.png'

const ChartsComp = ({img, title, name, timestamp}) => {
  return (
    <div className='bg-dark p-[1rem] flex items-center justify-between rounded-lg w-[29rem]'>
        <div className='flex gap-[2rem]'>
            <img src={img} alt="" />
            <div>
                <p className='text-lg'>{title}</p>
                <p className='text-sm text-text-col'>{name}</p>
                <p>{timestamp}</p>
            </div>
        </div>
        <img src={Heart} alt="like it!" className='p-[1rem] border rounded-full' />
    </div>
  )
}

export default ChartsComp