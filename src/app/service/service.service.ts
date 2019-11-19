import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
public data: string;
  constructor(public router: Router) { }

  openForm() {
    this.router.navigate([`/form`]);
  }
  openMain() {
    this.router.navigate([`/main`]);
  }

  myMethod(data) {
    console.log(111);
    console.log(data);
    // this.myMethodSubject.next(data);
  }
}
