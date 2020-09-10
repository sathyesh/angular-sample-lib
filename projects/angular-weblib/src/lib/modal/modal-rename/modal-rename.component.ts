import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iav-modal-rename',
  templateUrl: './modal-rename.component.html',
  styleUrls: ['./modal-rename.component.css']
})
export class ModalRenameComponent implements OnInit {

  @Input() value: any;

  ngOnInit(): void {
    this.value = this.value ? this.value : {};
  }

}
