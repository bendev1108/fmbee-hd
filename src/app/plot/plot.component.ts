import { PathLocationStrategy } from '@angular/common';

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { BrdsqlService } from '../service/brdsql.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss'],

})
export class PlotComponent implements AfterViewInit, OnInit {

  alldata?: any = [];
  insertdata?: any = [];
  // ข้อมูลแปลงอ้อยตามปีการผลิตและบัญชีชาวไร่
  displayedColumns: string[] = ['intlandno', 'fmname', 'canetype', 'supzone', 'icon'];
  // รายละเอียดข้อมูลแปลงอ้อยตามปีการผลิตและบัญชีชาวไร่
  displayedColumnsDetail: string[] = ['intlandno', 'fmname', 'canetype', 'supzone', 'dateAdd', 'dateUpdate', 'icon'];
  // ข้อมูลแปลงอ้อย
  cpfarmerData?: any = [];
  // ข้อมูลปีการผลิต
  yearid?: any = [];
  //
  selectyear = '';
  selectfm = '';
  //
  supcode = '8042';
  itid = "";

  myForm: FormBuilder = new FormBuilder;


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private brdsql: BrdsqlService,) {

  }

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

  s_landno?: any = [];
  select_landno(plant: any) {
    console.log('element :', plant)
    //this.s_landno=this.alldata.filter((el:any) => el.itid == itid);
    this.s_landno = plant;
    this.itid = this.s_landno.itid
    console.log('s_landno', this.s_landno)
    console.log('itid', this.itid)
  }

  // เรียกดูข้อมูลแปลงอ้อยตามปีการผลิตและบัญชีชาวไร่
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alldata.filter = filterValue.trim().toLowerCase();;
    if (this.alldata.paginator) {
      this.alldata.paginator.firstPage();
    }
  }

  // ข้อมูล Insert
  async getInsertDataFarmer(f: any) {
    await this.brdsql.insertFmActivity(f).subscribe({
      next: (res: any) => {
        let data = res.recordset

      }, complete() {
        // ถ้าสำเร็จ ตั้องการทำอะไร ใส่ไว้ตรงนี้
      }, error(err) {
        alert('เกิดความผิดพลาดในการเรียกข้อมูลจากเซริ์ฟเวอร์')
      },
    })

  }


  submit(search: NgForm) {
    console.log(search.value);
    console.log(search.valid);
  }

  // submit1(f: any) {
  //   console.log('Form value: ' ,f);
  // }

  submitSave(save: NgForm) {
    console.log('save.value', save.value);
    console.log('save.valid', save.valid);

    if (confirm('ต้องการบันทึกข้อมูล ' + '' + '  หรือไม่?')) {
      this.getInsertDataFarmer(save.value);

    }



  }


  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/plot.js';
    document.body.appendChild(script);
  }


}

