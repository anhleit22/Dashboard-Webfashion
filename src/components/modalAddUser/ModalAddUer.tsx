import React from "react";
import { Modal, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export const ModalAddUer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              />
              <TextField
                sx={{
                  margin: "0px 5px",
                }}
                label="Last Name"
                variant="filled"
              />
            </div>
            <TextField
              sx={{
                margin: "10px 5px",
              }}
              label="User Name"
              variant="filled"
            />
            <div>
              <TextField
                sx={{
                  margin: "10px 5px",
                }}
                label="Password"
                variant="filled"
                type="password"
              />
              <TextField
                sx={{
                  margin: "10px 5px",
                }}
                label="Confirm Password"
                variant="filled"
                type="password"
              />
            </div>
            <div>
              <TextField
                sx={{
                  margin: "10px 5px",
                }}
                label="Email"
                variant="filled"
              />
              <TextField
                sx={{
                  margin: "10px 5px",
                }}
                label="Number"
                variant="filled"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <Button
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
