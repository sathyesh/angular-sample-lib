import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalCallbackhandHandler } from '../_model/model-modal';
import { ModalBaseComponent } from '../modal-base/modal-base.component';

@Injectable({
  providedIn: 'root'
})
export class MessagingModalService {

  constructor(private modalService: NgbModal) { }

  private _open(content: any, options?: NgbModalOptions): NgbModalRef {
    const ref = this.modalService.open(content, options);
    return ref;
  }

  /**
   *
   * @param title
   * @param content
   */
  public openDialog(type: any, value?: any, callback?: ModalCallbackhandHandler): Promise<any> {
    const modal = this._open(ModalBaseComponent);

    modal.componentInstance.content = type;

    if (value) {
      modal.componentInstance.value = value;
    }

    if (callback) {
      modal.result.then(
        (result: any) => {
          callback(true, result);
        },
        (reason: any) => {
          callback(false, reason);
        }
      );
    }

    return modal.result;
  }

  public createDialog(content: any, options?: NgbModalOptions) {
    return this.modalService.open(content, options);
  }
}
