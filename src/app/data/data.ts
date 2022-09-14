
//import {Datebd}  from "../DataInterface/datainterfase"

 const getRandomNumber  = (min, max) => {
   const rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
 }

export const getRandomData = (from, to) =>{
  const data : any[]= [];
  for (const day = from; day <= to; day.setDate(day.getDate() + 1)) {
    data.push([day.getTime(), getRandomNumber(1, 30)]);   }

   return data;
 }
export const DataB : any=
  getRandomData(new Date('2020-01-01'), new Date('2021-02-01'))
;

console.log(getRandomData(new Date('2020-01-01'), new Date('2020-02-01')))
