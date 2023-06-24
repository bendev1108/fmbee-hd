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
  baseUpdateUrl = "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/update_t_s_w?"
  baseInsertUrl = "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/insert_t_c_v?"
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

    // เพิ่มข้อมูล กิจกรรมแปลงผลผลิตสูง
    insertFmActivity(f: any): Observable<any[]> {
      let url = this.baseInsertUrl
    +"t=[dbFarmluck_dev].[dbo].[activitiesFarmer]&"
    + "c=itid,supcode,yieldTarget,yieldEstimate,"
    + "hardSoilBast,hardSoilBlastPlan,hardSoilBlastDate,hardSoilBlastIntime,hardSoilBlastQuality,hardSoilBlastMethod,hardSoilBlastMore,"
    + "organic,organicPlan,organicDate,organicIntime,organicRatio,organicMethod,organicMore,"
    + "dolomite,dolomitePlan,dolomiteDate,dolomiteIntime,dolomiteRatio,dolomiteMethod,dolomiteMore,"
    + "chemical1,chemical1Plan,chemical1Date,chemical1Intime,chemical1Ratio,chemical1Method,chemical1More,"
    + "chemical2,chemical2Plan,chemical2Date,chemical2Intime,chemical2Ratio,chemical2Method,chemical2More,"
    + "chemical3,chemical3Plan,chemical3Date,chemical3Intime,chemical3Ratio,chemical3Method,chemical3More,"
    + "rooting,rootingPlan,rootingDate,rootingIntime,rootingMethod,rootingMore,plotMoreDesc&"
    + "v=" + "'" + f.itid + "','" + f.supcode + "'," + f.yieldTarget + "," + f.yieldEstimate
    + ",'" + f.hardSoilBast + "','" + f.hardSoilBlastPlan + "','" + f.hardSoilBlastDate + "','" + f.hardSoilBlastIntime
    + "','" + f.pc_hardSoilBlastQuality + "','" + f.hardSoilBlastMethod + "','" + f.hardSoilBlastMore
    + "','" + f.organic + "','" + f.organicPlan + "','" + f.organicDate + "','" + f.organicIntime + "',"
    + f.organicRatio + ",'" + f.organicMethod + "','" + f.organicMore + "','"
    + f.dolomite + "','" + f.dolomitePlan + "','" + f.dolomiteDate + "','" + f.dolomiteIntime + "',"
    + f.dolomiteRatio + ",'" + f.dolomiteMethod + "','" + f.dolomiteMore + "','"
    + f.chemical1 + "','" + f.chemical1Plan + "','" + f.chemical1Date + "','" + f.chemical1Intime + "',"
    + f.chemical1Ratio + ",'" + f.chemical1Method + "','" + f.chemical1More + "','"
    + f.chemical2 + "','" + f.chemical2Plan + "','" + f.chemical2Date + "','" + f.chemical2Intime + "',"
    + f.chemical2Ratio + ",'" + f.chemical2Method + "','" + f.chemical2More + "','"
    + f.chemical3 + "','" + f.chemical3Plan + "','" + f.chemical3Date + "','" + f.chemical3Intime + "',"
    + f.chemical3Ratio + ",'" + f.chemical3Method + "','" + f.chemical3More + "','"
    + f.rooting + "','" + f.rootingPlan + "','" + f.rootingDate + "','" + f.rootingIntime + "','"
    + f.rootingMethod + "','" + f.rootingMore + "','" + f.plotMoreDesc + "'"
      console.log('url ', url)
      return this.http.get<any[]>(url);
    }
}
