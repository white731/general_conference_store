import {
  Button,
  TextField,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/userProvider";
import { useNavigate } from "react-router";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState("");

  const { users, user, getUsers, getUser, addUser, setUsers } =
    useContext(UserContext);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (e) => {
    let name = e.target.value;
    setUserName(name);
    console.log(name);
    getUser(name);
    navigate("/");
  };

  const handleCreateNewUser = (e) => {
    console.log(newUser);
    e.preventDefault();
    addUser(newUser);
    handleClose();
    setUsers([
      ...users,
      {
        id: null,
        createdTime: null,
        fields: {
          Name: newUser,
        },
      },
    ]);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 12, marginTop: "50px" }}>
        <InputLabel id="demo-simple-select-helper-label">User Name</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={userName}
          label="User Name"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {users.map((x) => {
            return <MenuItem value={x.fields.Name}>{x.fields.Name}</MenuItem>;
          })}
        </Select>
        <FormHelperText>Select a user to login</FormHelperText>
      </FormControl>
      <Button onClick={handleOpen}> Add User </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: "10px" }}
          >
            Add User
          </Typography>
          <form onSubmit={handleCreateNewUser}>
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
};
