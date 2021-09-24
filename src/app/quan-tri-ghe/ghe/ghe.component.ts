import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  status: boolean = false;
  @Output() emitStatus = new EventEmitter();
  @Input() itemGhe: gheItem;
  constructor() { }
  datGhe() {
    if (this.status) {
      this.status = false;
    }
    else {
      this.status = true;
    }
    this.emitStatus.emit(this.status);
  }
  ngOnInit(): void {
  }

}

interface gheItem {
  SoGhe: number,
  TenGhe: string,
  Gia: number,
  TrangThai: boolean
}
