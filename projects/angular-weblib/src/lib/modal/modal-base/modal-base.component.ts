import { AfterViewInit, Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'iav-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.css']
})
export class ModalBaseComponent implements AfterViewInit {

  // private type: string; // Commmented because it never used

  @Input() title = 'Default Title';
  @Input() content: any = null;
  @Input() value: any = null;
  oldValue: any = null;

  constructor(private activeModal: NgbActiveModal) { }

  ngAfterViewInit(): void {
    this.oldValue = Object.assign({}, this.value);
  }

  close() {
    this.value = this.oldValue;
    this.activeModal.dismiss(this.value ? this.value : this.content ? this.content : 'Cancel');
  }

  save() {
    this.activeModal.close(this.value ? this.value : this.content ? this.content : 'Save');
  }

}
