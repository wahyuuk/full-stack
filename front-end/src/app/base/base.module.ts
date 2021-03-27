import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BaseRoutingModule } from './base.routing.module';
import { BasicAuthInterceptorService } from './services/basic-auth-interceptor.service';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [WrapperComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorService, multi: true}
  ],
})
export class BaseModule { }
