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
    <div>
        <div className=''>
            <img src={Logo} alt="logo" className='mb-[4rem] pl-[1rem]'/>
            <div className='p-[1rem] bg-dark grid gap-[30px] w-fit mb-[2rem] rounded-full'>
                <img src={Home} alt="home" />
                <img src={Playlist} alt="playlist" />
                <img src={Radio} alt="radio" />
                <img src={Videos} alt="videos" />
            </div>
            <div className='p-[1rem] bg-dark grid gap-[30px] w-fit rounded-full'>
              <img src={Profile} alt="profile" />
              <img src={Logout} alt="logout" />
            </div>
        </div>
    </div>
  )
}

export default SideBar