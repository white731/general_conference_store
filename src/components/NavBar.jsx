import { Button } from "@mui/material"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../providers/userProvider"


const navBarStyle = {
    display: "flex",
    flexDirection: "row"
}

const NavBar = ()=>{
    
    const {user, handleLogout} = useContext(UserContext)

    const navigate = useNavigate()

    const handleButtonClick = (path, action)=> {
        navigate(path)
        if(action === "logout"){
            handleLogout()
        }
    }

    const renderUserName = () => {
        return(
            <h3>Welcome {user.userName}!</h3>
        )
    }

    const renderGameButton = () => {
        return(
            <Button onClick = {()=>handleButtonClick("/play")}>
                Home
            </Button>
        )
    }

        return(
        <div style={navBarStyle}>
            {user ? renderGameButton() : ""}
            <Button onClick = {()=>handleButtonClick("/", user ? "logout" : "login")}>
                {user ? "Logout" : "Login"}
            </Button>
            {user ? renderUserName() : ""}
        </div>
        )

  
}

export default NavBar