function loadTableMap() {
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
        trHTML += '<td>' + object['id_m'] + '</td>';
        trHTML += '<td>' + object['name_farmer'] + '</td>';
        trHTML += '<td>' + object['number_field'] + '</td>';
        trHTML += '<td>' + object['quota_number'] + '</td>';
        trHTML += '<td>' + object['promoter'] + '</td>';
        trHTML += '<td>' + object['zone'] + '</td>';
        trHTML += '<td>' + object['part'] + '</td>';
        trHTML += '<td>' + object['lat'] + '</td>';
        trHTML += '<td>' + object['long'] + '</td>';
        trHTML += '<td><button class="btn" onclick="showFormMapEdit(' + object['id'] + ')"><i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i></button>';
        trHTML += '<button class="btn" onclick="MapFormDelete(' + object['id'] + ')"><i class="fa-solid fa-trash" style="color: #ff0000;"></i></button></td>';
        trHTML += '</tr>';
      }
      document.getElementById("Map").innerHTML = trHTML;
    }
  }
}

// loadTableMap();

function showCreateMap() {
  Swal.fire({
    title: '<p>เพิ่มแผนที่</p>',
    html:
      '<form class="was-validated">' +
      '<div class="input-group mb-3">' +
      '<span class="input-group-text" id="inputGroup-sizing-default">เลขโควตา</span>' +
      '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>' +
      '</div>' +
      '<div class="input-group mb-3">' +
      '<span class="input-group-text" id="inputGroup-sizing-default">ชื่อชาวไร่</span>' +
      '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>' +
      '</div>' +
      '<div class="input-group mb-3">' +
      '<span class="input-group-text" id="inputGroup-sizing-default">หมายเลขแปลง</span>' +
      '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>' +
      '</div>' +
      '<div class="input-group mb-3">' +
      '<span class="input-group-text" id="inputGroup-sizing-default">นอส.รับผิดชอบ</span>' +
      '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>' +
      '</div>' +
      '<div class="input-group mb-3">' +
      '<span class="input-group-text" id="inputGroup-sizing-default">โซน</span>' +
      '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>' +
      '</div>' +
      '<div class="input-group mb-3">' +
      '<span class="input-group-text" id="inputGroup-sizing-default">ส่วน</span>' +
      '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>' +
      '</div>' +
      ' <div class="input-group">' +
      ' <span class="input-group-text">ตำแหน่งที่ตั้ง</span>' +
      '<input type="text" aria-label="lat" class="form-control" placeholder="ฝังลิงค์" required>' +
      '</div>' +
      '</form>',
    focusConfirm: false,
    preConfirm: () => {
      MapCreate();
    }
  })
}

function MapFormDelete() {
  const name_farmer = document.getElementById("name_farmer").value;
  const number_field = document.getElementById("number_field").value;
  const quota_number = document.getElementById("quota_number").value;
  const promoter = document.getElementById("promoter").value;
  const zone = document.getElementById("zone").value;
  const part = document.getElementById("part").value;
  const lat = document.getElementById("lat").value;
  const long = document.getElementById("long").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://www.melivecode.com/api/users/create");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "name_farmer": name_farmer, "number_field": number_field, "quota_number": quota_number, "promoter": promoter, "zone": zone, "part": part, "lat": lat, "long": long
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTableDetail();
    }
  }
}
function showFormMapEdit(id) {
  console.log(id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://www.melivecode.com/api/users/" + id);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      const user = objects['user'];
      Swal.fire({
        title: '<p>แก้ไขแผนที่</p>',
        html:
          '<div class="input-group mb-3">' +
          '<span class="input-group-text" id="inputGroup-sizing-default">เลขโควตา</span>' +
          '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">' +
          '</div>' +
          '<div class="input-group mb-3">' +
          '<span class="input-group-text" id="inputGroup-sizing-default">ชื่อชาวไร่</span>' +
          '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">' +
          '</div>' +
          '<div class="input-group mb-3">' +
          '<span class="input-group-text" id="inputGroup-sizing-default">หมายเลขแปลง</span>' +
          '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">' +
          '</div>' +
          '<div class="input-group mb-3">' +
          '<span class="input-group-text" id="inputGroup-sizing-default">นอส.รับผิดชอบ</span>' +
          '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">' +
          '</div>' +
          '<div class="input-group mb-3">' +
          '<span class="input-group-text" id="inputGroup-sizing-default">โซน</span>' +
          '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">' +
          '</div>' +
          '<div class="input-group mb-3">' +
          '<span class="input-group-text" id="inputGroup-sizing-default">ส่วน</span>' +
          '<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">' +
          '</div>' +
          ' <div class="input-group">' +
          ' <span class="input-group-text">ละติจูด & ลองติจูด</span>' +
          '<input type="text" aria-label="lat" class="form-control" placeholder="ละติจูด"><input type="text" aria-label="long" class="form-control" placeholder="ลองติจูด">' +
          '</div>',
        focusConfirm: false,
        preConfirm: () => {
          MapFormEdit();

        }
      })
    }
  }
}
function MapFormEdit() {
  const id_m = document.getElementById("id_m").value;
  const name_farmer = document.getElementById("name_farmer").value;
  const number_field = document.getElementById("number_field").value;
  const quota_number = document.getElementById("quota_number").value;
  const promoter = document.getElementById("promoter").value;
  const zone = document.getElementById("zone").value;
  const part = document.getElementById("part").value;
  const lat = document.getElementById("lat").value;
  const long = document.getElementById("long").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", "https://www.melivecode.com/api/users/update");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "id_m": id_m, "name_farmer": name_farmer, "number_field": number_field, "quota_number": quota_number, "promoter": promoter, "zone": zone, "part": part, "lat": lat, "long": long
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTableMap();
    }
  }
}
function MapFormDelete(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "https://www.melivecode.com/api/users/delete");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "id_m": id_m
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTableMap();
    }
  };
}

var mymap = L.map('map').setView([16.742301, 100.192106], 14);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'GISTNU demo MAP by Leaflet',
        id: 'mapbox.streets'
    }).addTo(mymap);
