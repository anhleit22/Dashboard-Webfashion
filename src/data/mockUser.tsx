import { GridColDef } from "@mui/x-data-grid";

export const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    user: "snow111",
    veri: true,
    email: "snow111@gmail.com",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    user: "lannister21",
    veri: true,
    email: "Lannister234@gmail.com",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    user: "lannsister3ss",
    veri: false,
    email: "lannsister3ss@gmail.com",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    user: "trungkk33",
    veri: true,
    email: "trungkk33@gmail.com",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    user: "tagaryenni22",
    veri: false,
    email: "tagaryenni22@gmail.com",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    user: "melisanndre43",
    veri: true,
    email: "melisanndre43@gmail.com",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    user: "cubalikkk2",
    veri: false,
    email: "cubalikkk2@gmail.com",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    user: "phapkieu442",
    veri: true,
    email: "phapkieu442@gmail.com",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    user: "roxielo22",
    veri: true,
    email: "roxielo22@gmail.com",
  },
];
//
export const columns: GridColDef[] = [
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 250,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
  {
    field: "veri",
    headerName: "Verified",
    type: "boolean",
    width: 100,
    editable: true,
  },
  {
    field: "user",
    headerName: "User Name",
    type: "number",
    width: 250,
    editable: true,
  },

  {
    field: "email",
    headerName: "Email",
    width: 250,
    editable: true,
  },
];
