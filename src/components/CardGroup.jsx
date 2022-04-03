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

          display: "grid",
          gridTemplateColumns: "repeat(5, 125px)",
          gap: "10px",
          gridAutoRows: "minmax(125px,125px)",
          gridAutoColumns: "minmax(125px, 125px)",
          justifyContent: "center"
        }}>
        {storeAssets.map((x)=>
        {
          return(
            <Card key={x.id}>
              <CardActionArea
                onClick={()=>handleAddPoints(user.userId, x.id, 1)}
              >
                <CardMedia
                  component="img"
                  height="125"
                  width="125"
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