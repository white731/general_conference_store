import { Card, CardActionArea, CardHeader, Container, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../providers/userProvider";
import { useNavigate } from "react-router";

const store =[
    {
        name: "60 Points",
        value: -50
    },
    {
        name: "50 Points",
        value: -50
    },
    {
        name: "35 Points",
        value: -35
    },
    {
        name: "25 Points",
        value: -25
    },
    {
        name: "20 Points",
        value: -20
    },
    {
        name: "15 Points",
        value: -15
    },
    {
        name: "10 Points",
        value: -10
    },
    {
        name: "5 Points",
        value: -5
    },
    {
        name: "3 Points",
        value: -3
    },
]


export const Points = () => {

    const {user, addAPoint, setUser} = useContext(UserContext)
    const navigate = useNavigate();

    const handleSubtractPoints =(points)=>{
        if(user.points + points < 0){
            alert("You don't have enough money for that!")
        } else {
            addAPoint(user.userId, "recK99MJEUl8aPunJ", points)
            setUser({...user, points: user.points + points})
        }
          
    }

    return(
        <Container style={{display: "flex", flexDirection: "column"}}>
            
            <div style={{marginTop:"10px", marginBottom: "10px", textAlign: "center"}}>
                <Typography variant="h4">Buy Stuff</Typography>
            </div>

            <div style={{display:"flex", flexDirection: "row", flexFlow: "wrap", justifyContent: "center"}}>
            {store.map((x)=>{
                return(
                    <Card key={x.name} style={{margin: 2}}>
                        <CardActionArea onClick={()=>handleSubtractPoints(x.value)}>
                            <CardHeader title={x.name}/>
                        </CardActionArea>
                    </Card>
                )
            })}
            </div>
            <Button variant="contained" onClick={()=>{navigate("/play") }}>Get More Points</Button>

        </Container>
    )
}