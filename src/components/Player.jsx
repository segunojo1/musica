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
import { goldenAlbum } from '../GoldenAlbum'
import { raggaeAlbum } from '../Reggae'
import { tommorrowAlbum } from '../TomAlbum'

const Player = ({refCon}) => {
    const {isPlaying, setIsPlaying} = useContext(Context)
    const {currentSong, setCurrentSong} = useContext(Context)
    const {selectedSong, setSelectedsong} = useContext(Context)
    
   
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
    
    //NEXT SONG
    const next = () => {
        if(selectedSong == goldenAlbum){
            const index = goldenAlbum.findIndex(x=> x.title == currentSong.title)
            console.log(index);
            if(index == 4) {
                setCurrentSong(goldenAlbum[0])
            }else{
                setCurrentSong(goldenAlbum[index+1])
                refCon.current.play()
            }
        }else if(selectedSong == raggaeAlbum){

            const index = raggaeAlbum.findIndex(x=> x.title == currentSong.title)
            console.log(index);
            if(index == 4) {
                setCurrentSong(raggaeAlbum[0])
            }else{
                setCurrentSong(raggaeAlbum[index+1])
            }
        }else if(selectedSong == tommorrowAlbum){
            const index = tommorrowAlbum.findIndex(x=> x.title == currentSong.title)
            console.log(index);
            if(index == 4) {
                setCurrentSong(tommorrowAlbum[0])
            }else{
                setCurrentSong(tommorrowAlbum[index+1])
            }
        }
        setIsPlaying(true)
        // playNext()
    }
    //PREVIOUS SONG
    const prev = () => {
        if(selectedSong == goldenAlbum) {

            const index = goldenAlbum.findIndex(x=> x.title == currentSong.title);
            if(index == 0) {
                setCurrentSong(goldenAlbum[tommorrowAlbum.length - 1])
            }else{
                setCurrentSong(goldenAlbum[index-1]);
            }
        }else if(selectedSong == raggaeAlbum) {
            const index = raggaeAlbum.findIndex(x=> x.title == currentSong.title);
            if(index == 0) {
                setCurrentSong(raggaeAlbum[tommorrowAlbum.length - 1])
            }else{
                setCurrentSong(raggaeAlbum[index-1]);
            }
        }else if(selectedSong == tommorrowAlbum){
            const index = tommorrowAlbum.findIndex(x=> x.title == currentSong.title);
            if(index == 0) {
                setCurrentSong(tommorrowAlbum[tommorrowAlbum.length - 1])
            }else{
                setCurrentSong(tommorrowAlbum[index-1]);
            }
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
                <audio src={currentSong.url} ref={refCon} preload="auto"></audio>
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