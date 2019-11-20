import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
public data: string;
  constructor(public router: Router) { }

  setData(value) {
    console.log('wwwwww');
    console.log(value);
    this.data = value;
  }

  getData() {
    return this.data;
  }

  openForm() {
    this.router.navigate([`/form`]);
  }
  openMain() {
    this.router.navigate([`/main`]);
  }

  // myMethod(data) {
  //   console.log(111);
  //   console.log(data);
  //   // this.myMethodSubject.next(data);
  // }
}
