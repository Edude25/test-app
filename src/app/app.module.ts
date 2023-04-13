import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayFieldComponent } from './day-field/day-field.component';
import { MonthFieldComponent } from './month-field/month-field.component';
import { YearFieldComponent } from './year-field/year-field.component';

@NgModule({
  declarations: [
    AppComponent,
    YearFieldComponent,
    MonthFieldComponent,
    DayFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
