import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Container } from "@mui/material";
import { ModalAddUer } from "../components/modal/ModalAddUer";
import { columns, rows } from "../data/mockUser";
import { useEffect, useState } from "react";
import { db } from "../fireBaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { getDatabase, onValue, ref } from "firebase/database";

const fakedata = {
  email: "",
  firstName: "",
  id: 0,
  lastName: "",
  password: "",
  userName: "",
  veri: true,
};

export const User = () => {
  const [Customer, setCustomer] = useState<any>([fakedata]);

  useEffect(() => {
    const database = getDatabase();
    const cartRef = ref(database, "/User");
    onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (!!data) {
        setCustomer(data);
      } else {
        console.log("Data not found");
      }
    });
  }, []);
  return (
    <div className="h-full">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="font-bold my-[30px] text-[24px]">User</h1>
          <ModalAddUer />
        </div>
        <Card className="ml-[30px]">
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={Customer ? Customer : rows}
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
