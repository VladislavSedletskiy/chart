import {getRandomData} from "./data";
export const charts = [
  {
    title: "Name chart",
    data: getRandomData(new Date('2020-01-01'), new Date('2021-02-01')),
    type: 'line',
    color: "#e79a9a",
  },
  {
    title: "Name chart",
    data: getRandomData(new Date('2020-01-01'), new Date('2021-02-01')),
    type: 'area',
    color: "#ffd",
  }
]
