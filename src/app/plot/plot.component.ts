import { Router } from '@angular/router';

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
  displayedColumnsDetail: string[] = ['dateUpdate', 'intlandno', 'fmname', 'canetype', 'landvalue', 'supzone', 'route', 'icon'];
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

  f?: any = [];

  // สร้างตัวแปรมาชื่อว่า myForm โดยเก็บเป็นรูปแบบ FormGroup
  myForm!: FormGroup;



  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private brdsql: BrdsqlService, private plotTitle: Title, private router: Router, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.plotTitle.setTitle("กิจกรรมแปลงผลผลิตสูง ปี 2566/67")
    this.getYearsData()
    // เรียกใช้ myForm โดยจะเก็บข้อมูลของ email , password
    this.myForm = this.fb.group({
      itid: '', //id แปลงอ้อย
      supcode: '', //รหัสผู้บันทึกข้อมูล
      plotName: '', //ชื่อเรียกแปลงอ้อย
      yieldEstimate: 10, //ผลผลิตประเมิน ตัน/ไร่
      yieldTarget: 0, //เป้าหมายผลผลิต ตัน/ไร่
      plotMoreDesc: '', //รายละเอียดแปลงเพิ่มเติมต่างๆ
      //การระเบิดดินดาน (ภายในอายุ 30 วัน)
      hardSoilBlastPlan: '', //dd/mm/yyyy วางแผนระเบิดดินดานวันที่
      hardSoilBlastDate: '', //dd/mm/yyyy ระเบิดดินดานแล้ววันที่
      hardSoilBlastIntime: '', //radio 1,2 การระเบิดดินดานทันเวลาหรือไม่
      hardSoilBlastQuality: '', //radio 1,2 การระเบิดดินดานมีคุณภาพหรือไม่
      hardSoilBlastMethod: '', //วิธีการระเบิดดินดาน
      hardSoilBlastMore: '', //เรื่องอื่นๆเกี่ยวกับการระเบิดดินดาน
      //ปุ๋ยอินทรีย์ (ภายในอายุ 30 วัน)
      organicPlan: '', //dd/mm/yyyy วางแผนใส่ปุ๋ยอินทรีย์วันที่
      organicDate: '', //dd/mm/yyyy วันที่ใส่ปุ๋ยอินทรีย์
      organicIntime: '', //radio 1,2 ใส่ปุ๋ยอินทรีย์ทันเวลาหรือไม่
      organicRatio: '', //อัตราปุ๋ยอินทรีย์
      organicMethod: '', //radio 1,2 วิธีการใส่ปุ๋ยอินทรีย์
      organicMore: '', //เรื่องอื่นๆเกี่ยวกับการใส่ปุ๋ยอินทรีย์
      //โดโลไมท์ (ภายในอายุ 30 วัน)
      dolomitePlan: '', //dd/mm/yyyy วางแผนใส่โดโลไมท์วันที่
      dolomiteDate: '', //dd/mm/yyyy วันที่ใส่โดโลไมท์
      dolomiteIntime: '', //radio 1,2 ใส่โดโลไมท์ทันเวลาหรือไม่
      dolomiteRatio: '', //อัตราโดโลไมท์
      dolomiteMethod: '', //radio 1,2 วิธีการใส่โดโลไมท์
      dolomiteMore: '', //เรื่องอื่นๆเกี่ยวกับการใส่โดโลไมท์
      //ใส่ปุ๋ยเคมีครั้งที่ 1 (ภายในอายุ 30 วัน)
      chemical1Plan: '', //dd/mm/yyyy วางแผนใส่ ปุ๋ยเคมี1 วันที่
      chemical1Date: '', //dd/mm/yyyy วันที่ใส่ เคมี1
      chemical1Intime: '', //radio 1,2 ใส่ ปุ๋ยเคมี1 ทันเวลาหรือไม่
      chemical1Ratio: '', //อัตรา ปุ๋ยเคมี1 กก./ไร่
      chemical1Method: '', //radio 1,2 วิธีการใส่ ปุ๋ยเคมี1 คน รถ
      chemical1More: '', //เรื่องอื่นๆเกี่ยวกับการใส ปุ๋ยเคมี1
      //ใส่ปุ๋ยเคมีครั้งที่ 2 (ภายในอายุ 75 วัน)
      chemical2Plan: '', //dd/mm/yyyy วางแผนใส่ ปุ๋ยเคมี2 วันที่
      chemical2Date: '', //dd/mm/yyyy วันที่ใส่ เคมี2
      chemical2Intime: '', //radio 1,2 ใส่ ปุ๋ยเคมี2 ทันเวลาหรือไม่
      chemical2Ratio: '', //อัตรา ปุ๋ยเคมี2 กก./ไร่
      chemical2Method: '', //radio 1,2 วิธีการใส่ ปุ๋ยเคมี2 คน รถ
      chemical2More: '', //เรื่องอื่นๆเกี่ยวกับการใส ปุ๋ยเคมี2
      //การพูนโคน เพื่อรองรับรถตัดอ้อย (ระยะเวลา 75 วัน)
      rootingPlan: '', //dd/mm/yyyy วางแผน การพูนโคน วันที่
      rootingDate: '', //dd/mm/yyyy วันที่ทำ การพูนโคน
      rootingIntime: '', //radio 1,2 การพูนโคน ทันเวลาหรือไม่
      rootingMethod: '', //radio 1,2 วิธีการพูนโคน คน รถ
      rootingMore: '', //เรื่องอื่นๆเกี่ยวกับ การพูนโคน
      //ใส่ปุ๋ยเคมีครั้งที่ 3 เพื่อเพิ่มผลผลิต (ภายในอายุ 90 วัน)
      chemical3Plan: '', //dd/mm/yyyy วางแผนใส่ ปุ๋ยเคมี3 วันที่
      chemical3Date: '', //dd/mm/yyyy วันที่ใส่ เคมี3
      chemical3Intime: '', //radio 1,2 ใส่ ปุ๋ยเคมี3 ทันเวลาหรือไม่
      chemical3Ratio: '', //อัตรา ปุ๋ยเคมี3 กก./ไร่
      chemical3Method: '', //radio 1,2 วิธีการใส่ ปุ๋ยเคมี3 คน รถ
      chemical3More: '', //เรื่องอื่นๆเกี่ยวกับการใส ปุ๋ยเคมี3

    });

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

  //filter รายแปลงตาม itid activity
  // s_activity?: any = [];
  // s_aivity(activity: any) {
  //   console.log('element :', activity)
  //   //this.s_aivity=this.alldata.filter((el:any) => el.itid == itid);
  //   this.s_aivity = activity;
  //   this.itid = this.s_aivity.itid
  //   console.log('s_aivity', this.s_aivity)
  //   console.log('itid', this.itid)
  // }

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
    await this.brdsql.getInsertDatafarmer().subscribe({
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
    let f = this.f;
    await this.brdsql.insertFmActivity(f).subscribe({
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

  submit(search: NgForm) {
    console.log(search.value);
    console.log(search.valid);
  }

  // submit1(f: any) {
  //   console.log('Form value: ' ,f);
  // }

  submitSave(f: any) {
    console.log('Form :', f);
    // console.log('save.valid', f.valid);
    // if (confirm('ต้องการบันทึกข้อมูล ' + '' + '  หรือไม่?')) {
    //   this.getInsertDataFarmer(f.value);
    // }
    // localStorage.removeItem('myForm')
    //  this.router.navigate(['/Dashboard']);
    // this.router.navigate(['/Plot']);
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

