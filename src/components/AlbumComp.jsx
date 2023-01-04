import React from 'react'
import Music1 from '../assets/music2.png'
import Heart from '../assets/Heart.png'

const AlbumComp = () => {
  return (
    <div>
        <div>
            <img src={Music1} alt="" />
            <img src={Heart} alt="" />
        </div>
        <p>Let me go - Krisx</p>
        <p>Single</p>
        <p>4:17</p>
        
    </div>
  )
}

export default AlbumComp