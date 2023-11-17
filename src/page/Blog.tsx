import { Card } from "@mui/material";
import { EditorText } from "../components/editor/EditorText";

export const Blog = () => {
  return (
    <Card sx={{ padding: "30px", margin: "10px", height: "100%" }}>
      <EditorText />
    </Card>
  );
};
