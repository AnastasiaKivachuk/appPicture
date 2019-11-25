import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ServiceService} from '../../service/service.service';

import * as  Base64Action from '../../store/action/base62.action';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Base64} from '../../models/base64.model';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('someInput', {static: false}) someInput: ElementRef;
  private file: {};
  private reader: any;

  private base64: string;

  constructor(public service: ServiceService,
              private store: Store<AppState>
  ) {
  }

  submit() {
    this.file = this.someInput.nativeElement.files[0];
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.file);
    this.reader.onload = () => {
      this.base64 = this.reader.result;
      this.store.dispatch(new Base64Action.AddString(this.reader.result));
      this.service.openMain();
    };

  }
}
