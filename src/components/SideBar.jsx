import React, { useContext } from 'react'
import Logo from '../assets/logo.svg'
import Home from '../assets/home1.png'
import Playlist from "../assets/playlist.svg"
import Radio from "../assets/radio.svg"
import Videos from "../assets/videos.svg"
import Profile from "../assets/profile.svg"
import Logout from "../assets/Logout1.png"
import {RxHamburgerMenu} from 'react-icons/rx'
import { Context } from '../Context'


const SideBar = () => {
  const {size, setSize, show, setShow} = useContext(Context);

  const clickFunc = () => {
    console.log(show);
    setShow(prev => !prev)
    
  }
  return (
    <div className='fixed'>
        <div className=''>
          <div className='flex'>
            <RxHamburgerMenu className={size<= 1024 ? 'block' : 'hidden'} onClick={clickFunc}/>
            <img src={Logo} alt="logo" className='mb-[4rem] pl-[1rem]'/>
          </div>
          <div className='bg-bla tran'>

            <div className={`p-[.5rem]  bg-dark grid gap-[30px] w-fit rounded-full lg:block  ${show ? 'block' : 'hidden'}`}>
              <div className='flex gap-[1.5rem] p-[1rem]'>
                <img src={Home} alt="home" />
                <p  className='lg:hidden'>Home</p>
              </div>
              <div className='flex gap-[1.5rem] p-[1rem]'>
                <img src={Playlist} alt="playlist" />
                <p  className='lg:hidden'>My collections</p>
              </div>
              <div className='flex gap-[1.5rem] p-[1rem]'>
                <img src={Radio} alt="radio" />
                <p  className='lg:hidden'>Radio</p>
              </div>
              <div className='flex gap-[1.5rem] p-[1rem]'>
                <img src={Videos} alt="videos" />
                <p  className='lg:hidden'>Videos</p>
              </div>
            </div>
            <div className={`p-[.5rem] bg-dark grid gap-[30px] w-fit rounded-full lg:block  ${show ? 'block' : 'hidden'}`}>
              <div className="flex gap-[1.5rem] p-[1rem]">
                <img src={Profile} alt="profile" />
                <p className='lg:hidden'>Profile</p>
              </div>
              <div className="flex gap-[1.5rem] p-[1rem]">
                <img src={Logout} alt="logout" />
                <p className='lg:hidden'>Logout</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SideBar