import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BrdsqlService } from 'src/app/service/brdsql.service';
import { Recordset } from 'src/app/service/brdsql.module';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-scq-details',
  templateUrl: './scq-details.component.html',
  styleUrls: ['./scq-details.component.scss']
})
export class ScqDetailsComponent implements OnInit {

  submit(search:NgForm){
    console.log(search.valid);
    console.log(search.value);
  }

  alldata: any;
  // fmcode = "0000148033"

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  cpfarmerData?: any = [];
  yearid?: any = [];

  selectyear!:string;
  selectfm!:string;

  constructor(private brdsql: BrdsqlService,) { }

  ngOnInit(): void {
    this.getYearsData()
    // this.getCpdataFarmer()
  }
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
  async getCpdataFarmer() {
    let year = this.selectyear;
    let fmcode = this.selectfm;
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
  displayedColumns: string[] = ['supzone', 'route', 'intlandno', 'fmname', 'canetype', 'landvalue', 'Assess', 'Ton',  'groupCode','canein','print','icon'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alldata.filter = filterValue.trim().toLowerCase();;
    if (this.alldata.paginator) {
      this.alldata.paginator.firstPage();
    }
  }


}

