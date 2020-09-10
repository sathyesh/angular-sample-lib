import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iav-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {

  @Input() value: any;

  private chartLastId: number;

  ngOnInit(): void {
    this.value = this.value ? this.value : {};
  }

  toggle(newChart: boolean) {
    if (newChart) {
      this.chartLastId = this.value.id ? this.value.id : 0;
      this.value.id = 0;
    } else {
      this.value.id = this.chartLastId;
    }
  }
}
