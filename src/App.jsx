import { useRef, useState } from 'react'
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

  const refCon = useRef(null)

  const next = (alb) => {
    const index = alb.findIndex(x=> x.title == currentSong.title)
    if(index == 3) {
        setCurrentSong(alb[0])
    }else{
        setCurrentSong(alb[index+1])
    }
    setIsPlaying(true)
    // playNext()
}
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
    setCurrentSong(goldenAlbum[0])
    // mapAlb(goldenAlbum)
    }else if(i == 2) {
      setSongalb({title: "Reggae 'n' blues", 
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi voluptate repellat, distinctio sunt maxime.",
      length:"30songs- 1hr",
      img: e.currentTarget.children[0].children[0].children[0].src
    })
    setSelectedsong(raggaeAlbum)
    setCurrentSong(raggaeAlbum[0])
    }else{
      setSongalb({title: "Tomorrow's Tunes", 
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi voluptate repellat, distinctio sunt maxime.",
      length:"30songs- 1hr",
      img: e.currentTarget.children[0].children[0].children[0].src
    })
    setSelectedsong(tommorrowAlbum)
    setCurrentSong(tommorrowAlbum[0]);
    }
  }
  return (
    <Context.Provider value={{size, setSize, show, setShow, isPlaying, setIsPlaying, currentSong, setCurrentSong, selectedSong, setSelectedsong}}>
      <BrowserRouter>
        <div className="App bg-bla text-white ">
          <div className='fle nn p-[1rem] md:p-[2rem] md:pr-[5rem]'>
            
          <SideBar/>
          <Routes>
            <Route path='/home' element={<Home showAlbum={showAlbum} refCon={refCon}/>} />
            <Route path='/home/album' element={<Album title={songAlb.title} desc={songAlb.desc} length={songAlb.length} img= {songAlb.img} selectedSong={selectedSong} refCon={refCon}/>}/>
          </Routes>
          </div>
            <Player refCon={refCon}/>
        </div>
      </BrowserRouter>

    </Context.Provider>
  )
}

export default App
