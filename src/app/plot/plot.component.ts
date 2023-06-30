import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import { writeFile } from 'xlsx';

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { BrdsqlService } from '../service/brdsql.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss'],

})
export class PlotComponent implements AfterViewInit, OnInit {

  alldata?: any = []; //getCpdataFarmer
  insertalldata?: any = []; //getDataFarmerInsert()
  UpdateData?: any = [];
  loginData?: any = [];
  // ข้อมูลแปลงอ้อยตามปีการผลิตและบัญชีชาวไร่
  displayedColumns: string[] = ['intlandno', 'fmname', 'canetype', 'supzone', 'icon'
  ];
  // รายละเอียดข้อมูลแปลงอ้อยตามปีการผลิตและบัญชีชาวไร่
  displayedColumnsDetail: string[] = ['dateUpdate', 'intlandno', 'fmname', 'canetype', 'landvalue', 'supzone', 'route','icon'];
  // ข้อมูลแปลงอ้อย
  cpfarmerData?: any = [];
  // ข้อมูลปีการผลิต
  yearid?: any = []; //getYearsData
  //ข้อมูล Insert
  dataInsert?: any = [];
  //
  selectyear = '';
  selectfm = '';
  selectSubcode = '8042';
  //
  supcode = '8042';
  itid = "";

  myForm: FormBuilder = new FormBuilder;



  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private brdsql: BrdsqlService, private plotTitle: Title, private router: Router, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.plotTitle.setTitle("กิจกรรมแปลงผลผลิตสูง ปี 2566/67")
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

  // เรียกดูข้อมูล LoginData
  async getLoginData() {
    await this.brdsql.getLoginData().subscribe({
      next: (login: any) => {
        this.loginData = login.recordset
        // console.log('res :', this.yearid)

      }
    })
  }

  //filter รายแปลงตาม itid
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

  // เรียกดูข้อมูล Insert
  async getDataFarmerInsert() {
    this.alldata = []
    // let year = this.selectyear;
    // let fmcode = this.selectfm;
    await this.brdsql.getInsertDatafarmer().subscribe({
      next: (res: any) => {
        let data = res.recordset
        this.alldata = new MatTableDataSource(data);
        console.log('data', data);
        // this.paginator.length = data.length;
        // this.paginator.pageSize = 10;
        // this.alldata.sort = this.sort;
        // this.alldata.paginator = this.paginator;

        //console.log('Data form server : ', data)
      }, complete() {
        // ถ้าสำเร็จ ตั้องการทำอะไร ใส่ไว้ตรงนี้
      }, error(err) {
        alert('เกิดความผิดพลาดในการเรียกข้อมูลจากเซริ์ฟเวอร์')
      },
    })

  }

  // ออกรายงาน PDF
  generatePDFReport() {
    // Create a new jsPDF instance
    const doc = new jsPDF('p', 'pt', 'a4');

    // Set the report title
    doc.setFontSize(20);
    // doc.html('<div class="img">' +
    //   ' <img src="logo.png" alt="">' +
    //   '</div>');
    doc.text(
      "PDF Report",
      10, 20);

    // Add report content
    doc.setFontSize(12);
    doc.text("This is the content of the PDF report.", 10, 30);

    // Save the PDF file
    doc.save("report.pdf");
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
    this.router.navigate(['/Plot']);

  }

  submitShowData(ShowData: NgForm) {
    console.log(ShowData.value);
    console.log(ShowData.valid);

  }

  submitUpdate(saveUpdate: NgForm) {
    console.log('saveUpdate.value', saveUpdate.value);
    console.log('saveUpdate.valid', saveUpdate.valid);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.insertalldata.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/plot.js';
    document.body.appendChild(script);
  }


}

