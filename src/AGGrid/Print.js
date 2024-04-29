import React, { Component, PropTypes } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    window.scrollTo(0, 0); // this will help to print if div hidden or on mobile screen

    const input = document.getElementById("divToPrint");
    html2canvas(input, {
      // width: input.clientWidth, // DOM original width
      // height: input.clientHeight,
      height: window.outerHeight + window.innerHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }

  render() {
    return (
      <div>
        <div className="mb5">
          <button onClick={this.printDocument}>Print</button>
        </div>
        <div
          id="divToPrint"
          className="mt4"
          style={{ height: "1000px", width: "100%", overflow: "hidden" }}
        >
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any component here</div>
          <div>You Can add any Last here</div>
        </div>
      </div>
    );
  }
}
