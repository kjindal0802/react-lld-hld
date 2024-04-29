"use strict";

import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const GridExample = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = (data) => params.api.setRowData(data);

    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => updateData(data));
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        id="myGrid"
        style={{
          height: "100%",
          width: "100%",
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          defaultColDef={{
            flex: 1,
            minWidth: 150,
            filter: true,
            sortable: true,
            resizable: true,
          }}
          autoGroupColumnDef={{
            headerName: "Athlete",
            field: "athlete",
            minWidth: 250,
            cellRenderer: "agGroupCellRenderer",
            cellRendererParams: { footerValueGetter: '"Total (" + x + ")"' },
          }}
          sideBar={true}
          onGridReady={onGridReady}
          rowData={rowData}
        >
          <AgGridColumn field="country" rowGroup={true} hide={true} />
          <AgGridColumn
            field="gold"
            aggFunc="sum"
            enableValue={true}
            allowedAggFuncs={["sum", "min", "max"]}
          />
          <AgGridColumn field="silver" aggFunc="sum" enableValue={true} />
          <AgGridColumn field="bronze" aggFunc="sum" enableValue={true} />
          <AgGridColumn
            field="total"
            aggFunc="avg"
            enableValue={true}
            minWidth={200}
          />
          <AgGridColumn field="age" />
          <AgGridColumn field="year" rowGroup={true} />
          <AgGridColumn field="date" />
          <AgGridColumn field="sport" />
        </AgGridReact>
      </div>
    </div>
  );
};

render(<GridExample></GridExample>, document.querySelector("#root"));
