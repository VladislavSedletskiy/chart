import {guid, ID} from '@datorama/akita';
import {ChartStore} from "./chart.store";
import {Chart} from "./chart.model";
import {Injectable} from "@angular/core";
import {getRandomData} from "../data/data";

@Injectable({ providedIn: 'root' })
export class ChartService {

  constructor(
    private chartStore: ChartStore
  ) { }

  addItemsToStore() {
    const arr = [
      {
        id : guid(),
        name: 'Name 1',
        type: 'line',
        date: getRandomData(new Date('2020-01-01'), new Date('2021-02-01')),
        color: '#e79a9a'
      }
    ];

    this.chartStore.upsertMany(arr);
  }

  add(item: Chart) {
    this.chartStore.add(item);
  }

  delete(id) {
    this.chartStore.remove(id);
  }


}
