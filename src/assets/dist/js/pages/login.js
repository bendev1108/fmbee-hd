let ben = localStorage.getItem("ben")
if (ben != null) {
  window.location.href = '/Dashboard';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://asia-southeast2-brr-farmluck.cloudfunctions.net/dbcps/select_s_f_w?")
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "username": username,
    "password": password,
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['status'] == 'ok') {
        localStorage.setItem("ben", objects["accessToken"]);
      } else {
        Swal.fire({
          icon: 'error',
          objects: ["message"],
          text: 'user หรือ password ไม่ถูกต้อง!!',
        })
      }
    }
  }
  return false;
}
