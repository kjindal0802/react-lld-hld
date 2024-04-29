import React, { useState, useEffect, useRef } from "react";
import { AgGridColumn, AgGridReact, agDateColumnFilter } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Aggrid = () => {
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((response) => response.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  const onButtonClick = (e) => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => `${node.make} ${node.model}`)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ margin: "auto", height: 400, width: 600 }}
    >
      <button onClick={onButtonClick}>Get Selected Rows</button>
      <AgGridReact rowData={rowData} ref={gridRef} rowSelection="multiple">
        <AgGridColumn
          field="make"
          sortable={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn field="model" filter="agDateColumnFilter"></AgGridColumn>
        <AgGridColumn field="price"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default Aggrid;
