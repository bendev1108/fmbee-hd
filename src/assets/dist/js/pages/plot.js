function save() {
  Swal.fire({
    title: '',
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
