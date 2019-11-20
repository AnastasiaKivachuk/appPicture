import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public obj: {
    blur: {}, brightness: {}, contrast: {}, grayscale: {}, invert: {}, opacity: {}, saturate: {}, sepia: {}
  } = {
    blur: {min: 0, max: 10, value: 0, sign: 'px', step: 1},
    brightness: {min: 0, max: 1, value: 1, sign: '', step: 0.1},
    contrast: {min: 0, max: 200, value: 100, sign: '%', step: 1},
    grayscale: {min: 0, max: 100, value: 0, sign: '%', step: 1},
    invert: {min: 0, max: 100, value: 0, sign: '%', step: 1},
    opacity: {min: 0, max: 100, value: 100, sign: '%', step: 1},
    saturate: {min: 0, max: 200, value: 100, sign: '%', step: 1},
    sepia: {min: 0, max: 100, value: 0, sign: '%', step: 1}
  };
  public str = '';
  public result: string;
  public objectKeys = Object.keys;

  constructor(public service: ServiceService) {
  }

  ngOnInit() {
    this.result = this.service.getData();
  }

  openForm() {
    this.service.openForm();
  }


  takeEventTarget(event, key) {
    this.obj[key].value = event.target.value;

  }

  changeStyle() {
    this.str = Object.keys(this.obj).map((key) => `${key}(${this.obj[key].value}${this.obj[key].sign})`).join(' ');
    return this.str;
  }
}
