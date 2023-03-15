import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getAllProblems } from "../api";
import { Chip, Paper } from "@mui/material";
import {
  CheckCircleOutline,
  SyncOutlined,
  WarningAmberOutlined,
} from "@mui/icons-material";

export default function Table() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "customer",
      headerName: "Customer",
      width: 100,
      // editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      width: 120,
      // editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
      sortable: false,
      // editable: true,
    },
    {
      field: "situation",
      headerName: "Situation",
      width: 90,
      headerAlign: "center",
      align: "center",
      renderCell: (cellValues) => {
        console.log({ cellValues });
        return cellValues.value === "urgent" ? (
          <Chip label="urgent" color="error" />
        ) : (
          <Chip label="normal" color="warning" />
        );
      },
      // editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      width: 110,
      renderCell: (cellValues) => {
        console.log({ cellValues });
        return cellValues.value === "closed" ? (
          <Chip
            label="closed"
            variant="outlined"
            color="success"
            icon={<CheckCircleOutline fontSize="inherit" />}
          />
        ) : cellValues.value === "open" ? (
          <Chip
            label="open"
            variant="outlined"
            color="error"
            icon={<WarningAmberOutlined fontSize="inherit" />}
          />
        ) : (
          <Chip
            label="process"
            variant="outlined"
            color="warning"
            icon={<SyncOutlined fontSize="inherit" />}
          />
        );
      },
      // editable: true,
    },

    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];

  const [problems, setProblems] = useState([]);

  const detailsRows = problems.map((row, idx) => {
    return {
      id: idx + 1,
      situation: row.situation,
      description: row.description,
      status: row.status,
      title: row.title,
      customer: row.user.name,
    };
  });
  useEffect(() => {
    getAllProblems()
      .then((results) => {
        // results.map((barulagi) => {
        //   return setChipSet(barulagi.situation);
        // });
        setProblems(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(problems);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        // columnVisibilityModel={{
        //   // Hide columns id, the other columns will remain visible
        //   id: false,
        // }}
        getRowHeight={() => "auto"}
        component={Paper}
        rows={detailsRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: 2,
          },
        }}
      />
    </Box>
  );
}
