import React from 'react'
import { data1 } from '../AlbumData'

const NewReleases = () => {
    const items = data1.map(({img, title, nom})=> {
        return (
            <div className='gap-[1rem] shrink-0 ' key={nom}>
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