import React from 'react'
import { data1 } from '../AlbumData'
import { useContext } from 'react';
import { Context } from '../Context';
import Album from '../pages/Album';

const Popular = ({refCon}) => {
    const {currentSong, setCurrentSong} = useContext(Context);
    const {isPlaying, setIsPlaying} = useContext(Context);
    const {selectedSong, setSelectedsong} = useContext(Context)

    const playSong = (e) => {
        const id = e.currentTarget.id;
        console.log(id);
        setSelectedsong(null);
        refCon.current.pause()
        setCurrentSong(data1[id])
        setIsPlaying(prev=> !prev);
        if(isPlaying) {
            refCon.current.play();
        }
    }
    const items = data1.map(({id, img, title, nam})=> {
        return (
            <div id={id} className='gap-[1rem] shrink-0 cursor-pointer' key={nam} onClick={playSong}>
                <img src={img} alt="" className='mb-[.5rem] rounded-3xl'/>
                <p>{title}</p>
                <p className='text-sm text-text-col'>{nam}</p>
            </div>
        )
    })
  return (
    <div>
        <h1 className='text-3xl mb-[1.5rem]'>Popular In your area</h1>
        <div className='flex  gap-[3rem] overflow-scroll thr'>
            {items}
        </div>
    </div>
  )
}

export default Popular