import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    StaffDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
