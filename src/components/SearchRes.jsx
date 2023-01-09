import React, { useContext } from 'react'
import { Context } from '../Context'
import { data1 } from '../AlbumData';
import Vertical from '../assets/more-vertical.png'
import Heart from '../assets/Heart.png'

const SearchRes = () => {
    const {search, setSearch} = useContext(Context);
    let item;
  return (
    <div className='bg-bla h-[100vh]'>
        {data1.map(({id, img, title, nam, url})=> {
            if(search == title) { 
                item = {
                    title: title,
                    img: img,
                    nam: nam, url:url, id:id
                }
            }
            
        })}
        {item ? 
        
                <div className='text-center justify-center flex '>
                <div  className='flex items-center gap-[1rem] md:gap-[2rem] justify-between bg-bgg p-[.7rem] rounded-xl cursor-pointer' >
            <div className='flex items-center gap-[1rem]'>
          <img src={item.img} alt="" width='39px' height='39px' className='rounded-xl'/>
          <img src={Heart} alt="" />
      </div>
      <p className='md:w-[300px] w-[100px]'>{item.title}</p>
      <p className='w-[300px] hidden lg:block'>{item.nam}</p>
      <p className='w-[100px] hidden lg:block'>min</p>
      <img src={Vertical} alt="vertical" />
  </div>
                </div> : <div>No songs found</div>
    }
    </div>
  )
}

export default SearchRes