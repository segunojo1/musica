import { useState } from 'react'
import Home from './pages/Home'
import Player from './components/Player'
import SideBar from './components/SideBar'
import { Context } from './Context'

function App() {
  const [size, setSize] = useState(window.innerWidth);
  const [show, setShow] = useState(false)
  return (
    <Context.Provider value={{size, setSize, show, setShow}}>
      <div className="App bg-bla text-white ">
        <div className='fle nn p-[1rem] md:p-[2rem] md:pr-[5rem]'>
        <SideBar/>
          <Home />
        </div>
          <Player />
      </div>

    </Context.Provider>
  )
}

export default App
