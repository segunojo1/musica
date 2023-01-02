import React from 'react'
import Logo from '../assets/logo.svg'
import Home from '../assets/home1.png'
import Playlist from "../assets/playlist.svg"
import Radio from "../assets/radio.svg"
import Videos from "../assets/videos.svg"
import Profile from "../assets/profile.svg"
import Logout from "../assets/Logout1.png"

const SideBar = () => {
  return (
    <div className='fixed '>
        <div className=''>
            <img src={Logo} alt="logo" className='mb-[4rem] pl-[1rem]'/>
            <div className='p-[.5rem] md:p-[1rem] bg-dark grid gap-[30px] w-fit mb-[2rem] rounded-full hidden'>
              <div className='flex gap-[1.5rem] p-[1rem]'>
                <img src={Home} alt="home" />
                <p>Home</p>
              </div>
              <div className='flex gap-[1.5rem] p-[1rem]'>
                <img src={Playlist} alt="playlist" />
                <p>My collections</p>
              </div>
              <div className='flex gap-[1.5rem] p-[1rem]'>
                <img src={Radio} alt="radio" />
                <p>Radio</p>
              </div>
              <div className='flex gap-[1.5rem] p-[1rem]'>
                <img src={Videos} alt="videos" />
                <p>Videos</p>
              </div>
            </div>
            <div className='p-[.5rem] md:p-[1rem] bg-dark grid gap-[30px] w-fit rounded-full hidden'>
              <div className="flex gap-[1.5rem] p-[1rem]">
                <img src={Profile} alt="profile" />
                <p>Profile</p>
              </div>
              <div className="flex gap-[1.5rem] p-[1rem]">
                <img src={Logout} alt="logout" />
                <p>Logout</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar