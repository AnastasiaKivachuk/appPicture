import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { MainComponent } from './components/main/main.component';
import { ServiceService } from './service/service.service';
import { ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducers/base64.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      base64: reducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 5}),
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
