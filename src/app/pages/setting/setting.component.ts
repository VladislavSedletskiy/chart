import {Component, Injectable, OnInit} from '@angular/core';
import {charts as datacharts} from "../../data/charts";
import {ModalService} from "../../serviceModal/modal.service";
import {Chart} from "../../State/chart.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChartQuery} from "../../State/chart.query";
import {ChartService} from "../../State/chart.service";
import {guid} from "@datorama/akita";
import {getRandomData} from "../../data/data";
import {ModalServiceUpdate} from "../../serviceModal/modalupdate.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class SettingComponent implements OnInit {
  charts : any;
  constructor(
     public modalService: ModalService,
   public ModalServiceUpdate: ModalServiceUpdate,
   public chartQuery: ChartQuery,
     public chartService: ChartService
   ) { }

   ngOnInit(): void {
     this.chartQuery.items$.subscribe((x:any) => {
       this.charts = x
     });
    }

  remove(id) {
    this.chartService.delete(id);
  }
  edit(id) {
    this.chartService.delete(id);
  }

}

