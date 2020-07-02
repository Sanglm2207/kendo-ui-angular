import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MenuModule } from '@progress/kendo-angular-menu';
import { PopupModule } from '@progress/kendo-angular-popup';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        InputsModule,
        FormsModule,
        MenuModule,
        PopupModule,
        GridModule,
        PDFModule,
        HttpClientModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
