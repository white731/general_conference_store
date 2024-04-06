import {
  Container,
  getListSubheaderUtilityClass,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useEffect, useContext } from "react";
import { UserContext } from "../providers/userProvider";

const Stats = () => {
  const { getUsers, users } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <Container>
      <h1>Stats</h1>
      {users.map((x) => {
        return (
          <Card sx={{ margin: 2 }}>
            <CardContent>
              <Typography>{x.fields.Name}</Typography>
              <Typography>Current Points: {x.fields.TotalPoints}</Typography>
              <Typography>
                Total Points Earned: {x.fields.Points.length}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};

export default Stats;
