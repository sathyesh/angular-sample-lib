import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// External Modules
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';

import { ModalBaseComponent } from './modal-base/modal-base.component';
import { ModalDeleteDiagramComponent } from './modal-delete-diagram/modal-delete-diagram.component';
import { ModalDeleteFilterComponent } from './modal-delete-filter/modal-delete-filter.component';
import { ModalRenameComponent } from './modal-rename/modal-rename.component';
import { ModalSaveComponent } from './modal-save/modal-save.component';
import { ModalShareComponent } from './modal-share/modal-share.component';
import { ModalUpdateComponent } from './modal-update/modal-update.component';


@NgModule({
  imports: [
    CommonModule,
    ClipboardModule,
    NgbModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ModalBaseComponent,
    ModalRenameComponent,
    ModalShareComponent,
    ModalUpdateComponent,
    ModalSaveComponent,
    ModalDeleteDiagramComponent,
    ModalDeleteFilterComponent
  ],
  entryComponents: [
    ModalBaseComponent
  ],
  exports: [
    ModalBaseComponent
  ],
  providers: []
})
export class ModalModule { }
