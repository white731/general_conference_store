import { Button, TextField, Container } from "@mui/material"
import { useContext, useState } from "react"
import { UserContext } from "../providers/userProvider"
import { useNavigate } from "react-router"

export const Login = () => {

    const [userName, setUserName] = useState("")

    const user = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            console.log(userName)
            user.getUser(userName)
            navigate("/play")
        } catch (error) {
            
        }
        
    }

    return(
    <Container sx={{display:"flex", justifyContent: "center"}}>
    <form style={{display:"flex", flexDirection: "column", marginTop: "182px"}} onSubmit={(e)=>handleSubmit(e)}>
        <TextField
            variant = "outlined"
            value = {userName}
            placeholder="Enter Username"
            onChange ={(e)=>setUserName(e.target.value)}  
        />
        <Button sx={{marginTop: "10px"}}variant="contained" type="submit">
            Submit
        </Button>
    </form>
    </Container>
    )
}