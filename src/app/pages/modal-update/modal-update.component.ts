import { Component, OnInit } from '@angular/core';
import {ModalServiceUpdate} from "../../serviceModal/modalupdate.service";

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss']
})
export class ModalUpdateComponent  {

  constructor(public ModalServiceUpdate: ModalServiceUpdate) { }


}
