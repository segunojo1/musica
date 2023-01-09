import React, { useContext, useEffect, useRef, useState } from 'react'
import Shuffle from '../assets/shuffle.png'
import Previous from '../assets/previous.png'
import Pause from '../assets/pause.png'
import Next from '../assets/next.png'
import Repeat from '../assets/repeate-one.png'
import Volume from '../assets/volume-high.png'
import {BsPauseCircleFill} from 'react-icons/bs'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import { data1 } from '../AlbumData'
import { Context } from '../Context'
import { goldenAlbum } from '../GoldenAlbum'
import { raggaeAlbum } from '../Reggae'
import { tommorrowAlbum } from '../TomAlbum'
import {SlArrowDown} from 'react-icons/sl'

const Player = ({refCon}) => {
    const {isPlaying, setIsPlaying} = useContext(Context)
    const {currentSong, setCurrentSong} = useContext(Context)
    const {selectedSong, setSelectedsong} = useContext(Context)
    const [showMoremobile, setShowmoremobile] = useState(false)
    const {size, setSize} = useContext(Context);
    
   
    useEffect(()=> {
        console.log(refCon);
        setCurrentSong({...currentSong, progress: 0, volume: 1})
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
        }else{
            const index = data1.findIndex(x=> x.title == currentSong.title)
            console.log(index);data1
            if(index == 6) {
                setCurrentSong(data1[0])
            }else{
                setCurrentSong(data1[index+1])
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
        }else{
            const index = data1.findIndex(x=> x.title == currentSong.title);
            if(index == 0) {
                setCurrentSong(data1[data1.length - 1])
            }else{
                setCurrentSong(data1[index-1]);
                
            }
        }
        setIsPlaying(true)
    }

    //SHOW PROGRESS BAR
    const changeProgress = () => {
        const duration = refCon.current.duration;
        const currentTime = refCon.current.currentTime

        setCurrentSong({...currentSong, progress: (currentTime/duration) * 100, length: duration})
        if(currentTime == duration) {
            next();
        }
    }

    //CHANGE PROGRESS OF SONG ON CLICK(forward the song)
    const clickRef = useRef(null)
    const checkWidth = (e) => {
        const width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const progress = offset / width;
        refCon.current.currentTime = progress * currentSong.length;
        
    }

    const volRef = useRef(null)
    const changeVol = (e) => {
        const width = volRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        setCurrentSong({...currentSong, volume:  offset / width})
        refCon.current.volume = currentSong.volume
    }

    const playRef = useRef(null)
    const showFull = (e) => {
        const clas = e.currentTarget.className;
        console.log(clas);
        if(size < 762) {

            setShowmoremobile(true)
        }
    }
    const closem = () => {
        setShowmoremobile(prev=> !prev)
        console.log('ff');
    }
  return (
    <div>
        
    { showMoremobile ? 
        <div className= 'fixed bottom-0 backdrop-blur-xl bg-transp w-full md:h-fit h-full' ref={playRef} >
        
        <div className='lg:pr-[5rem] lg:pl-[8rem] lg:pb-[.7rem] justify-between items-center flex flex-col p-[1rem] h-full'>
        <SlArrowDown className='align-left cursor-pointer' onClick={closem}/>
        <div className='flex flex-col items-left gap-[10rem] ' >
            <div className="cont w-[300px] h-[300px] bg-bla"></div>
            <div>
                <p>{currentSong.title}</p>
                <p className='text-sm text-text-col'>{currentSong.nam}</p>
            </div>
        </div>
        <div className='flex gap-[1rem] mb-[3rem]'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center gap-[1.5rem] mb-[.5rem]'>
                <img src={Shuffle} alt="shuffle"  className='cursor-pointer'/>
                <img src={Previous} alt="Previous"  className='cursor-pointer' onClick={prev}/>
                {!isPlaying ? <BsPauseCircleFill onClick={playa} className="cursor-pointer w-[40px] h-[40px]"/> : <BsFillPlayCircleFill onClick={playa} className="cursor-pointer w-[40px] h-[40px]"/>} 
                <audio src={currentSong.url} ref={refCon} preload="auto" onTimeUpdate={changeProgress}></audio>
                <img src={Next} alt="next"  className='cursor-pointer' onClick={next}/>
                <img src={Repeat} alt="repeat"  className='cursor-pointer' />
            </div>
            <div className='w-[100%] '>
                <div className="navigation w-[300px] h-[3px] bg-white/30 relative cursor-pointer" onClick={checkWidth} ref = {clickRef}>
                    <div className="circ w-[10px] h-[10px] bg-[#FACD66] rounded-full absolute mt-[-3px]" style={{marginLeft: `${currentSong.progress}%`}}></div>
                    <div className="seekbar bg-[#FACD66] h-[3px]" style={{width: `${currentSong.progress}%`}}></div>
                </div>
            </div>
        </div>
        <div className='flex-col flex items-center gap-[10px]'>
            <div className='w-[3px] h-[100px] bg-white/30 flex items-end' onClick={changeVol} ref={volRef}>
                <div className="seekbar bg-[#FACD66] w-[3px] " style={{height: `${currentSong.volume * 100}%`}}></div>
            </div>
            <img src={Volume} alt="volume" className='cursor-pointer'/>
        </div>
        </div>
        </div>
    </div> : 
    <div className= 'fixed bottom-0 backdrop-blur-xl bg-transp w-full ' ref={playRef} >
        
    <div className='lg:pr-[5rem] lg:pl-[8rem] lg:pb-[.7rem] justify-between flex p-[1rem] h-full'>
    <div className='flex items-center gap-[10px] w-[250px]' onClick={showFull}>
        <img src={currentSong.img} alt="" height='49px' width='49px' className='rounded-2xl'/>
        <div>
            <p>{currentSong.title}</p>
            <p className='text-sm text-text-col'>{currentSong.nam}</p>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center gap-[1.5rem] mb-[.5rem]'>
            <img src={Shuffle} alt="shuffle"  className='cursor-pointer hidden md:block'/>
            <img src={Previous} alt="Previous"  className='cursor-pointer hidden md:block' onClick={prev}/>
            {!isPlaying ? <BsPauseCircleFill onClick={playa} className="cursor-pointer w-[40px] h-[40px]"/> : <BsFillPlayCircleFill onClick={playa} className="cursor-pointer w-[40px] h-[40px]"/>} 
            <audio src={currentSong.url} ref={refCon} preload="auto" onTimeUpdate={changeProgress}></audio>
            <img src={Next} alt="next"  className='cursor-pointer hidden md:block' onClick={next}/>
            <img src={Repeat} alt="repeat"  className='cursor-pointer hidden md:block' />
        </div>
        <div className='w-[100%] hidden md:block'>
            <div className="navigation w-[500px] h-[3px] bg-white/30 relative cursor-pointer" onClick={checkWidth} ref = {clickRef}>
                <div className="circ w-[10px] h-[10px] bg-[#FACD66] rounded-full absolute mt-[-3px]" style={{marginLeft: `${currentSong.progress}%`}}></div>
                <div className="seekbar bg-[#FACD66] h-[3px]" style={{width: `${currentSong.progress}%`}}></div>
            </div>
        </div>
    </div>
    <div className='md:flex items-center gap-[10px] hidden'>
        <img src={Volume} alt="volume" className='cursor-pointer'/>
        <div className='w-[100px] h-[3px] bg-white/30' onClick={changeVol} ref={volRef}>
            <div className="seekbar bg-[#FACD66] h-[3px] " style={{width: `${currentSong.volume * 100}%`}}></div>
        </div>
    </div>
    </div>
</div>}
    </div>
  )
}

export default Player