import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function TreeData() {
  const defaultColDef = { flex: 1 };

  const autoGroupColumnDef = {
    headerName: "My Tree ",
    width: 300,
    cellRendererParams: {
      suppressCount: true,
    },
  };

  const rowData = [
    {
      orgHierarchy: ["Erica Rogers"],
      //   jobTitle: "CEO",
      //   employmentType: "Permanent",
    },
    {
      orgHierarchy: ["Erica Rogers", "Malcolm Barrett"],
      jobTitle: "Exec. Vice President",
      employmentType: "Permanent",
    },
    {
      orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker"],
      jobTitle: "Director of Operations",
      employmentType: "Permanent",
    },
    {
      orgHierarchy: [
        "Erica Rogers",
        "Malcolm Barrett",
        "Esther Baker",
        "Brittany Hanson",
      ],
      jobTitle: "Fleet Coordinator",
      employmentType: "Permanent",
    },
    {
      orgHierarchy: [
        "Erica Rogers",
        "Malcolm Barrett",
        "Esther Baker",
        "Brittany Hanson",
        "Leah Flowers",
      ],
      jobTitle: "Parts Technician",
      employmentType: "Contract",
    },
    {
      orgHierarchy: [
        "Erica Rogers",
        "Malcolm Barrett",
        "Esther Baker",
        "Brittany Hanson",
        "Tammy Sutton",
      ],
      jobTitle: "Service Technician",
      employmentType: "Contract",
    },
    {
      orgHierarchy: [
        "Erica Rogers",
        "Malcolm Barrett",
        "Esther Baker",
        "Derek Paul",
      ],
      jobTitle: "Inventory Control",
      employmentType: "Permanent",
    },
    {
      orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland"],
      jobTitle: "VP Sales",
      employmentType: "Permanent",
    },
    {
      orgHierarchy: [
        "Erica Rogers",
        "Malcolm Barrett",
        "Francis Strickland",
        "Morris Hanson",
      ],
      jobTitle: "Sales Manager",
      employmentType: "Permanent",
    },
    {
      orgHierarchy: [
        "Erica Rogers",
        "Malcolm Barrett",
        "Francis Strickland",
        "Todd Tyler",
      ],
      jobTitle: "Sales Executive",
      employmentType: "Contract",
    },
    {
      orgHierarchy: [
        "Erica Rogers",
        "Malcolm Barrett",
        "Francis Strickland",
        "Bennie Wise",
      ],
      jobTitle: "Sales Executive",
      employmentType: "Contract",
    },
    {
      orgHierarchy: [
        "Erica Rogers",
        "Malcolm Barrett",
        "Francis Strickland",
        "Joel Cooper",
      ],
      jobTitle: "Sales Executive",
      employmentType: "Permanent",
    },
  ];

  const columnDefs = [
    {
      header: "Job Title",
      field: "jobTitle",
    },
    {
      header: "Employee Type",
      field: "employmentType",
    },
  ];

  const getDataPath = (data) => {
    return data.orgHierarchy;
  };

  const gridOptions = {
    treeData: true,
    autoGroupColumnDef: autoGroupColumnDef,
    rowData: rowData,
    defaultColDef: defaultColDef,
    columnDefs: columnDefs,
    getDataPath: getDataPath, //for solving heirarchy
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <div
        id="myGrid"
        style={{
          height: "100%",
          width: "100%",
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact gridOptions={gridOptions} />
      </div>
    </div>
  );
}
