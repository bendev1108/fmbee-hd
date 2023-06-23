import { BrdsqlService } from './../../service/brdsql.service';
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.component.html',
  styleUrls: ['./plot-detail.component.scss']
})
export class PlotDetailComponent implements AfterViewInit, OnInit{
  alldata: any;
  // fmcode = "0000148033"

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  cpfarmerData?: any = [];
  yearid?: any = [];
  displayedColumns: string[] = ['intlandno', 'supzone', 'route', 'fmname', 'canetype', 'SUPNAME', 'icon'];

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
  async getCpdataFarmer(year:string ,fmcode:string) {
    // let year = "2324"
    // let fmcode = this.fmcode;
    await this.brdsql.getcpDataframer(year, fmcode).subscribe({
      next: (res: any) => {
        let data = res.recordset

        this.alldata = new MatTableDataSource(data);
        console.log('data',data);
        this.paginator.length = data.length;
        this.paginator.pageSize = 10;
        this.alldata.sort = this.sort;
        this.alldata.paginator = this.paginator;


        //console.log('Data form server : ', data)
      }, complete() {
        // ถ้าสำเร็จ ตั้องการทำอะไร ใส่ไว้ตรงนี้
      }, error(err) {
        alert('เกิดความผิดพลาดในการเรียกข้อมูลจากเซริ์ฟเวอร์')
      },
    })

  }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/plot-activity-next.js';
    document.body.appendChild(script);
  }
}
