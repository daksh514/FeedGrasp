"use client";
import React from "react";
import * as xlxs from 'xlsx';
// import { saveAs } from 'file-saver';\

var FileSaver = require('file-saver');


function DownloadExcelBtn({ responses }: { responses: Array<any> }) {
//   console.log(responses);
  const EXCEL_TYPE ="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const EXCEL_EXTENSION = ".xlsx";
  function downloadFucn() {
    const worksheet = xlxs.utils.json_to_sheet(responses);
    const workbook = {
      Sheets: {
        data: worksheet,
      },
      SheetNames: ["data"],
    };
    const excelBuffer = xlxs.write(workbook, { bookType: "xlsx", type: "array" });
    saveAsExcel(excelBuffer, "Responses Excel File")
  }

  function saveAsExcel(buffer:any, filename:string){
    const data = new Blob([buffer], {type: EXCEL_TYPE})
    FileSaver.saveAs(data, filename+"_export_"+new Date().getTime()+EXCEL_EXTENSION)
  }
  return (
    <div>
      <button className="btn w-full mt-2 btn-outline" onClick={downloadFucn} type="button">
        {`Download ${responses.length} Responses in Excel Sheet`}
      </button>
    </div>
  );
}

export default DownloadExcelBtn;
