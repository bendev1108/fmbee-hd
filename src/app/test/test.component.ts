import { Component } from '@angular/core';
// เรียกใช้งาน FormBuilder และ FormGroup
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  // สร้างตัวแปรมาชื่อว่า myForm โดยเก็บเป็นรูปแบบ FormGroup
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // เรียกใช้ myForm โดยจะเก็บข้อมูลของ email , password
    this.myForm = this.fb.group({
      itid: '',
      supcode: '',
      plotName: '',
      yieldEstimate: 10,



    });
  }

  submit(f:any) {
    console.log('Form :' ,f)

  }

}
