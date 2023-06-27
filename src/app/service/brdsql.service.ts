import { Recordset } from 'src/app/service/brdsql.module';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brdsql } from './brdsql.module';

@Injectable({
  providedIn: 'root'
})
export class BrdsqlService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  // api ของเรา สำหรับการเรียกดูข้อมูลต่างๆ ในฐานข้อมูล SQL Server ชองบริษัทฯ
  baseSelectUrl = "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/select_s_f_w?"
  baseUpdateUrl = "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/update_t_s_w?"
  baseInsertUrl = "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/insert_t_c_v?"
  baseLoginUrl = "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/select_s_f_w?s=supcode,supname,username,zonedata,userlevel,tel,suppic_url&f=[dbCPS].[dbo].[users]&w=username='benjama' and password = '12345'"
  // s=supcode,supname,username,zonedata,userlevel,tel,suppic_url&f=[dbCPS].[dbo].[users]&w=username='benjama' and password = '12345'
  // s=*&f=[CPS6263].[dbo].[v_cp_data]&w=year='2324' and fmcode='0000149888' order by intlandno
  // yearsUrl = "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/select_s_f_w?s=*&f=[CPS6263].[dbo].[yearID]&w=1=1 order by yearTh"
  // s=*&f=[CPS6263].[dbo].[yearID]&w=1=1 order by yearTh

  // เรียกดูข้อมูลปีการผลิต
  getYears() {
    let url = this.baseSelectUrl
      + "s=*&f=[CPS6263].[dbo].[yearID]&w=1=1 order by yearTh"
    return this.http.get<any[]>(url)
    // return this.http.get<Recordset[]>(this.yearsUrl);
  }

  // เรียกดูข้อมูลแปลงอ้อยตามปีการผลิตและบัญชีชาวไร่
  getcpDataframer(year: string, fmcode: string) {
    let url = this.baseSelectUrl
      + "s=*&f=[CPS6263].[dbo].[v_cp_data]&w=year='" + year + "' and fmcode='" + fmcode + "' order by intlandno"
    return this.http.get<any[]>(url)
  }

  getDetail(itid: string): Observable<any[]> {

    const myparams = {
      'itid': itid.toString()
    }

    return this.http.get<any[]>(this.baseSelectUrl, { params: myparams });
  }

  // เพิ่มข้อมูล กิจกรรมแปลงผลผลิตสูง
  insertFmActivity(f: any): Observable<any[]> {
    let url = this.baseInsertUrl
      + "t=[dbFarmluck_dev].[dbo].[activitiesFarmer]&"
      + "c=itid,supcode,yieldTarget,yieldEstimate,"
      + "hardSoilBlastPlan,hardSoilBlastDate,hardSoilBlastIntime,hardSoilBlastQuality,hardSoilBlastMethod,hardSoilBlastMore,"
      + "organicPlan,organicDate,organicIntime,organicRatio,organicMethod,organicMore,"
      + "dolomitePlan,dolomiteDate,dolomiteIntime,dolomiteRatio,dolomiteMethod,dolomiteMore,"
      + "chemical1Plan,chemical1Date,chemical1Intime,chemical1Ratio,chemical1Method,chemical1More,"
      + "chemical2Plan,chemical2Date,chemical2Intime,chemical2Ratio,chemical2Method,chemical2More,"
      + "chemical3Plan,chemical3Date,chemical3Intime,chemical3Ratio,chemical3Method,chemical3More,"
      + "rootingPlan,rootingDate,rootingIntime,rootingMethod,rootingMore,plotMoreDesc&"
      + "v=" + "'"
       + f.itid + "','" //id แปลงอ้อย
       + f.supcode + "','"//รหัสผู้บันทึกข้อมูล
       + f.yieldTarget + "','"//เป้าหมายผลผลิต ตัน/ไร่
       + f.yieldEstimate + "','"//ผลผลิตประเมิน ตัน/ไร่

       + f.hardSoilBlastPlan + "','"// วางแผนระเบิดดินดานวันที่
       + f.hardSoilBlastDate + "','"//  ระเบิดดินดานแล้ววันที่
       + f.hardSoilBlastIntime + "','"//การระเบิดดินดานทันเวลาหรือไม่
       + f.hardSoilBlastQuality + "','"//การระเบิดดินดานมีคุณภาพหรือไม่
       + f.hardSoilBlastMethod + "','"//วิธีการระเบิดดินดาน
      + f.hardSoilBlastMore + "','"//เรื่องอื่นๆเกี่ยวกับการระเบิดดินดาน

      + f.organicPlan + "','"//วางแผนใส่ปุ๋ยอินทรีย์วันที่
      + f.organicDate + "','"//วันที่ใส่ปุ๋ยอินทรีย์
      + f.organicIntime + "','"//ใส่ปุ๋ยอินทรีย์ทันเวลาหรือไม่
      + f.organicRatio + "','"//อัตราปุ๋ยอินทรีย์ ตัน/ไร่
      + f.organicMethod + "','"//วิธีการใส่ปุ๋ยอินทรีย์
      + f.organicMore + "','"//เรื่องอื่นๆเกี่ยวกับการใส่ปุ๋ยอินทรีย์

      + f.dolomitePlan + "','"//วางแผนใส่โดโลไมท์วันที่
      + f.dolomiteDate + "','"//วันที่ใส่โดโลไมท์
      + f.dolomiteIntime + "','"//ใส่โดโลไมท์ทันเวลาหรือไม่
      + f.dolomiteRatio + "','"//อัตราโดโลไมท์ ตัน/ไร่
      + f.dolomiteMethod + "','"//วิธีการใส่โดโลไมท์
      + f.dolomiteMore + "','"//เรื่องอื่นๆเกี่ยวกับการใส่โดโลไมท์

      + f.chemical1Plan + "','"//วางแผนใส่ ปุ๋ยเคมี1 วันที่
       + f.chemical1Date + "','"//วันที่ใส่ เคมี1
       + f.chemical1Intime + "','"//ใส่ ปุ๋ยเคมี1 ทันเวลาหรือไม่
      + f.chemical1Ratio + "','"//อัตรา ปุ๋ยเคมี1 กก./ไร่
      + f.chemical1Method + "','"//วิธีการใส่ ปุ๋ยเคมี1 คน รถ
      + f.chemical1More + "','"//เรื่องอื่นๆเกี่ยวกับการใส ปุ๋ยเคมี1

      + f.chemical2Plan + "','"//วางแผนใส่ ปุ๋ยเคมี2 วันที่
      + f.chemical2Date + "','"//วันที่ใส่ เคมี2
      + f.chemical2Intime + "','"//ใส่ ปุ๋ยเคมี2 ทันเวลาหรือไม่
      + f.chemical2Ratio + "','"//อัตรา ปุ๋ยเคมี2 กก./ไร่
      + f.chemical2Method + "','"//วิธีการใส่ ปุ๋ยเคมี2 คน รถ
      + f.chemical2More + "','"//เรื่องอื่นๆเกี่ยวกับการใส ปุ๋ยเคมี2

      + f.chemical3Plan + "','"//วางแผนใส่ ปุ๋ยเคมี3 วันที่
      + f.chemical3Date + "','"//วันที่ใส่ เคมี3
      + f.chemical3Intime + "','"//ใส่ ปุ๋ยเคมี3 ทันเวลาหรือไม่
      + f.chemical3Ratio + "','"//อัตรา ปุ๋ยเคมี3 กก./ไร่
      + f.chemical3Method + "','"//วิธีการใส่ ปุ๋ยเคมี3 คน รถ
       + f.chemical3More + "','"//เรื่องอื่นๆเกี่ยวกับการใส ปุ๋ยเคมี3

      + f.rootingPlan + "','"//วางแผน การพูนโคน วันที่
      + f.rootingDate + "','"//วันที่ทำ การพูนโคน
      + f.rootingIntime + "','"//การพูนโคน ทันเวลาหรือไม่
      + f.rootingMethod + "','"//วิธีการพูนโคน คน รถ
      + f.rootingMore + "','"//เรื่องอื่นๆเกี่ยวกับ การพูนโคน

      + f.plotMoreDesc + "'"//รายละเอียดแปลงเพิ่มเติมต่างๆ
    console.log('url ', url)
    return this.http.get<any[]>(url);
  }

  login(loginForm: any): Observable<any> {
    const myheaders = { 'Content-Type': 'application/json' };
    const body = {
      "grant_type": 'password',
      "username": loginForm.email,
      "password": loginForm.password,
      "udience": 'https://dev-mfl5m1g0fzerb1bv.us.auth0.com/api/v2/',
      "scope": 'openid',
      "client_id": 'tTYwiAi3BI8VwamJmwaSCi63bIyQNVj7'
    };

    return this.http.post<any>(this.baseLoginUrl, body, { headers: myheaders });
  }

  // isLogin(): {
  //   // const token = JSON.parse(localStorage.getItem('token'));
  //   // if (token){
  //   //   return true;
  //   // }else{
  //   //   return false;
  //   // }
  // }

  // getProfile(): Observable<any>{
  //   const token = JSON.parse(localStorage.getItem('token'));
  //   const myheaders ={
  //     'Authorization': 'Bearer '+ token.access_token
  //   };

  //    return this.http.get<any>(this.profileUrl, { headers: myheaders });
  //  }

  // logout(){
  //   localStorage.removeItem('token');
  //   // localStorage.removeItem('profile');
  // }
}
