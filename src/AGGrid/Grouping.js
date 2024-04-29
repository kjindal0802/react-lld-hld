"use strict";

import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Grouping() {
  const columnDefs = [
    {
      field: "country",
      rowGroup: true,
      hide: true,
      sortable: true,
    },
    {
      field: "year",
      rowGroup: true,
      hide: true,
    },
    { field: "athlete" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    resizable: true,
    filter: true,
    filterValueGetter: (params) => params.data.country,
  };

  const [rowData, setRowData] = useState(null);
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColummApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setColummApi(params.columnApi);
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => params.api.setRowData(data));
  };

  const autoGroupColumnDef = {
    headerValueGetter: (params) => `${params.colDef.headerName} Group Column`,
    minWidth: 220,
    // cellRendererParams: {
    //   suppressCount: true,
    //   checkbox: true,
    // },
  };

  const isRowSelectable = (params) => {
    console.log(params.data);
  };

  const gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: defaultColDef,
    autoGroupColumnDef: autoGroupColumnDef,
    animateRows: true,
    onGridReady: onGridReady,
    // isRowSelectable: isRowSelectable,
    rowData: rowData,
    // groupDisplayType: "groupRows",
    groupDisplayType: "singleColumn",
    rowGroupPanelShow: "always",
  };

  const onClickHandler = () => {
    const visibleState = columnApi.getColumn("year").visible;
    columnApi.setColumnVisible("year", !visibleState);
  };

  const handleFilterChange = (e) => {
    gridApi.setQuickFilter(e.target.value);
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <button onClick={onClickHandler}>Show/Hide Year</button>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Search Something..."
      />
      <divs
        id="myGrid"
        style={{
          height: "100%",
          width: "100%",
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact gridOptions={gridOptions} />
      </divs>
    </div>
  );
}
