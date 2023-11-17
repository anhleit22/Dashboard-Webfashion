import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

function ImgUpload() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageChange = (event: any) => {
    const files = event.target.files;
    setSelectedImages([...selectedImages, ...files]);
  };
  const handleRemoveImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div className="flex items-center my-[10px]">
      <span className="mx-[10px] font-bold">
        Import <br></br> Image:
      </span>
      <TextField
        type="file"
        onChange={handleImageChange}
        inputProps={{ accept: "image/*" }}
        sx={{
          padding: "0px",
          width: "200px",
        }}
      />
      {selectedImages.length > 0 && (
        <div className="ml-[10px]">
          <h3 className="mb-[5px]">Selected Images:</h3>
          <ul className="flex justify-center">
            {selectedImages.map((image, index) => (
              <li key={index}>
                <Button onClick={() => handleRemoveImage(index)}>
                  <CloseIcon />
                </Button>
                <img
                  className=" p-1 h-[60px] w-[60px] relative"
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${index}`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImgUpload;
