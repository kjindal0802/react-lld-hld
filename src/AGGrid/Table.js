import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Table() {
  const data = [
    { name: "Gokaran", age: 23 },
    { name: "Ayush", age: 26 },
    { name: "Archit", age: 24 },
    { name: "Manisha", age: 29 },
  ];

  const columns = [
    {
      headerName: "Name",
      field: "name",
      flex: 2,
      checkboxSelection: true,
      //   sortable: true,
      //   editable: true,
      //   filter: true,
    },
    {
      headerField: "Age",
      field: "age",
      flex: 2,
      //   sortable: true,
      //   editable: true,
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    editable: true,
    floatingFilter: true, // inline filter
  };

  let [gridApi, setGridApi] = useState("");

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  console.log(gridApi);
  const exportData = () => {
    gridApi.exportDataAsCsv();
  };

  return (
    <>
      <button onClick={() => exportData()}>Export</button>
      <div
        className="ag-theme-alpine"
        style={{
          height: 400,
          width: "100%",
          margin: "auto",
        }}
      >
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
    </>
  );
}
