import { QueryEntity } from '@datorama/akita';
import {ChartStore} from "./chart.store";
import {Injectable} from "@angular/core";


@Injectable({ providedIn: 'root' })
export class ChartQuery extends QueryEntity<any> {
  items$ = this.selectAll();

  ngOnInit(): void {
  }

  constructor(protected override store: ChartStore) {
    super(store);
  }

}
