import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iav-modal-delete-diagram',
  templateUrl: './modal-delete-diagram.component.html',
  styleUrls: ['./modal-delete-diagram.component.css']
})
export class ModalDeleteDiagramComponent implements OnInit {

  @Input() value: any;

  ngOnInit(): void {
    this.value = this.value ? this.value : {};
  }
}
