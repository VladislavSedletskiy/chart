import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { ChartQuery } from 'src/app/State/chart.query';
import { ChartService } from 'src/app/State/chart.service';
import {Chart} from "../../State/chart.model";
import {ModalService} from "../../serviceModal/modal.service";
import {guid} from "@datorama/akita";
import {getRandomData} from "../../data/data";


@Component({
  selector: 'app-add-chart',
  templateUrl: './add-chart.component.html',
  styleUrls: ['./add-chart.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class AddChartComponent implements OnInit {
  arr: Chart[] = [];

  form = new FormGroup({
    name: new FormControl<any>('', [Validators.required]),
    type: new FormControl<any>('', [Validators.required]),
    color: new FormControl<any>('', [Validators.required])
  })

  charts : any;
  constructor(
    public modalService: ModalService,
    public chartQuery: ChartQuery,
    public chartService: ChartService
  ) {

  }

  ngOnInit(): void {

    this.chartQuery.items$.subscribe((x:any) => {
      this.arr = x
    });

    this.chartQuery.items$.subscribe((x:any) => {
      this.charts = x
    });
  }
  submit() {

    const form = this.form.value;
    const data: Chart = {
      id: guid(),
      name: form.name,
      type: form.type,
      data: getRandomData(new Date('2020-01-01'), new Date('2021-02-01')),
      color: form.color,

    };

    this.chartService.add(data);

    this.form.get('name')?.setValue('');
    this.form.get('type')?.setValue('');
    this.form.get('color')?.setValue('');

  }
}
