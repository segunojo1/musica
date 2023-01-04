import { useState } from 'react'
import Home from './pages/Home'
import Player from './components/Player'
import SideBar from './components/SideBar'
import { Context } from './Context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Album from './pages/Album'

function App() {
  const [size, setSize] = useState(window.innerWidth);
  const [show, setShow] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true);
  const [songAlb, setSongalb] = useState({title: '', desc: '', length: '', img: ''});

  const showAlbum = (e) => {
    const i = e.currentTarget.id;
    console.log(i);
    if(i == 1) {
      setSongalb({title: "Golden age of 80s", 
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi voluptate repellat, distinctio sunt maxime.",
      length:"64songs- 3hrs",
      img: e.currentTarget.children[0].children[0].children[0].src
    });
    
    }else if(i == 2) {
      setSongalb({title: "Reggae 'n' blues", 
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi voluptate repellat, distinctio sunt maxime.",
      length:"30songs- 1hr",
      img: e.currentTarget.children[0].children[0].children[0].src
    })
    }else{
      setSongalb({title: "Tomorrow's Tunes", 
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi voluptate repellat, distinctio sunt maxime.",
      length:"30songs- 1hr",
      img: e.currentTarget.children[0].children[0].children[0].src
    })
    }
  }
  return (
    <Context.Provider value={{size, setSize, show, setShow, isPlaying, setIsPlaying}}>
      <BrowserRouter>
        <div className="App bg-bla text-white ">
          <div className='fle nn p-[1rem] md:p-[2rem] md:pr-[5rem]'>
            
          <SideBar/>
          <Routes>
            <Route path='/' element={<Home showAlbum={showAlbum}/>} />
            <Route path='/album' element={<Album title={songAlb.title} desc={songAlb.desc} length={songAlb.length} img= {songAlb.img}/>}/>
          </Routes>
          </div>
            <Player />
        </div>
      </BrowserRouter>

    </Context.Provider>
  )
}

export default App
