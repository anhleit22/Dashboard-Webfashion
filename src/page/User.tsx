import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Container } from "@mui/material";
import { ModalAddUer } from "../components/modalAddUser/ModalAddUer";
import { columns, row } from "../data/mockUser";
import { useEffect, useState } from "react";
import { db } from "../fireBaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const User = () => {
  const [Customer, setCustomer] = useState<any>([]);
  useEffect(() => {
    const getAllData = async () => {
      const docRef = doc(db, "/collectionProduction/lsLqtAI857Ym5SGT0hKf");
      const targetDoc = await getDoc(docRef);
      let data = targetDoc.data();
      if (data !== undefined) {
        setCustomer(data);
      }
    };

    getAllData();
  }, []);
  return (
    <div className="h-full">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="font-bold my-[30px] text-[30px]">User</h1>
          <ModalAddUer />
        </div>
        <Card className="ml-[30px]">
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={Customer.rows ? Customer.rows : row}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 6,
                  },
                },
              }}
              pageSizeOptions={[6]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </Card>
      </Container>
    </div>
  );
};
