import React from 'react'
import Music7 from '../assets/music8.png'
import Shuffle from '../assets/shuffle.png'
import Previous from '../assets/previous.png'
import Pause from '../assets/pause.png'
import Next from '../assets/next.png'
import Repeat from '../assets/repeate-one.png'
import Volume from '../assets/volume-high.png'

const Player = () => {
  return (
    <div className='fixed bottom-0 backdrop-blur-xl bg-transp w-full'>
        <div className='pr-[5rem] pl-[8rem] pb-[.7rem] justify-between flex'>
        <div className='flex items-center gap-[10px]'>
            <img src={Music7} alt="" height='49px' width='49px' className='rounded-2xl'/>
            <div>
                <p>Seasons in</p>
                <p className='text-sm text-text-col'>James</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center gap-[1.5rem]'>
                <img src={Shuffle} alt="shuffle"  className='cursor-pointer'/>
                <img src={Previous} alt="Previous"  className='cursor-pointer'/>
                <img src={Pause} alt="Pause"  className='cursor-pointer'/>
                <img src={Next} alt="next"  className='cursor-pointer'/>
                <img src={Repeat} alt="repeat"  className='cursor-pointer'/>
            </div>
            <div className='w-[700px] h-[3px] bg-white/30'></div>
        </div>
        <div className='flex items-center gap-[10px]'>
            <img src={Volume} alt="volume" className='cursor-pointer'/>
            <div className='w-[100px] h-[3px] bg-white/30'></div>
        </div>
        </div>
    </div>
  )
}

export default Player