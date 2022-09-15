import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Chart } from './chart.model';
import {Injectable} from "@angular/core";

export interface ChartState extends EntityState { }

export interface TestState {
  key: string;
}

export function createInitialState(): TestState {
  return {
    key: '',
  };
}

@Injectable({ providedIn: 'root' })

@StoreConfig({
  name: 'charts'
})
export class ChartStore extends EntityStore {
  constructor() {
    super(createInitialState());
  }
}
