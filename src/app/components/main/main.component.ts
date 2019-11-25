import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {ObjClass} from '../../service/objClass';
import {Obj} from '../../service/objClass';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Base64} from '../../models/base64.model';
import { AppState} from '../../store/app.state';
import * as Base64Action from '../../store/action/base62.action';
import {getString} from '../../store/selector/base64.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public obj: Obj = {
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
  private base64: Observable<string>;
  // public result: string;
  public objectKeys = Object.keys;

  constructor(public service: ServiceService,
              private store: Store<AppState>) {
    this.base64 =  store.select( getString);

  }

  ngOnInit() {
  }

  changeObjValue(arr) {
    this.obj.blur.value = arr[0];
    this.obj.brightness.value = arr[1];
    this.obj.contrast.value = arr[2];
    this.obj.grayscale.value = arr[3];
    this.obj.invert.value = arr[4];
    this.obj.opacity.value = arr[5];
    this.obj.saturate.value = arr[6];
    this.obj.sepia.value = arr[7];

  }

  makeLikeImg(variant) {
    switch (variant) {
      case 1:
        this.changeObjValue([0, 0.7, 40, 20, 20, 100, 40, 20]);
        break;
      case 2:
        this.changeObjValue([1, 0.7, 80, 40, 100, 100, 40, 40]);
        break;
      case 3:
        this.changeObjValue([2, 0.7, 120, 60, 60, 100, 120, 60]);
        break;
      case 4:
        this.changeObjValue([3, 0.7, 160, 40, 80, 100, 160, 80]);
        break;
      default:
        this.changeObjValue([0, 1, 100, 0, 0, 100, 100, 0]);
    }
  }

  openForm() {
    this.store.dispatch(new Base64Action.AddString(''));
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
