import { Button, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { UserContext } from "../providers/userProvider"

export const Login = () => {

    const [userName, setUserName] = useState("")

    const user = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        user.getUser(userName)
    }

    return(
    <form onSubmit={(e)=>handleSubmit(e)}>
        <TextField
            variant = "standard"
            value = {userName}  
            onChange ={(e)=>setUserName(e.target.value)}  
        />
        <Button type="submit">
            Submit
        </Button>
    </form>
    )
}