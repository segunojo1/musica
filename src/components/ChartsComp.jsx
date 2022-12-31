import React from 'react'

const ChartsComp = ({img, title, name, timestamp}) => {
  return (
    <div className='bg-dark p-[1rem] flex gap-[1rem] rounded-lg w-[29rem]'>
        <img src={img} alt="" />
        <div>
            <p className='text-lg'>{title}</p>
            <p className='text-sm text-[#383833]'>{name}</p>
            <p>{timestamp}</p>
        </div>
    </div>
  )
}

export default ChartsComp