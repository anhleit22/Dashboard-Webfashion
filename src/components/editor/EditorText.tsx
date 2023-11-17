import { Button, Card, Grid } from "@mui/material";
import React, { useState } from "react";
import { ListBlog } from "./ListBlog";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    [{ align: [] }],
    ["clean"],
  ],
};

export const EditorText: React.FC = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <div className="">
            <ReactQuill
              onChange={(e: string) => setValue(e)}
              modules={modules}
            />
          </div>
        </Grid>
        <Grid item md={5}>
          <Card sx={{ background: "#fafafa", height: "100%" }}>
            <h1 className="text-center text-[25px] font-bold p-4">Preview</h1>
            <div className="p-4" dangerouslySetInnerHTML={{ __html: value }} />
          </Card>
        </Grid>
        <Grid item md={2}>
          <Card sx={{ height: "100vh" }}>
            <ListBlog />
          </Card>
        </Grid>
      </Grid>
      <div className="mt-[30px] flex flex-row-reverse">
        <Button
          sx={{
            padding: "10px 30px",
            border: "1px solid",
            borderColor: "black",
            color: "black",
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
