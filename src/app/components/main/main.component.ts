import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public obj: {} = {
    blur: {min: 0, max: 10, value: 0, sign: 'px', step: 1},
    brightness: {min: 0, max: 1, value: 1, sign: '', step: 0.1},
    contrast: {min: 0, max: 200, value: 100, sign: '%', step: 1},
    grayscale: {min: 0, max: 100, value: 0, sign: '%', step: 1},
    invert: {min: 0, max: 100, value: 0, sign: '%', step: 1},
    opacity: {min: 0, max: 100, value: 100, sign: '%', step: 1},
    saturate: {min: 0, max: 200, value: 100, sign: '%', step: 1},
    sepia: {min: 0, max: 100, value: 0, sign: '%', step: 1}
  };
  public arrMethods: string[] = [];
  public arrObj: {}[] = [];
  public str = '';
  public result: string;

  constructor(public service: ServiceService) {
  }

  ngOnInit() {
    this.arrMethods = Object.keys(this.obj);
    Object.keys(this.obj).forEach((key) => {
      this.arrObj.push(this.obj[key]);
    });


    this.result = this.service.getData();
  }

  openForm() {
    this.service.openForm();
  }

  getValue(i) {
    let res;
    Object.keys(this.arrObj[i]).forEach((key) => {
      if (key === 'value') {
        res = this.arrObj[i][key];
      }
    });
    return res;
  }

  getMin(i) {
    let res;
    Object.keys(this.arrObj[i]).forEach((key) => {
      if (key === 'min') {
        res = this.arrObj[i][key];
      }
    });
    return res;
  }

  getMax(i) {
    let res;
    Object.keys(this.arrObj[i]).forEach((key) => {
      if (key === 'max') {
        res = this.arrObj[i][key];
      }
    });
    return res;
  }

  getStep(i) {
    let res;
    Object.keys(this.arrObj[i]).forEach((key) => {
      if (key === 'step') {
        res = this.arrObj[i][key];
      }
    });
    return res;
  }

  getSign(i) {
    let res;
    Object.keys(this.arrObj[i]).forEach((key) => {
      if (key === 'sign') {
        res = this.arrObj[i][key];
      }
    });
    return res;
  }

  takeEventTarget(event, i) {
    Object.keys(this.arrObj[i]).forEach((key) => {
      if (key === 'value') {
        this.arrObj[i][key] = event.target.value;
      }
    });
  }

  changeStyle() {
    this.str = Object.keys(this.obj).map((key) => `${key}(${this.obj[key].value}${this.obj[key].sign})`).join(' ');
    console.log(this.str);
    return this.str;
  }
}
