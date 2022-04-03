import { Card, CardActionArea, CardHeader, CardMedia, Container } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../providers/userProvider";

const store =[
    {
        name: "75 Points",
        value: -75
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

    const handleSubtractPoints =(points)=>{
        if(user.points + points < 0){
            alert("You don't have enough money for that!")
        } else {
            addAPoint(user.userId, "recK99MJEUl8aPunJ", points)
            setUser({...user, points: user.points + points})
        }
          
    }

    return(
        <Container>
            <Card>
                <CardHeader 
                title={`You have ${user.points} points`}
                />
                
            </Card>
            
            <Card style={{marginTop:"10px"}}>
                <CardHeader title="Buy Stuff!"/>
            </Card>

            {store.map((x)=>{
                return(
                    <Card key={x.name}>
                        <CardActionArea onClick={()=>handleSubtractPoints(x.value)}>
                            <CardHeader title={x.name}/>
                        </CardActionArea>
                    </Card>
                )
            })}
            
        </Container>
    )
}