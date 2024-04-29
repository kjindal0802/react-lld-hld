import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { createRowData } from "./gridSlice";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import lodash from "lodash";

export default function CellRenderAnimate() {
  const data = useSelector((state) => state.grid.rowData);
  const dispatch = useDispatch();
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    params.api.showLoadingOverlay();
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const onUpdateSomeValues = () => {
    const itemsToUpdate = [];
    gridApi.forEachNodeAfterFilterAndSort(function (rowNode, index) {
      const data = lodash.cloneDeep(rowNode.data);
      data.d = Math.floor(Math.random() * 20000 + 20000);
      itemsToUpdate.push(data);
    });
    console.log(itemsToUpdate);
    setRowData(itemsToUpdate);
    // const res = gridApi.applyTransaction({ update: itemsToUpdate });
    // console.log(res);
  };

  useEffect(() => {
    dispatch(createRowData());
  }, [dispatch]);

  useEffect(() => {
    if (data) setRowData(data);
  }, [data]);

  function numberValueParser(params) {
    return Number(params.newValue);
  }
  function formatNumber(number) {
    return Math.floor(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="example-wrapper">
        <div style={{ marginBottom: "5px" }}>
          <button onClick={() => onUpdateSomeValues()}>
            Update Some D &amp; E Values
          </button>
        </div>
        <div
          id="myGrid"
          style={{
            height: "400px",
            width: "100%",
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            defaultColDef={{
              flex: 1,
              minWidth: 120,
              resizable: true,
              cellClass: "align-right",
              valueFormatter: function (params) {
                return formatNumber(params.value);
              },
            }}
            rowData={rowData}
            onGridReady={onGridReady}
            immutableData={true}
            getRowNodeId={function (data) {
              return data.a;
            }}
          >
            <AgGridColumn
              headerName="Editable A"
              field="a"
              editable={true}
              valueParser={numberValueParser}
            />
            <AgGridColumn
              headerName="Editable B"
              field="b"
              editable={true}
              valueParser={numberValueParser}
            />
            <AgGridColumn
              headerName="Editable C"
              field="c"
              editable={true}
              valueParser={numberValueParser}
            />
            <AgGridColumn
              headerName="API D"
              field="d"
              minWidth={140}
              valueParser={numberValueParser}
              cellRenderer="agAnimateShowChangeCellRenderer"
            />
            <AgGridColumn
              headerName="API E"
              field="e"
              minWidth={140}
              //   valueParser={numberValueParser}
              cellRenderer="agAnimateShowChangeCellRenderer"
            />
            <AgGridColumn
              headerName="Total"
              minWidth={140}
              valueGetter="data.a + data.b + data.c + data.d + data.e"
              cellRenderer="agAnimateShowChangeCellRenderer"
            />
            <AgGridColumn
              headerName="Average"
              minWidth={140}
              valueGetter="(data.a + data.b + data.c + data.d + data.e) / 5"
              cellRenderer="agAnimateSlideCellRenderer"
            />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
}
