import {Component, Input, OnInit} from "@angular/core";
import * as Highcharts from "highcharts/highstock";
import * as HIndicatorsAll from "highcharts/indicators/indicators-all";
import * as HDragPanes from "highcharts/modules/drag-panes";
import * as HAnnotationsAdvanced from "highcharts/modules/annotations-advanced";
import * as HPriceIndicator from "highcharts/modules/price-indicator";
import * as HStockTools from "highcharts/modules/stock-tools";
import {DataB} from "../../data/data";


@Component({
  selector: "app-chart",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"]
})


export class ChartComponent implements OnInit {
  @Input() chart: any;


  Highcharts: typeof Highcharts = Highcharts;
 data1  = DataB;


  name1= "Value";
  chartOptions: Highcharts.Options = {

    title:
      { text: ''}
    ,

    rangeSelector: {
      selected: 2
    },
     series: [
     ]
  };

  ngOnInit(): void {
    this.chartOptions.title = { text: this.chart.name },
    this.chartOptions.series = [
      {
             type: this.chart.type,
           data: this.chart.data,
        color: this.chart.color
      }
    ]
  }

}


