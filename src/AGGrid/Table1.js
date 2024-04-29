import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Table1() {
  const actionButton = (params) => {
    console.log(params.data);
  };

  const columnDefs = [
    {
      headerName: "Name",
      field: "name",
      flex: 1,
      tooltipField: "name",
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      headerName: "Email",
      flex: 1,
      field: "email",
    },
    {
      headerName: "Body",
      flex: 2,
      field: "body",
      //   cellStyle: (params) =>
      //     params.value > 40000
      //       ? { backgroundColor: "white" }
      //       : { backgroundColor: "crimson" },
      //   cellClass: (params) =>
      //     params.value > 40000 ? "classNameA" : "classNameB",
    },
    {
      headerName: "Action",
      flex: 1,
      field: "body",
      cellRendererFramework: (params) => (
        <button onClick={() => actionButton(params)}>Click it</button>
      ),
    },
  ];

  const defaultColDef = {
    filter: true,
    floatingFilter: true,
  };

  const [gridApi, setGridApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  useEffect(() => {
    if (gridApi) {
      async function fetchData() {
        await fetch("https://jsonplaceholder.typicode.com/comments")
          .then((res) => res.json())
          .then((data) => {
            gridApi.applyTransaction({ add: data });
          });
      }
      fetchData();
    }
  }, [gridApi]);

  const onSelectionChanged = (event) => {
    console.log(event.api.getSelectedRows());
  };

  const isRowSelectable = (row) => {
    return row.data.id % 2 === 0;
  };

  const paginationHandler = (e) => {
    gridApi.paginationSetPageSize(e.target.value);
  };

  const gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: defaultColDef,
    // enableBrowserTooltips:{true},
    onGridReady: onGridReady,
    rowSelection: "multiple",
    onSelectionChanged: onSelectionChanged,
    // tooltipShowDelay:{{ tooltipShowDelay: 51 }},
    rowMultiSelectWithClick: true,
    isRowSelectable: isRowSelectable,
    pagination: true,
    paginationPageSize: 10,
    //   paginationAutoPageSize={10}
    //   rowData={rowData}
  };

  return (
    <>
      Select Page
      <select style={{ marginLeft: "auto" }} onChange={paginationHandler}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <br></br>
      <div
        className="ag-theme-alpine"
        style={{
          height: 400,
          width: "100%",
          margin: "auto",
        }}
      >
        <AgGridReact gridOptions={gridOptions} />
      </div>
    </>
  );
}
