import React from 'react'
import Album1 from '../assets/Lead-image.png'
import Pause from '../assets/Play.png'
import Collection from '../assets/music-square-add.png'
import Heart from '../assets/Heart.png'
import Vertical from '../assets/more-vertical.png'
import AlbumComp from '../components/AlbumComp'
import { raggaeAlbum } from '../Reggae'
import { tommorrowAlbum } from '../TomAlbum'
import { goldenAlbum } from '../GoldenAlbum'

const Album = ({title, desc, length, img, selectedSong}) => {
    const playAll = () => {

    }
  return (
    <div className='ml-[3rem] md:ml-[7rem] grid gap-[3rem]'>

    <div className="pt-[7rem] flex gap-[2rem] items-center alb">
        <img src={Album1} alt="" className='rounded-3xl'/>
        <div className=' grid gap-[1rem]'>
            <h1 className='text-3xl text-[#A4C7C6]'>{title}</h1>
            <p className='text-[#EFEEE0]'>{desc}</p>
            <p className='text-[#EFEEE0]'>{length}</p>
            <div className='flex items-center'>
                <div className='flex gap-[1rem] text-[#EFEEE0] p-[1.5rem] rounded-full bg-transp items-center' onClick={playAll}>
                    <img src={Pause} alt="" width='16px' height='16px'/>
                    <p>Play all</p>
                </div>
                <div className='flex gap-[1rem] text-[#EFEEE0] p-[1.5rem] rounded-full bg-[transp] items-center'>
                    <img src={Collection} alt="" />
                    <p>Add to Collection</p>
                </div>
                <img src={Heart} alt="like" className='p-[1.5rem] rounded-full bg-[transp]'/>
            </div>
            
        </div>
    </div>
    <div className='grid gap-[1rem]'>
        {selectedSong.map(({id, title, nam, timestamp, img})=> {
      return <div className='flex items-center justify-between bg-bgg p-[.7rem] rounded-xl' key={id}>
      <div className='flex items-center gap-[1rem]'>
          <img src={img} alt="" width='39px' height='39px' className='rounded-xl'/>
          <img src={Heart} alt="" />
      </div>
      <p>{title}</p>
      <p>{nam}</p>
      <p>{timestamp}</p>
      <img src={Vertical} alt="vertical" />
  </div>
    })
        }
    </div>
    </div>
  )
}

export default Album