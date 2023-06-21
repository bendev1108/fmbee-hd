// function loadTable() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/select_s_f_w?s=*&f=[CPS6263].[dbo].[v_cp_data]&w=year='2324' and fmcode='0000149888' order by intlandno");
//   xhttp.send();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText);
//       var trHTML = '';
//       const objects = JSON.parse(this.responseText);
//       console.log('data from api :', objects)
//       for (let object of objects) {
//         trHTML += '<tr>';
//         trHTML += '<td>' + object['supzone'] + '</td>';
//         trHTML += '<td>' + object['route'] + '</td>';
//         trHTML += '<td>' + object['intlandno'] + '</td>';
//         trHTML += '<td>' + object['fmname'] + '</td>';
//         trHTML += '<td>' + object['canetype'] + '</td>';
//         trHTML += '<td>' + object['landvalue'] + '</td>';
//         trHTML += '<td>' + object['Assess'] + '</td>';
//         trHTML += '<td>' + object['Ton'] + '</td>';
//         trHTML += '<td>' + object['canein'] + '</td>';
//         trHTML += '<td>' + object['period_cut'] + '</td>';
//         trHTML += '<td>' + object['groupCode'] + '</td>';
//         trHTML += '<td><button class="btn" onclick="showFormEdit(' + object['itid'] + ')"><i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i></button>';
//         trHTML += '<button class="btn" onclick="FormDelete(' + object['itid'] + ')"><i class="fa-solid fa-trash" style="color: #ff0000;"></i></button></td>';
//         trHTML += '</tr>';
//       }
//       document.getElementById("DetailScq").innerHTML = trHTML;
//     }
//   }
// }

// // loadTable();

// function showFormCreateBox() {
//   Swal.fire({
//     title: '<p>แบบฟอร์มการจัดกลุ่มคิวอ้อย</p>',
//     input: 'select',
//     inputOptions: {
//       'รหัสกลุ่ม': {
//         groupCode: 'Apples',

//       }
//     },
//     inputPlaceholder: 'เลือกลุ่ม',
//     showCancelButton: true,
//     inputValidator: (value) => {
//       return new Promise((resolve) => {
//         if (value != '') {
//           console.log('บันทึกข้อมูลเรียบร้อย')
//           resolve()
//         } else{
//           resolve('กรุณาเลือกข้อมูล')
//         }
//       })
//     }
//   })

//   // if (fruit) {
//   //   Swal.fire(`You selected: ${fruit}`)
//   // }
//   // Swal.fire({
//   //   title: '<p>แบบฟอร์มการจัดกลุ่มคิวอ้อย</p>',
//   //   html:
//   //     '<form class="was-validated">' +
//   //     '<div class="input-group mb-3">' +
//   //     '<select class="form-select" aria-label="Default select example">' +
//   //     '<option selected>--กลุ่ม--</option><option value="1" *ngFor="let group of groupCode">{{group.groupCode}}</option>' +
//   //     '</select>' +
//   //     '</div>' +
//   //     '</form>',
//   //   focusConfirm: false,
//   //   preConfirm: () => {
//   //     FormCreate();
//   //   }
//   // })
// }
// function FormDelete() {
//   const supzone = document.getElementById("supzone").value;
//   const route = document.getElementById("route").value;
//   const intlandno = document.getElementById("intlandno").value;
//   const fmname = document.getElementById("fmname").value;
//   const canetype = document.getElementById("canetype").value;
//   const landvalue = document.getElementById("landvalue").value;
//   const Assess = document.getElementById("Assess").value;
//   const Ton = document.getElementById("Ton").value;
//   const canein = document.getElementById("canein").value;
//   const period_cut = document.getElementById("period_cut").value;
//   const groupCode = document.getElementById("groupCode").value;
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("POST", "https://www.melivecode.com/api/users/create");
//   xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   xhttp.send(JSON.stringify({
//     "supzone": supzone, "route": route, "intlandno": intlandno, "fmname": fmname, "canetype": canetype, "landvalue": landvalue, "Assess": Assess, "Ton": Ton, "canein": canein,
//     "period_cut": period_cut, "groupCode": groupCode
//   }));
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       const objects = JSON.parse(this.responseText);
//       swal.fire(objects['message']);
//       loadTable();
//     }
//   }
// }
// function showFormEdit(id) {
//   console.log(id);
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "https://www.melivecode.com/api/users/" + id);
//   xhttp.send();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       const objects = JSON.parse(this.responseText);
//       const user = objects['user'];
//       Swal.fire({
//         title: '<p>แบบฟอร์มการจัดกลุ่มคิวอ้อย</p>',
//         input: 'select',
//         inputOptions: {
//           'Fruits': {
//             apples: 'Apples',
//             bananas: 'Bananas',
//             grapes: 'Grapes',
//             oranges: 'Oranges'
//           },
//           'Vegetables': {
//             potato: 'Potato',
//             broccoli: 'Broccoli',
//             carrot: 'Carrot'
//           },
//           'icecream': 'Ice cream'
//         },
//         inputPlaceholder: 'Select a fruit',
//         showCancelButton: true,
//         inputValidator: (value) => {
//           return new Promise((resolve) => {
//             if (value != '') {
//               resolve()
//             } else if (value === ''){
//               resolve('กรุณาเลือกข้อมูล')
//             }
//           })
//         }
//       })

//       // if (fruit) {
//       //   Swal.fire(`You selected: ${fruit}`)
//       // }
//       // Swal.fire({
//       //   title: '<p>แบบฟอร์มการจัดกลุ่มคิวอ้อย</p>',
//       //   html:
//       //   '<div class="input-group mb-3">' +
//       //   '<select class="form-select" aria-label="Default select example">' +
//       //   '<option selected>--กลุ่ม--</option><option value="1" *ngFor="let group of groupCode">{{group.groupCode}}</option>' +
//       //   '</select>' +
//       //   '</div>' ,
//       //   focusConfirm: false,
//       //   preConfirm: () => {
//       //     FormEdit();

//       //   }
//       // })
//     }
//   }
// }
// function FormEdit() {
//   const itid = document.getElementById("itid").value;
//   const supzone = document.getElementById("supzone").value;
//   const route = document.getElementById("route").value;
//   const intlandno = document.getElementById("intlandno").value;
//   const fmname = document.getElementById("fmname").value;
//   const canetype = document.getElementById("canetype").value;
//   const landvalue = document.getElementById("landvalue").value;
//   const Assess = document.getElementById("Assess").value;
//   const Ton = document.getElementById("Ton").value;
//   const canein = document.getElementById("canein").value;
//   const period_cut = document.getElementById("period_cut").value;
//   const groupCode = document.getElementById("groupCode").value;
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("PUT", "https://www.melivecode.com/api/users/update");
//   xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   xhttp.send(JSON.stringify({
//     "itid": itid,  "supzone": supzone, "route": route, "intlandno": intlandno, "fmname": fmname, "canetype": canetype, "landvalue": landvalue, "Assess": Assess, "Ton": Ton, "canein": canein,
//     "period_cut": period_cut, "groupCode": groupCode
//   }));
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       const objects = JSON.parse(this.responseText);
//       swal.fire(objects['message']);
//       loadTable();
//     }
//   }
// }
// function FormDelete(id) {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("DELETE", "https://www.melivecode.com/api/users/delete");
//   xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   xhttp.send(JSON.stringify({
//     "itid": itid
//   }));
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4) {
//       const objects = JSON.parse(this.responseText);
//       swal.fire(objects['message']);
//       loadTable();
//     }
//   };
// }
