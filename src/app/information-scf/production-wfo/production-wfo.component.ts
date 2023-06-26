import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BrdsqlService } from 'src/app/service/brdsql.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-production-wfo',
  templateUrl: './production-wfo.component.html',
  styleUrls: ['./production-wfo.component.scss']
})
export class ProductionWfoComponent implements OnInit {

  alldata: any;
  itid = "";
  s_landno?: any = [];

  cpfarmerData?: any = [];
  yearid?: any = [];

  selectyear!: string;
  selectfm!: string;

  displayedColumns: string[] = ['intlandno', 'fmname', 'canetype', 'landvalue', 'supzone', 'route', 'icon'];
  displayedColumnsDetails: string[] = ['intlandno', 'fmname', 'canetype', 'landvalue', 'print', 'icon'];


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;


  constructor(private brdsql: BrdsqlService,) { }

  ngOnInit(): void {
    this.getYearsData()
    // this.getCpdataFarmer()
  }
  // เรียกดูข้อมูลปีการผลิต
  async getYearsData() {
    await this.brdsql.getYears().subscribe({
      next: (year: any) => {
        this.yearid = year.recordset
        console.log('res :', this.yearid)
      }
    })
  }

  // เรียกดูข้อมูลแปลงอ้อยตามปัการผลิตและบัญชีชาวไร่
  async getCpdataFarmer() {
    let year = this.selectyear
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
      }, error(err: any) {
        alert('เกิดความผิดพลาดในการเรียกข้อมูลจากเซริ์ฟเวอร์')
      },
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alldata.filter = filterValue.trim().toLowerCase();;
    if (this.alldata.paginator) {
      this.alldata.paginator.firstPage();
    }
  }

  select_landno(plant: any) {
    console.log('element :', plant)
    //this.s_landno=this.alldata.filter((el:any) => el.itid == itid);
    this.s_landno = plant;
    this.itid = this.s_landno.itid
    console.log('s_landno', this.s_landno)
    console.log('itid', this.itid)
  }
  // ข้อมูล Insert
  async getInsertDataFarmer() {
    let as = 'เงินส่งเสริม'
    if (confirm('ต้องการบันทึกข้อมูล ' + as + '  หรือไม่?')) {
      console.log(as);

    }
  }

  submit(search: NgForm) {
    console.log(search.valid);
    console.log(search.value);
  }
  submitSave(save: NgForm) {
    console.log(save.value);
    console.log(save.valid);
  }


}
