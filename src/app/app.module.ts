import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CirrusComponent } from './cirrus/cirrus.component';
import { NatoursComponent } from './natours/natours.component';

@NgModule({
  declarations: [
    AppComponent,
    CirrusComponent,
    NatoursComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
