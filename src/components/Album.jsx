import React from 'react'
import Album1 from '../assets/Lead-image.png'

const Album = () => {
  return (
    <div className='mt-[7rem]'>
        <img src={Album1} alt="" className='rounded-3xl'/>
        <div>
            <h1>Tomorrow's Tunes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi voluptate repellat, distinctio sunt maxime.</p>
            <p>64 - 16hrs+</p>
        </div>
    </div>
  )
}

export default Album