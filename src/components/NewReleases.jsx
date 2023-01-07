import React from 'react'
import { data1 } from '../AlbumData'
import { useContext } from 'react'
import { Context } from '../Context'

const NewReleases = ({refCon}) => {
    const {currentSong, setCurrentSong} = useContext(Context);
    const {isPlaying, setIsPlaying} = useContext(Context);
    const {selectedSong, setSelectedsong} = useContext(Context)

    const playSong = (e) => {
        const id = e.currentTarget.id;
        setSelectedsong(null);
        refCon.current.pause()
        setCurrentSong(data1[id])
        refCon.current.play()
        setIsPlaying(false);
        // if(isPlaying) {
        //     refCon.current.play();
        // }
    }

    const items = data1.map(({id, img, title, nom})=> {
        return (
            <div id={id} className='gap-[1rem] shrink-0 ' key={nom} onClick={playSong}>
                <img src={img} alt="" className='mb-[.5rem] rounded-3xl'/>
                <p>{title}</p>
                <p className='text-sm text-text-col'>{nom}</p>
            </div>
        )
    })
  return (
    <div className='mb-[2rem]'>
        <h1 className='text-3xl mb-[1.5rem]'>New releases.</h1>
        <div className='flex gap-[3rem] overflow-scroll thr'>
            {items}
        </div>
    </div>
  )
}

export default NewReleases