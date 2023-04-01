import { Card, CardActionArea, CardMedia } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../providers/userProvider";

export const CardGroup = ({getRecords, storeAssets, setStoreAssets}) => {

  
    
  
    const {addAPoint, user, setUser} = useContext(UserContext)
  
    useEffect(()=>{
      getRecords()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    

    const handleAddPoints = (userId, assetId, points) => {
      addAPoint(userId, assetId, points)
      setUser({...user, points: user.points + points})
    }
  
    return (
      <div style={{ 

          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
          justifyContent: "center"
        }}>
        {storeAssets.map((x)=>
        {
          return(
            <Card sx={{margin: 1, width:"25%"}} key={x.id}>
              <CardActionArea
                onClick={()=>handleAddPoints(user.userId, x.id, 1)}
              >
                <CardMedia
                  sx={{objectFit:"scale-down"}}
                  component="img"
                  image={x.fields.Attachments[0].url}
                  alt={x.fields.name}
                />
              </CardActionArea>
            </Card>
          )
        })}
      </div>
    );
} 