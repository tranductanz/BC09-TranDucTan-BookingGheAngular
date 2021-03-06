import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { EditDSgheComponent } from './edit-dsghe/edit-dsghe.component';



@NgModule({
  declarations: [
    GheComponent,
    DanhSachGheComponent,
    EditDSgheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GheComponent,
    DanhSachGheComponent,
    EditDSgheComponent
  ]
})
export class QuanTriGheModule { }
