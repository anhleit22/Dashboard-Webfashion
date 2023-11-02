import { useState } from "react";
import { Modal, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Customer } from "../../typeGlobal";
import { getDatabase, ref, set } from "firebase/database";

const userNormal: Customer = {
  firstName: "",
  lastName: "",
  userName: "",
  password: "",
  email: "",
};

let nextId = 1;
export const ModalAddUer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [User, setUser] = useState<Customer>(userNormal);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [configPassword, setConfigPassword] = useState<string>("");
  const [validEmail, setValidEmail] = useState<boolean>(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const createObject = (User: Customer) => {
    const UserNew = { ...User };
    const newObj = {
      id: nextId,
      ...UserNew,
    };
    nextId += 1;
    return newObj;
  };
  const handleSubmit = () => {
    if (User.password === configPassword) {
      setPasswordsMatch(true);
      setUser({
        ...User,
        password: User.password,
      });
    } else {
      setPasswordsMatch(false);
    }
    if (User && User.email) {
      if (isEmailValid(User.email)) {
        setUser({
          ...User,
          email: User.email,
        });
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    }

    const database = getDatabase();
    if (validEmail === true && passwordsMatch === true) {
      const usernew = createObject(User);
      set(ref(database, "User/" + usernew.id), usernew)
        .then(() => {
          alert("Add user access");
        })
        .catch((error) => {
          console.log(error);
        });
      setUser(userNormal);
    }
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          height: "40px",
          color: "white",
          textTransform: "none",
          backgroundColor: "black",
          ":hover": {
            color: "black",
          },
        }}
      >
        <AddIcon className="my-auto pr-[5px]" />
        New User
      </Button>
      <Modal
        className="flex justify-center items-center"
        open={open}
        onClose={handleClose}
      >
        <div className="box-content bg-web-100 w-fit p-5 rounded-xl">
          <div className="flex justify-between items-center">
            <Typography
              variant="h4"
              component="h2"
              sx={{
                marginBottom: "30px",
              }}
            >
              Add User
            </Typography>
            <Button
              sx={{
                marginBottom: "30px",
                color: "black",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon
                sx={{
                  fontSize: "35px",
                }}
              />
            </Button>
          </div>
          <div className="flex flex-col">
            <div className="mb-[10px]">
              <TextField
                sx={{
                  margin: "0px 5px",
                }}
                label="First Name"
                variant="filled"
                value={User.firstName}
                onChange={(e) => {
                  setUser({ ...User, firstName: e.target.value });
                }}
              />
              <TextField
                sx={{
                  margin: "0px 5px",
                }}
                label="Last Name"
                variant="filled"
                value={User.lastName}
                onChange={(e) => {
                  setUser({ ...User, lastName: e.target.value });
                }}
              />
            </div>
            <TextField
              sx={{
                margin: "10px 5px",
              }}
              label="User Name"
              variant="filled"
              value={User.userName}
              onChange={(e) => {
                setUser({ ...User, userName: e.target.value });
              }}
            />
            <div>
              <TextField
                sx={{
                  margin: "10px 5px",
                }}
                label="Password"
                variant="filled"
                type="password"
                value={User.password}
                onChange={(e) => {
                  setUser({ ...User, password: e.target.value });
                }}
              />
              <TextField
                sx={{
                  margin: "10px 5px",
                }}
                label="Confirm Password"
                variant="filled"
                type="password"
                value={configPassword}
                onChange={(e) => {
                  setConfigPassword(e.target.value);
                }}
              />
            </div>
            {!passwordsMatch && (
              <span className="ml-[5px] text-[12px] text-[red]">
                - password don't match
              </span>
            )}
            <TextField
              sx={{
                margin: "10px 5px",
              }}
              label="Email"
              variant="filled"
              value={User.email}
              onChange={(e) => {
                setUser({ ...User, email: e.target.value });
              }}
            />
          </div>
          {!validEmail && (
            <span className="ml-[5px] text-[12px] text-[red]">
              - don't format email
            </span>
          )}
          <div className="flex flex-row-reverse">
            <Button
              onClick={handleSubmit}
              sx={{
                color: "white",
                backgroundColor: "black",
                padding: "10px",
                ":hover": {
                  color: "black",
                },
              }}
            >
              <AddIcon />
              Add
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
