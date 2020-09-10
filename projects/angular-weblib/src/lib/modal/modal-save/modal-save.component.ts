import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iav-modal-save',
  templateUrl: './modal-save.component.html',
  styleUrls: ['./modal-save.component.css']
})
export class ModalSaveComponent implements OnInit {

  @Input() value: any;

  ngOnInit(): void {
    this.value = this.value ? this.value : {};
  }

}
