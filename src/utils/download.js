import { saveAs } from 'file-saver'

export default async function download({ type, data }) {
  const excelData = []
  if (type === 'reverse') {
    excelData.push(['经纬度', '地址', '地址距离',	'附近POI',	'POI距离',	'错误'])
  }
  data.forEach(row => {
    excelData.push([
      row.geoCode,
      row.formattedAddress,
      row.distance,
      row.poi,
      row.poiDistance,
      row.message,
    ])
  })
  await downloadExcel(excelData)
}


async function downloadExcel (data) {
  const XLSX = await import(/* webpackChunkName: "xlsx" */ 'xlsx')
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.aoa_to_sheet(data)
  XLSX.utils.book_append_sheet(workbook, worksheet, 'www.geocoding.tech')
  const wopts = { bookType:'xlsx', bookSST:false, type:'array' }
  const wbout = XLSX.write(workbook,wopts)
  saveAs(new Blob([wbout],{type: 'application/octet-stream'}), 'map-location.xlsx')
}