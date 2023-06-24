function save() {
  Swal.fire({
    title: 'กรุณาตรวจสอบข้อมูลก่อนยืนยันการบันทึก!!!',
    showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: 'ยืนยันการบันทึกข้อมูล',
    denyButtonText: `ไม่ยืนยันการบันทึกข้อมูล`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('บันทึกข้อมูลเรียบร้อย!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('ไม่บันทึกข้อมูล', '', 'info')
    }
  })

}

$('.datepicker').pickadate({
  labelMonthNext: 'Go to the next month',
  labelMonthPrev: 'Go to the previous month',
  labelMonthSelect: 'Pick a month from the dropdown',
  labelYearSelect: 'Pick a year from the dropdown',
  selectMonths: true,
  selectYears: true
})
