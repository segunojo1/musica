import React from 'react'
import Album1 from '../assets/Lead-image.png'
import Pause from '../assets/Play.png'
import Collection from '../assets/music-square-add.png'
import Love from '../assets/Heart.png'

const Album = () => {
  return (
    <div className="pt-[7rem] flex gap-[2rem] items-center alb">
        <img src={Album1} alt="" className='rounded-3xl'/>
        <div className=' grid gap-[1rem]'>
            <h1 className='text-3xl text-[#A4C7C6]'>Tomorrow's Tunes</h1>
            <p className='text-[#EFEEE0]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi voluptate repellat, distinctio sunt maxime.</p>
            <p className='text-[#EFEEE0]'>64 songs - 16hrs+</p>
            <div className='flex items-center'>
                <div className='flex gap-[1rem] text-[#EFEEE0] p-[1.5rem] rounded-full bg-[transp] items-center'>
                    <img src={Pause} alt="" width='16px' height='16px'/>
                    <p>Play all</p>
                </div>
                <div className='flex gap-[1rem] text-[#EFEEE0] p-[1.5rem] rounded-full bg-[transp] items-center'>
                    <img src={Collection} alt="" />
                    <p>Add to Collection</p>
                </div>
                <img src={Love} alt="like" className='p-[1.5rem] rounded-full bg-[transp]'/>
            </div>
        </div>
    </div>
  )
}

export default Album