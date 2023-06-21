import { Recordset } from 'src/app/service/brdsql.module';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brdsql } from './brdsql.module';

@Injectable({
  providedIn: 'root'
})
export class BrdsqlService {

  constructor(private http: HttpClient) { }

  // api ของเรา สำหรับการเรียกดูข้อมูลต่างๆ ในฐานข้อมูล SQL Server ชองบริษัทฯ
  baseSelectUrl = "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/select_s_f_w?"
  // s=*&f=[CPS6263].[dbo].[v_cp_data]&w=year='2324' and fmcode='0000149888' order by intlandno
  // yearsUrl = "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/select_s_f_w?s=*&f=[CPS6263].[dbo].[yearID]&w=1=1 order by yearTh"
  // s=*&f=[CPS6263].[dbo].[yearID]&w=1=1 order by yearTh

// เรียกดูข้อมูลปีการผลิต
getYears(){
  let url = this.baseSelectUrl
    + "s=*&f=[CPS6263].[dbo].[yearID]&w=1=1 order by yearTh"
    return this.http.get<any[]>(url)
  // return this.http.get<Recordset[]>(this.yearsUrl);
}

  // เรียกดูข้อมูลแปลงอ้อยตามปีการผลิตและบัญชีชาวไร่
  getcpDataframer(year:string ,fmcode: string) {
    let url = this.baseSelectUrl
    + "s=*&f=[CPS6263].[dbo].[v_cp_data]&w=year='"+year+"' and fmcode='"+fmcode+"' order by intlandno"
    return this.http.get<any[]>(url)
  }

  getDetail(itid: string): Observable<any[]>{

    const myparams = {
      'itid': itid.toString()
    }

    return this.http.get<any[]>(this.baseSelectUrl, { params: myparams });
  }
}
