import axios from "axios";
import { useState } from "react";
import { CardGroup } from "./CardGroup";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const gameBoardStyle = {
  display: "flex",
  flexDirection: "Column",
};

export const GameScreen = () => {
  const [storeAssets, setStoreAssets] = useState([]);
  const navigate = useNavigate();

  const getRecords = async () => {
    let app_key =
      "pat5lPwuYvtAqOvlM.b863d9705446e58947a355c72e7166014adef0875bfa23226a740e353b032a85";
    let app_id = "apppyyL3422VTkvRC";
    let view = "Assets";
    let url = "https://api.airtable.com/v0/" + app_id + "/" + view;
    let axiosConfig = {
      headers: {
        Authorization: "Bearer " + app_key,
        "Content-Type": "application/json",
      },
    };

    try {
      let res = await axios.get(url, axiosConfig);
      let data = res.data.records;
      let top25 = data.slice(0, 25);
      setStoreAssets(top25);
      console.log(top25);
    } catch (error) {}
  };

  //   if (loading) {
  //     return <Typography>Loading...</Typography>;
  //   }

  return (
    <div style={gameBoardStyle}>
      <CardGroup
        getRecords={getRecords}
        storeAssets={storeAssets}
        setStoreAssets={setStoreAssets}
      />
      <Button
        variant="contained"
        onClick={() => {
          navigate("/buystuff");
        }}
      >
        Buy Stuff
      </Button>
    </div>
  );
};
