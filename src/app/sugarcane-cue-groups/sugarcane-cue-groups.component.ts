import { Title } from '@angular/platform-browser';
import { BrdsqlService } from 'src/app/service/brdsql.service';
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sugarcane-cue-groups',
  templateUrl: './sugarcane-cue-groups.component.html',
  styleUrls: ['./sugarcane-cue-groups.component.scss']
})
export class SugarcaneCueGroupsComponent implements OnInit, AfterViewInit {

  alldata: any;
  selectyear = '';
  selectfm = '';
  cpfarmerData?: any = [];
  yearid?: any = [];

  displayedColumns: string[] = ['intlandno', 'fmname', 'supzone', 'icon'];
  displayedColumnsDetails: string[] = ['supzone', 'route', 'intlandno', 'fmname', 'canetype', 'landvalue', 'Assess', 'Ton', 'groupCode', 'canein', 'print', 'icon'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;



  constructor(private brdsql: BrdsqlService,private sugarTitle:Title) { }

  ngOnInit(): void {
    this.sugarTitle.setTitle("จัดกลุ่มคิวอ้อย")
    this.getYearsData()
    // this.getCpdataFarmer()
  }
  selectYear: any;
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
  submit(search: NgForm) {
    console.log(search.valid);
    console.log(search.value);
  }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/scq-forms.js';
    document.body.appendChild(script);
  }

}
