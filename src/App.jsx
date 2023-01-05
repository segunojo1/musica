import { useState } from 'react'
import Home from './pages/Home'
import Player from './components/Player'
import SideBar from './components/SideBar'
import { Context } from './Context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Album from './pages/Album'
import { songsData } from './songData'
import Heart from './assets/Heart.png'
import Vertical from './assets/more-vertical.png'
import { goldenAlbum } from './GoldenAlbum'
import { raggaeAlbum } from './Reggae'
import { tommorrowAlbum } from './TomAlbum'

function App() {
  const [size, setSize] = useState(window.innerWidth);
  const [show, setShow] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState(songsData[0])
  const [songAlb, setSongalb] = useState({title: '', desc: '', length: '', img: ''});
  const [selectedSong, setSelectedsong] = useState([])

  //render album based on the one clicked
  // const mapAlb = (arr) => {
  //   arr.map(({id,title,nam,timestamp,img})=> {
  //     return <div className='flex items-center justify-between bg-bgg p-[.7rem] rounded-xl'>
  //     <div className='flex items-center gap-[1rem]'>
  //         <img src={img} alt="" width='39px' height='39px' className='rounded-xl'/>
  //         <img src={Heart} alt="" />
  //     </div>
  //     <p>{title}</p>
  //     <p>{nam}</p>
  //     <p>{timestamp}</p>
  //     <img src={Vertical} alt="" />
  // </div>
  //   })
  // }

  const showAlbum = (e) => {
    const i = e.currentTarget.id;
    console.log(i);
    if(i == 1) {
      setSongalb({title: "Golden age of 80s", 
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi voluptate repellat, distinctio sunt maxime.",
      length:"64songs- 3hrs",
      img: e.currentTarget.children[0].children[0].children[0].src
    });
    setSelectedsong(goldenAlbum)
    // mapAlb(goldenAlbum)
    }else if(i == 2) {
      setSongalb({title: "Reggae 'n' blues", 
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi voluptate repellat, distinctio sunt maxime.",
      length:"30songs- 1hr",
      img: e.currentTarget.children[0].children[0].children[0].src
    })
    setSelectedsong(raggaeAlbum)
    }else{
      setSongalb({title: "Tomorrow's Tunes", 
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi voluptate repellat, distinctio sunt maxime.",
      length:"30songs- 1hr",
      img: e.currentTarget.children[0].children[0].children[0].src
    })
    setSelectedsong(tommorrowAlbum)
    }
  }
  return (
    <Context.Provider value={{size, setSize, show, setShow, isPlaying, setIsPlaying, currentSong, setCurrentSong}}>
      <BrowserRouter>
        <div className="App bg-bla text-white ">
          <div className='fle nn p-[1rem] md:p-[2rem] md:pr-[5rem]'>
            
          <SideBar/>
          <Routes>
            <Route path='/' element={<Home showAlbum={showAlbum}/>} />
            <Route path='/home/album' element={<Album title={songAlb.title} desc={songAlb.desc} length={songAlb.length} img= {songAlb.img} selectedSong={selectedSong}/>}/>
          </Routes>
          </div>
            <Player />
        </div>
      </BrowserRouter>

    </Context.Provider>
  )
}

export default App
