function isLeap (year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
const maxDays = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
export function chunk (arr, size) {
  const l = arr.length
  const res = new Array(Math.ceil(l / size))
  let index = 0
  let resIndex = 0
  while (index < l) {
    res[resIndex] = arr.slice(index, (index += size))
    resIndex++
  }
  return res
}
export function getMaxDay (year, month) {
  if (month === 1) {
    return isLeap(year) ? 29 : 28
  }
  return maxDays[month]
}
