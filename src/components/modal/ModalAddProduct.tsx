import { Button, Modal, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ImgUpload from "./imgupload/ImgUpload";
import { PickColorProduct } from "./pickercolor/PickColorProduct";

export const ModalAddProduct = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="">
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
        New Product
      </Button>
      <Modal
        className="flex justify-center items-center"
        open={open}
        onClose={handleClose}
      >
        <div className=" bg-web-100 w-fit p-5 rounded-xl flex flex-col">
          <div className="flex justify-between items-center">
            <Typography
              variant="h4"
              component="h2"
              sx={{
                marginBottom: "30px",
              }}
            >
              Add New Product
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
          <div>
            <TextField
              sx={{
                margin: "10px 5px",
              }}
              label="Name Product"
              variant="filled"
            />
            <TextField
              sx={{
                margin: "10px 5px",
              }}
              label="Prices"
              variant="filled"
            />
            <TextField
              sx={{
                margin: "10px 5px",
              }}
              label="Total"
              variant="filled"
            />
          </div>
          <div>
            <ImgUpload />
          </div>
          <PickColorProduct />
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
      </Modal>
    </div>
  );
};
