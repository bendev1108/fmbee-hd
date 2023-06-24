
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { BrdsqlService } from '../service/brdsql.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss'],

})
export class PlotComponent implements AfterViewInit, OnInit {

  // 1
  hardSoilBlastIntime?: any = '';
  hardSoilBlastQuality?: any = '';
  // 2
  organicIntime?: any = '';
  organicMethod?: any = '';
  // 3
  dolomiteIntime: 'not_in_time' | 'in_time' = 'in_time'
  dolomiteMethod: 'machine' | 'person' = 'person'
  // 4
  chemical1Intime: 'not_in_time' | 'in_time' = 'in_time'
  chemical1Method: 'car' | 'person' = 'person'
  // 5
  chemical2Intime: 'not_in_time' | 'in_time' = 'in_time'
  chemical2Method: 'car' | 'person' = 'person'
  // 6
  rootingIntime: 'not_in_time' | 'in_time' = 'in_time'
  rootingMethod: 'car' | 'person' = 'person'
  // 7
  chemical3Intime: 'not_in_time' | 'in_time' = 'in_time'
  chemical3Method: 'car' | 'person' = 'person'

  seasons: string[] = ['1', '2'];

  alldata?: any = [];
  // fmcode = "0000148033"
  cpfarmerData?: any = [];
  yearid?: any = [];
  displayedColumns: string[] = ['intlandno', 'fmname', 'canetype', 'supzone', 'icon'];
  selectyear = '';
  selectfm = '';
  supcode = '8042';
  itid = "";

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
        // console.log('res :', this.yearid)

      }
    })
  }

  // เรียกดูข้อมูลแปลงอ้อยตามปัการผลิตและบัญชีชาวไร่
  async getCpdataFarmer() {
    this.alldata = []
    let year = this.selectyear;
    let fmcode = this.selectfm;
    await this.brdsql.getcpDataframer(year, fmcode).subscribe({
      next: (res: any) => {
        let data = res.recordset
        this.alldata = new MatTableDataSource(data);
        // console.log('data', data);
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



  s_landno?: any = [];
  select_landno(plant:any) {
    console.log('element :', plant)
    //this.s_landno=this.alldata.filter((el:any) => el.itid == itid);
    this.s_landno=plant;
    this.itid = this.s_landno.itid
    console.log('s_landno', this.s_landno)
    console.log('itid', this.itid)
  }

  submit(search: NgForm) {
    console.log(search.value);
    console.log(search.valid);
  }

  submit1(f: any) {
    console.log('Form value: ' ,f);
  }

  submitSave(save: NgForm) {
    console.log(save.value);
    console.log(save.valid);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alldata.filter = filterValue.trim().toLowerCase();;
    if (this.alldata.paginator) {
      this.alldata.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/plot.js';
    document.body.appendChild(script);
  }

}






