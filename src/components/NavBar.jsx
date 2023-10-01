import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/userProvider";

const NavBar = () => {
  const { user, handleLogout } = useContext(UserContext);

  const navigate = useNavigate();
  console.log(user);
  const handleButtonClick = (path, action) => {
    navigate(path);
    if (action === "logout") {
      handleLogout();
    }
  };

  const renderUserName = () => {
    return <h3 style={{ textAlign: "center" }}>Welcome {user.userName}!</h3>;
  };

  const renderGameButton = () => {
    return (
      <Button
        sx={{ margin: 2 }}
        variant="contained"
        size="small"
        onClick={() => handleButtonClick("/")}
      >
        Home
      </Button>
    );
  };

  const loggedInToolbar = () => {
    console.log(user);
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {user ? renderGameButton() : ""}
        {user ? renderUserName() : ""}
        <Button
          sx={{ margin: 2 }}
          variant="contained"
          size="small"
          onClick={() =>
            handleButtonClick("/login", user.userId ? "logout" : "login")
          }
        >
          {user.userId ? "Logout" : "Login"}
        </Button>
      </div>
    );
  };

  const loggedInMessage = () => {
    return (
      <Typography sx={{ margin: "4px" }}>
        {`You have ${user.points} points`}
      </Typography>
    );
  };

  const loggedOutMessage = () => {
    return (
      <>
        <Typography sx={{ margin: "4px" }}>
          Please login to start playing
        </Typography>
        <Button
          sx={{ margin: 2 }}
          variant="contained"
          size="small"
          onClick={() => handleButtonClick("/login", "login")}
        >
          {"Login"}
        </Button>
      </>
    );
  };

  return (
    <AppBar position="sticky" color="warning" sx={{ top: 0, bottom: "auto" }}>
      <Toolbar
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {user.userId ? loggedInMessage() : loggedOutMessage()}
        {user.userId ? loggedInToolbar() : ""}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
