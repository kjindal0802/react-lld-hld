import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [gridApi, setGridApi] = useState(null);

  const columns = [
    { headerName: "Athlete", field: "athlete", filter: "agTextColumnFilter" },
    { headerName: "Age", field: "age", filter: "agTextColumnFilter" },
    { headerName: "Country", field: "country", filter: "agTextColumnFilter" },
    { headerName: "Year", field: "year", filter: "agTextColumnFilter" },
    { headerName: "Date", field: "date", filter: "agTextColumnFilter" },
    { headerName: "Sport", field: "sport", filter: "agTextColumnFilter" },
    { headerName: "Gold", field: "gold", filter: "agTextColumnFilter" },
    { headerName: "Silver", field: "silver", filter: "agTextColumnFilter" },
    { headerName: "Bronze", field: "bronze", filter: "agTextColumnFilter" },
    { headerName: "Total", field: "total", filter: "agTextColumnFilter" },
  ];
  const datasource = {
    getRows(params) {
      console.log(JSON.stringify(params.request, null, 1));
      const { startRow, endRow, filterModel, sortModel } = params.request;
      let url = `http://localhost:4000/olympic?`;
      //Sorting
      if (sortModel.length) {
        const { colId, sort } = sortModel[0];
        url += `_sort=${colId}&_order=${sort}&`;
      }
      //Filtering
      const filterKeys = Object.keys(filterModel);
      filterKeys.forEach((filter) => {
        url += `${filter}=${filterModel[filter].filter}&`;
      });
      //Pagination
      url += `_start=${startRow}&_end=${endRow}`;
      setTimeout(() => {
        fetch(url)
          .then((httpResponse) => httpResponse.json())
          .then((response) => {
            console.log(response);
            params.successCallback(response, 9000);
          })
          .catch((error) => {
            console.error(error);
            params.failCallback();
          });
      }, 3000);
    },
  };

  const onGridReady = (params) => {
    setGridApi(params);
    // register datasource with the grid
    params.api.setServerSideDatasource(datasource);
  };

  const components = {
    loadingRenderer: function (params) {
      if (params.value !== undefined) {
        return params.value;
      } else {
        return '<img src="https://www.ag-grid.com/example-assets/loading.gif">';
      }
    },
  };

  const gridOptions = {
    columnDefs: columns,
    pagination: true,
    paginationPageSize: 8,
    domLayout: "autoHeight",
    rowModelType: "serverSide",
    serverSideStoreType: "partial",
    onGridReady: onGridReady,
    components: { components },
    defaultColDef: { filter: true, floatingFilter: true, sortable: true },
  };

  return (
    <div>
      <h1 align="center">React-App</h1>
      <h4 align="center">
        Implement Server-Side Pagination, Filter and Sorting in ag Grid
      </h4>
      <div className="ag-theme-alpine">
        <AgGridReact gridOptions={gridOptions} />
      </div>
    </div>
  );
};
export default App;
