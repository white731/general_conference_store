import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../providers/userProvider";

export const CardGroup = ({ getRecords, storeAssets, setStoreAssets }) => {
  const { addAPoint, user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddPoints = (userId, assetId, points) => {
    addAPoint(userId, assetId, points);
    setUser({ ...user, points: user.points + points });
  };

  if (storeAssets.length === 0) {
    return (
      <Backdrop open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Container
      fixed
      style={{
        display: "flex",
        flexDirection: "row",
        flexFlow: "wrap",
        justifyContent: "center",
      }}
    >
      {storeAssets.map((x) => {
        return (
          <Card
            sx={{
              margin: "2px",
              width: { xs: "23%", sm: "17%" },
              borderRadius: 0,
            }}
            key={x.id}
          >
            <CardActionArea
              onClick={() => handleAddPoints(user.userId, x.id, 1)}
            >
              <CardMedia
                sx={{ objectFit: "scale-down" }}
                component="img"
                image={x.fields.Attachments[0].url}
                alt={x.fields.name}
              />
            </CardActionArea>
          </Card>
        );
      })}
    </Container>
  );
};
