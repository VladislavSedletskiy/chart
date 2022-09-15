import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { ChartQuery } from 'src/app/State/chart.query';
import { ChartService } from 'src/app/State/chart.service';
import {Chart} from "../../State/chart.model";


@Component({
  selector: 'app-add-chart',
  templateUrl: './add-chart.component.html',
  styleUrls: ['./add-chart.component.scss']
})
export class AddChartComponent implements OnInit {

  arr: Chart[] = [];

  form = new FormGroup({
    name: new FormControl<any>('', [Validators.required]),
    type: new FormControl<any>('', [Validators.required]),
    color: new FormControl<any>('', [Validators.required])
  })

  constructor() {
  }
  // constructor( public chartQuery: ChartQuery,
  //             public chartService: ChartService) {
  // }

  ngOnInit(): void {
   // this.chartService.addItemsToStore();

    // this.chartQuery.items$.subscribe((x: Chart[]) => {
    //   this.arr = x;
    // });
  }
   submit() {
  //
  //   const form = this.form.value;
  //   const data: Chart = {
  //     name: form.name,
  //     type: form.type,
  //     color: form.color,
  //
  //   };
  //
  //   this.chartService.add(data);
  //
  //  // this.form.get('name')?.setValue('');
  //  // this.form.get('type')?.setValue('');
  // //  this.form.get('color')?.setValue('');
  //
  //   console.log(this.form.value)
  // }
  // remove(name) {
  //   this.chartService.delete(name);
  }
}
