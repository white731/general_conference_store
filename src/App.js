import { GameScreen } from './components/GameScreen'
import { Login } from './components/Login'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import FetchUser from './components/FetchUser'
import { Points } from './components/Points'
import Stats from './components/stats'

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<GameScreen />} />
          <Route exact path="/buystuff" element={<Points />} />
          <Route exact path="/stats" element={<Stats />} />
        </Routes>
      </FetchUser>
    </>
  )
}

export default App
