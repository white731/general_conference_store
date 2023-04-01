import { GameScreen } from "./components/GameScreen";
import { Login } from "./components/Login";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import FetchUser from "./components/FetchUser";
import { Points } from "./components/Points";



function App() {
  return(
    <>
    <NavBar />
    <FetchUser>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/play' element={<GameScreen/>}/>
          <Route exact path="/buystuff" element={<Points/>}/>
        </Routes>
    </FetchUser>
  </>
  )
}

export default App;
