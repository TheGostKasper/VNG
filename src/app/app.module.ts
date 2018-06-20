import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { EditDeptComponent } from './edit-dept/edit-dept.component';
import { ListDeptComponent } from './list-dept/list-dept.component';
import { DeptService } from './service/dept.service';
@NgModule({
  declarations: [
    AppComponent,
    EditDeptComponent,
    ListDeptComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DeptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
