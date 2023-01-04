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
  const [songAlb, setSongalb] = useState({title: '', desc: '', length: ''});

  const showAlbum = (e) => {
    const i = e.currentTarget.id;
    console.log(i);
    if(i == 1) {
      setSongalb({title: ''})
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
            <Route path='/album' element={<Album title desc length/>}/>
          </Routes>
          </div>
            <Player />
        </div>
      </BrowserRouter>

    </Context.Provider>
  )
}

export default App
