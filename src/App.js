import { Container, Switch } from "@mui/material";
import { GameScreen } from "./components/GameScreen";
import { Login } from "./components/Login";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import FetchUser from "./components/FetchUser";



function App() {
  return(
    <>
    <NavBar />
    <FetchUser>
      <Container fixed>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/play' element={<GameScreen/>}/>
        </Routes>
      </Container>
    </FetchUser>
  </>
  )
}

export default App;
