export default function solution(content){
  // BEGIN
console.log(content);
const dataContent = {}

dataContent.arr = content.trim().split('\n').slice(1).map(item => item.split(','))
dataContent.count = dataContent.arr.length
dataContent.cities = Array.from(new Set(dataContent.arr.map(item => item[7]))).join(', ')
dataContent.humidity = {
  min: Math.min(...dataContent.arr.map(item => item[3])),
  max: Math.max(...dataContent.arr.map(item => item[3])),
}

const maxTemperture = Math.max(...dataContent.arr.map(item => item[1]));
const HottestDay = dataContent.arr.filter((item) => item[1] == maxTemperture)[0]
dataContent.HottestDay = HottestDay[0] + ' ' + HottestDay[7]

console.log(dataContent)
  // END
}