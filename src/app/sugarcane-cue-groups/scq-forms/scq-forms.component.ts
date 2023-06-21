import { BrdsqlService } from 'src/app/service/brdsql.service';
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-scq-forms',
  templateUrl: './scq-forms.component.html',
  styleUrls: ['./scq-forms.component.scss']
})
export class ScqFormsComponent implements AfterViewInit, OnInit {


  alldata: any;
  // fmcode = "0000148033"

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  cpfarmerData?: any = [];
  yearid?: any = [];

  constructor(private brdsql: BrdsqlService,) { }

  ngOnInit(): void {
    this.getYearsData()
    // this.getCpdataFarmer()

  }
  selectYear:any;
  // เรียกดูข้อมูลปีการผลิต
  async getYearsData() {
    await this.brdsql.getYears().subscribe({
      next: (year:any) => {
        this.yearid = year.recordset
        console.log('res :' ,this.yearid)

      }
    })
  }

  // เรียกดูข้อมูลแปลงอ้อยตามปัการผลิตและบัญชีชาวไร่
  async getCpdataFarmer(fmcode:string) {
     let year = this.selectYear.yearCr
    // let fmcode = this.fmcode;
    console.log('year', this.selectYear);
    await this.brdsql.getcpDataframer(year, fmcode).subscribe({
      next: (res: any) => {
        let data = res.recordset

        this.alldata = new MatTableDataSource(data);
        console.log('data', data);
        this.paginator.length = data.length;
        this.paginator.pageSize = 10;
        this.alldata.sort = this.sort;
        this.alldata.paginator = this.paginator;


        //console.log('Data form server : ', data)
      }, complete() {
        // ถ้าสำเร็จ ตั้องการทำอะไร ใส่ไว้ตรงนี้
      }, error(_err: any) {
        alert('เกิดความผิดพลาดในการเรียกข้อมูลจากเซริ์ฟเวอร์')
      },
    })

  }
  displayedColumns: string[] = ['intlandno', 'fmname', 'supzone','icon'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alldata.filter = filterValue.trim().toLowerCase();;
    if (this.alldata.paginator) {
      this.alldata.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/scq-forms.js';
    document.body.appendChild(script);
  }

}
