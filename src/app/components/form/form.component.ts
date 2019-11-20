import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ServiceService} from '../../service/service.service';

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

  constructor(public service: ServiceService) {

  }

  submit() {
    console.log(this.someInput.nativeElement.files[0]);

    this.file = this.someInput.nativeElement.files[0];
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.file);
    this.reader.onload = () => {
      this.base64 = this.reader.result;
      this.service.setData(this.base64);
      this.service.openMain();
    };

  }
}
