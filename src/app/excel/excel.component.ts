import { Component } from '@angular/core';
import { writeFile } from 'xlsx';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent {

  generateExcelReport() {
    // Sample data
    const data = [
      ['Name', 'Age', 'Country'],
      ['John Doe', 25, 'USA'],
      ['Jane Smith', 30, 'Canada'],
      ['Bob Johnson', 35, 'UK']
    ];

    // Create a new workbook
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    // Create a worksheet
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

    // Generate Excel file
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Save the Excel file
    this.saveExcelFile(excelBuffer, 'report.xlsx');
  }


  private saveExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });

    const link: HTMLAnchorElement = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = fileName;
    link.click();
  }



}
