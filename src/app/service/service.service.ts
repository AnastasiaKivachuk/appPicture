import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public router: Router) { }

  openForm() {
    this.router.navigate([`/form`]);
  }
  openMain() {
    this.router.navigate([`/main`]);
  }
}
