import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule,  } from 'angular-calendar';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { NoticeComponent } from './notice/notice.component';
import { CustomersComponent } from './customers/customers.component';
import { NoticeDetailComponent } from './notice/notice-detail/notice-detail.component';
import { CustomersDetailComponent } from './customers/customers-detail/customers-detail.component';

@NgModule({
    imports: [
    FilterPipeModule,
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    LoginComponent,
    FooterComponent,
    NoticeComponent,
    CustomersComponent,
    NoticeDetailComponent,
    CustomersDetailComponent,
  ],
  exports: [
    LoginComponent,
    FooterComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
