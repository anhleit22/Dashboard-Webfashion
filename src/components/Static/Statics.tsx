import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Paper } from "../paperCard/Paper";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../fireBaseConfig";
import { PropsItem } from "../../typeGlobal";
import { datapaper } from "../../data/mockDataPaper";

export const Statics = () => {
  const [statics, setStatics] = useState<PropsItem[]>(datapaper);

  useEffect(() => {
    const getAllData = async () => {
      const docRef = doc(db, "/statistical/ZsK4GDeyZQ7QK4Bh6b0T");
      const targetDoc = await getDoc(docRef);
      let data = targetDoc.data();
      if (data !== undefined) {
        setStatics(data.datapaper);
      }
    };

    getAllData();
  }, []);
  return (
    <>
      {statics.map((item: PropsItem) => (
        <Grid item sm={4} md={3}>
          <Paper key={item.header} item={item}></Paper>
        </Grid>
      ))}
    </>
  );
};
