import { Component, OnInit } from '@angular/core';
import { charts as datacharts} from "../../data/charts";
import {ChartQuery} from "../../State/chart.query";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  charts : any;
  constructor(
    public chartQuery: ChartQuery,
  ) { }

  ngOnInit(): void {

    this.chartQuery.items$.subscribe((x:any) => {
      this.charts = x
    });


  }

}
