import React from 'react'
import {CiSearch} from 'react-icons/ci'
import HeroImg from '../assets/hero1.png'

const Hero = () => {
  return (
    <div className=''>
        <div className='relative mb-[1rem]'>
            <CiSearch className='absolute my-auto h-full ml-[2rem]'/>
            <input type="text" className='p-[1.5rem] px-[4rem]  w-full text-lg' placeholder='       Search artists'/>
        </div>
        <div>
            <img src={HeroImg} alt="hero" />
            <div>
                <h1>Top charts</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero