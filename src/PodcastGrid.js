import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { useState, useEffect } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function PodcastGrid(props) {
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState();

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  let columnDefs = [
    {
      headerName: "Episode Title",
      field: "title",
      wrapText: true,
      autoHeight: true,
      flex: 2,
      resizable: true,
      filter: `agGridTextFilter`,
    },
    {
      headerName: "Published",
      field: "pubDate",
      sortable: true,
      filter: "agDateColumnFilter",
    },
    {
      headerName: "Episode",
      field: "mp3",
      flex: 2,
      cellRenderer: (params) => `
          <audio controls preload="none"
              style="height:2em; vertical-align: middle;">
              <source src=${params.value} type="audio/mpeg" />
          </audio>`,
    },
    {
      field: "description",
      hide: true,
    },
  ];

  useEffect(() => {
    if (gridApi) {
      gridApi.setQuickFilter(props.quickFilter);
    }
  }, [gridApi, props.quickFilter]);

  useEffect(() => {
    fetch(props.rssfeed)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        const itemList = data.querySelectorAll("item");

        const items = [];
        itemList.forEach((el) => {
          items.push({
            pubDate: new Date(el.querySelector("pubDate").textContent),
            title: el.querySelector("title").innerHTML,
            mp3: el.querySelector("enclosure").getAttribute("url"),
            description: el
              .querySelector("description")
              .textContent.replace(/(<([^>]+)>)/gi, ""),
          });
        });

        setRowData(items);
      });
  }, [props.rssfeed]);

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: props.height, width: props.width }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
        pagination={true}
        paginationAutoPageSize={true}
      ></AgGridReact>
    </div>
  );
}
