import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Heart from '../assets/Heart.png'

const ChartsComp = ({img, title, name, timestamp, id, showAlbum}) => {

  const albumRef = useRef(null);
  console.log(albumRef);

 
  return (
    <div id={id} className='bg-dark p-[1rem] flex items-center justify-between rounded-lg md:w-[29rem] w-[80%] shrink-0' ref={albumRef} onClick={showAlbum}>
        <Link to='/album' >
          <div className='flex flex-col md:flex-row gap-[2rem]'   >
              <img src={img} alt="" />
              <div>
                  <p className='text-lg' >{title}</p>
                  <p className='text-sm text-text-col' >{name}</p>
                  <p>{timestamp}</p>
              </div>
          </div>
          </Link>
          <img src={Heart} alt="like it!" className='p-[1rem] border rounded-full' />
      </div>
  )
}

export default ChartsComp