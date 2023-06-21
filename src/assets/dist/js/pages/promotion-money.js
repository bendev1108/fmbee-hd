function loadTablePromotionMoney() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://www.melivecode.com/api/users");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var trHTML = '';
      const objects = JSON.parse(this.responseText);
      console.log('data from api :', objects)
      for (let object of objects) {
        trHTML += '<tr>';
        trHTML += '<td>' + object['fmcode'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td><button class="btn" onclick="showFormEdit(' + object['id'] + ')"><i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i></button>';
        trHTML += '<button class="btn" onclick="FormDelete(' + object['id'] + ')"><i class="fa-solid fa-trash" style="color: #ff0000;"></i></button></td>';
        trHTML += '</tr>';
      }
      document.getElementById("PromotionMoney").innerHTML = trHTML;
    }
  }
}

// loadTable();

function showFormCreateBox() {
  Swal.fire({
    title: '<p>แบบฟอร์มขอเบิกเงินส่งเสริมปี 66/67</p>',
    html:
      '<form class="example-form">' +
      '<div class="input-group mb-3">' +
      '<input type="text" class="form-control" aria-label="Sizing input" aria-describedby="inputGroup-sizing-default" placeholder="หมายเลขแปลง">' +
      '</div>' +
      '<div class="form-check" align="left">' +
      '<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">' +
      '<label class="form-check-label" for="flexRadioDefault1">เงินส่งเสริมระยะสั้น</label><br>' +
      '<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">' +
      '<label class="form-check-label" for="flexRadioDefault1">เงินส่งเสริมระยะยาว</label><br>' +
      '<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">' +
      '<label class="form-check-label" for="flexRadioDefault1">เงินส่งเสริมเกินวงเงิน</label><br>' +
      '<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">' +
      '<label class="form-check-label" for="flexRadioDefault1">เงินส่งเสริมค่าตัด-ค่าซ่อมรถ</label>' +
      '</div><hr>' +
      ' <div class="input-group mb-3">' +
      ' <span class="input-group-text" id="inputGroup-sizing-default">รายการที่เลือก</span>' +
      ' <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="รายการ">' +
      '</div>' +
      ' <div class="input-group mb-3">' +
      ' <span class="input-group-text" id="inputGroup-sizing-default">หมายเหตุ</span>' +
      ' <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="คำอธิบาย">' +
      '</div>' +
      ' <div class="input-group mb-3">' +
      ' <span class="input-group-text" id="inputGroup-sizing-default">จำนวนเงิน</span>' +
      ' <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="0">' +
      '</div>' +
      '</form>',
    focusConfirm: false,
    preConfirm: () => {
      FormCreate();
    }
  })
}

function FormDelete() {
  const fname = document.getElementById("กิจกรรมเพิ่มผลผลิต").value;
  const lname = document.getElementById("วางแผนที่จะทำ").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://www.melivecode.com/api/users/create");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "fname": fname, "lname": lname
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTablePromotionMoney();
    }
  }
}
function showFormEdit(id) {
  console.log(id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://www.melivecode.com/api/users/" + id);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      const user = objects['user'];
      Swal.fire({
        title: '<p>แบบฟอร์มขอเบิกเงินส่งเสริมปี 66/67</p>',
        html:
        '<div class="input-group mb-3">' +
        '<input type="text" class="form-control" aria-label="Sizing input" aria-describedby="inputGroup-sizing-default" placeholder="หมายเลขแปลง">' +
        '</div>' +
        '<div class="form-check" align="left">' +
        '<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">' +
        '<label class="form-check-label" for="flexRadioDefault1">เงินส่งเสริมระยะสั้น</label><br>' +
        '<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">' +
        '<label class="form-check-label" for="flexRadioDefault1">เงินส่งเสริมระยะยาว</label><br>' +
        '<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">' +
        '<label class="form-check-label" for="flexRadioDefault1">เงินส่งเสริมเกินวงเงิน</label><br>' +
        '<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">' +
        '<label class="form-check-label" for="flexRadioDefault1">เงินส่งเสริมค่าตัด-ค่าซ่อมรถ</label>' +
        '</div><hr>' +
        ' <div class="input-group mb-3">' +
        ' <span class="input-group-text" id="inputGroup-sizing-default">รายการที่เลือก</span>' +
        ' <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="รายการ">' +
        '</div>' +
        ' <div class="input-group mb-3">' +
        ' <span class="input-group-text" id="inputGroup-sizing-default">หมายเหตุ</span>' +
        ' <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="คำอธิบาย">' +
        '</div>' +
        ' <div class="input-group mb-3">' +
        ' <span class="input-group-text" id="inputGroup-sizing-default">จำนวนเงิน</span>' +
        ' <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="0">' +
        '</div>' ,
        focusConfirm: false,
        preConfirm: () => {
          FormEdit();

        }
      })
    }
  }
}
function FormEdit() {
  const id = document.getElementById("id").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", "https://www.melivecode.com/api/users/update");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "id": id, "fname": fname, "lname": lname
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTablePromotionMoney();
    }
  }
}
function FormDelete(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "https://www.melivecode.com/api/users/delete");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "id": id
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTablePromotionMoney();
    }
  };
}
