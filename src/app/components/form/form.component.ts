import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public service: ServiceService) { }

  ngOnInit() {
  }
  openMain() {
    this.service.openMain();
  }
}
