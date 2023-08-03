import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";

const Users = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },

    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      headerName: "E-mail",
      type: "string",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
    },
    {
      field: "verified",
      headerName: "Verified",
      type: "boolean",
      width: 150,
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add new User</button>
      </div>

      <DataTable slug="users" columns={columns} rows={userRows} />
    </div>
  );
};

export default Users;
