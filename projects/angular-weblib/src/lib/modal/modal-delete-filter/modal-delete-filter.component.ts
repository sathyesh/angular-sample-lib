import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iav-modal-delete-filter',
  templateUrl: './modal-delete-filter.component.html',
  styleUrls: ['./modal-delete-filter.component.css']
})
export class ModalDeleteFilterComponent implements OnInit {

  @Input() value: any;

  ngOnInit(): void {
    this.value = this.value ? this.value : {};
  }
}
