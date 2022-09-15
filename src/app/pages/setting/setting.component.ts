import {Component, Injectable, OnInit} from '@angular/core';
import {charts as datacharts} from "../../data/charts";
import {ModalService} from "../../serviceModal/modal.service";
import {Chart} from "../../State/chart.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChartQuery} from "../../State/chart.query";
import {ChartService} from "../../State/chart.service";
import {guid} from "@datorama/akita";
import {getRandomData} from "../../data/data";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class SettingComponent implements OnInit {

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
   // this.charts = datacharts
    // this.chartService.addItemsToStore();

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
  remove(id) {
    this.chartService.delete(id);
  }

}

