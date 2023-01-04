import React from 'react'
import Music1 from '../assets/music2.png'
import Heart from '../assets/Heart.png'
import Vertical from '../assets/more-vertical.png'

const AlbumComp = () => {
  return (
    <div className='flex items-center justify-between bg-bgg p-[.7rem] rounded-xl'>
        <div className='flex items-center gap-[1rem]'>
            <img src={Music1} alt="" width='39px' height='39px' className='rounded-xl'/>
            <img src={Heart} alt="" />
        </div>
        <p>Let me go - Krisx</p>
        <p>Single</p>
        <p>4:17</p>
        <img src={Vertical} alt="" />
    </div>
  )
}

export default AlbumComp