import React, { useContext, useEffect, useRef, useState } from 'react'
import Music7 from '../assets/music8.png'
import Shuffle from '../assets/shuffle.png'
import Previous from '../assets/previous.png'
import Pause from '../assets/pause.png'
import Next from '../assets/next.png'
import Repeat from '../assets/repeate-one.png'
import Volume from '../assets/volume-high.png'
import Audio from '../assets/songs/song1.mp3'
import {BsPauseCircleFill} from 'react-icons/bs'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import { songsData } from '../songData'
import { Context } from '../Context'

const Player = () => {
    const {isPlaying, setIsPlaying} = useContext(Context)
    const [currentSong, setCurrentSong] = useState(songsData[0])
    
    const refCon = useRef(null)
    useEffect(()=> {
        console.log(refCon);
        
    },[]);
    //PLAY AND PAUSE
    // setIsPlaying((prev) => !prev);
    const playa = () => {

        setIsPlaying((prev) => !prev);
        console.log(isPlaying);
        if(isPlaying) {
            refCon.current.play();
        }else{
            refCon.current.pause()
        }
    }
    const playNext = () => {
        refCon.current.play();  
    }
    
    //NEXT SONG
    const next = () => {
        const index = songsData.findIndex(x=> x.title == currentSong.title)
        if(index == 3) {
            setCurrentSong(songsData[0])
        }else{
            setCurrentSong(songsData[index+1])
        }
        setIsPlaying(true)
        // playNext()
    }
    //PREVIOUS SONG
    const prev = () => {
        const index = songsData.findIndex(x=> x.title == currentSong.title);
        if(index == 0) {
            setCurrentSong(songsData[songsData.length - 1])
        }else{
            setCurrentSong(songsData[index-1]);
        }
        setIsPlaying(true)
    }
  return (
    <div className='fixed bottom-0 backdrop-blur-xl bg-transp w-full'>
        <div className='lg:pr-[5rem] lg:pl-[8rem] lg:pb-[.7rem] justify-between flex'>
        <div className='flex items-center gap-[10px]'>
            <img src={Music7} alt="" height='49px' width='49px' className='rounded-2xl'/>
            <div>
                <p>{currentSong.title}</p>
                <p className='text-sm text-text-col'>James</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center gap-[1.5rem] mb-[.5rem]'>
                <img src={Shuffle} alt="shuffle"  className='cursor-pointer'/>
                <img src={Previous} alt="Previous"  className='cursor-pointer' onClick={prev}/>
                {!isPlaying ? <BsPauseCircleFill onClick={playa}/> : <BsFillPlayCircleFill onClick={playa}/>} 
                <audio src={currentSong.src} ref={refCon}></audio>
                <img src={Next} alt="next"  className='cursor-pointer' onClick={next}/>
                <img src={Repeat} alt="repeat"  className='cursor-pointer'/>
            </div>
            <div className='w-[100px] h-[3px] bg-white/30'></div>
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