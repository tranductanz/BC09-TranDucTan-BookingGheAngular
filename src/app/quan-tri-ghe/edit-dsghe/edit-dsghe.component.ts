import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';

@Component({
  selector: 'app-edit-dsghe',
  templateUrl: './edit-dsghe.component.html',
  styleUrls: ['./edit-dsghe.component.css']
})
export class EditDSgheComponent implements OnInit {
  @ViewChild(DanhSachGheComponent) DSgheCom: DanhSachGheComponent;
  @ViewChild('title') titleHeading: ElementRef;
  constructor() { }
  themGheParent(...thamso: any[]) {
    if (thamso[3] === false) {

    }
    let gheDuocThem = {
      TenGhe: thamso[0],
      SoGhe: thamso[1],
      Gia: thamso[2],
      TrangThai: false
    }
    if (thamso[3] === false) {
      gheDuocThem.TrangThai = false;
    }
    if (thamso[3] === true) {
      gheDuocThem.TrangThai = true;
    }
    console.log(gheDuocThem)
    this.DSgheCom.ThemGhe(gheDuocThem);
    this.titleHeading.nativeElement.innerHTML = "Đã Thêm";
  }
  ngOnInit(): void {
  }

}
