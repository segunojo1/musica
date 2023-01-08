import React, { useContext, useRef } from 'react'
import Album1 from '../assets/Lead-image.png'
import Pause from '../assets/Play.png'
import Collection from '../assets/music-square-add.png'
import Heart from '../assets/Heart.png'
import Vertical from '../assets/more-vertical.png'
import { raggaeAlbum } from '../Reggae'
import { tommorrowAlbum } from '../TomAlbum'
import { goldenAlbum } from '../GoldenAlbum'
import { Context } from '../Context'

const Album = ({title, desc, length, img, refCon}) => {
    const audioref = useRef(null)
    const {currentSong, setCurrentSong} = useContext(Context);
    const {isPlaying, setIsPlaying} = useContext(Context);
    const {selectedSong, setSelectedsong} = useContext(Context);

    const playAll = () => {
        console.log(currentSong);
        setCurrentSong(selectedSong[0])
        setIsPlaying(true);
        console.log(isPlaying);
        if(isPlaying) {
            refCon.current.play();
        }else{
            refCon.current.pause()
        }
    }

    //PLAY SINGLE SONG
    const playSong = (e) => {
        setIsPlaying(true)
        refCon.current.pause();
        const id = e.currentTarget.id;
        setCurrentSong(selectedSong[id]);
        refCon.current.play()
        setIsPlaying(false)
    }
  return (
    <div className='md:ml-[7rem] grid gap-[3rem] md:mb-[20rem]'>

    <div className="pt-[7rem] flex flex-col md:flex-row gap-[2rem] items-center alb">
        <img src={Album1} alt="" className='rounded-3xl'/>
        <div className=' grid gap-[1rem]'>
            <h1 className='text-3xl text-[#A4C7C6]'>{title}</h1>
            <p className='text-[#EFEEE0]'>{desc}</p>
            <p className='text-[#EFEEE0]'>{length}</p>
            <div className='flex items-center flex-col gap-[1rem]'>
                <div className='flex gap-[1rem] text-[#EFEEE0] p-[1.5rem] rounded-full bg-transp items-center cursor-pointer' onClick={playAll}>
                    <img src={Pause} alt="" width='16px' height='16px'/>
                    <p>Play all</p>
                </div>
                <div className='flex gap-[1rem] text-[#EFEEE0] p-[1.5rem] rounded-full bg-transp items-center'>
                    <img src={Collection} alt="" />
                    <p>Add to Collection</p>
                </div>
                <img src={Heart} alt="like" className='p-[1.5rem] rounded-full bg-transp'/>
            </div>
            
        </div>
    </div>
    <div className='grid gap-[1rem]'>
        {selectedSong.map(({id, title, nam, timestamp, img})=> {
      return <div id={id} className='flex items-center gap-[1rem] md:gap-[2rem] justify-between bg-bgg p-[.7rem] rounded-xl cursor-pointer' key={id} onClick={playSong}>
      <div className='flex items-center gap-[1rem]'>
          <img src={img} alt="" width='39px' height='39px' className='rounded-xl'/>
          <img src={Heart} alt="" />
      </div>
      <p className='md:w-[300px] w-[100px]'>{title}</p>
      <p className='w-[300px] hidden lg:block'>{nam}</p>
      <p className='w-[100px] hidden lg:block'>{timestamp}</p>
      <img src={Vertical} alt="vertical" />
  </div>
    })
        }
    </div>
    </div>
  )
}

export default Album