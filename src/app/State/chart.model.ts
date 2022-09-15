import { ID, guid } from '@datorama/akita';

export interface Chart {
  id: ID;
  name: any;
  type: any;
  data:any;
  color: any;
}

// export function createChart(title: string) {
//   return {
//     id: guid(),
//     title,
//   } as Chart;
// }

