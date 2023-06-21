var options = {
  series: [{
  name: 'ดำเนินการไปแล้ว',
  data: [44, 55, 41, 67, 22, 43, 21]
}, {
  name: 'คงเหลือ',
  data: [13, 23, 20, 8, 13, 27, 33]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
  stackType: '100%'
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -10,
      offsetY: 0
    }
  }
}],
xaxis: {
  categories: ['การระเบิดดินดาน', 'ปุ๋ยอินทรีย์', 'โดโลไมท์', 'ใส่ปุ๋ยเคมีครั้งที่ 1', 'ใส่ปุ๋ยเคมีครั้งที่ 2', 'การพูนโคนเพื่อรองรับรถตัดอ้อย',
    'ใส่ปุ๋ยเคมีครั้งที่ 3'
  ],
},
fill: {
  opacity: 1
},
legend: {
  position: 'right',
  offsetX: 0,
  offsetY: 50
},
markers: {
  size: 0
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " แปลง";
      }
      return y;

    }
  }
},
theme: {
  mode: 'dark',
  palette: 'palette1',
  monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65
  },
}
};

var chart = new ApexCharts(document.querySelector("#plot"), options);
chart.render();
