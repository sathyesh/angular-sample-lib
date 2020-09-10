import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'iav-modal-share',
  templateUrl: './modal-share.component.html',
  styleUrls: ['./modal-share.component.css']
})
export class ModalShareComponent implements OnInit {

  public clipboard_copied = false;
  public mail_opened = false;
  public window_opened = false;

  @Input() value: any;
  public userGroups: string[];
  public url: string;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.value = this.value ? this.value : {};
    this.userGroups = this.value.userGroups ? this.value.userGroups : [];
    this.url = window.location.origin + window.location.pathname + '#/designer/' + (this.value.id ? this.value.id : 0) + '/Show';
  }

  public change(type: string, value: any) {
    switch (type) {

      case 'noshare':
        this.value.group = '';
        this.value.public = false;
        break;

      case 'group':
        this.value.group = value;
        this.value.public = false;
        break;

      case 'public':
        this.value.group = '';
        this.value.public = value;
        break;
    }
  }

  public changePublic(chartPublic: boolean) {
    this.value.public = chartPublic;
  }

  public openMailto() {
    const name = encodeURIComponent('"' + this.value.name + '"');
    const subject = this.translateService.instant('APP.DIALOG.MODAL.share_mail_subject',
      { prefix: this.translateService.instant('APP.COMPONENT.title'), name: name });
    const body = this.translateService.instant('APP.DIALOG.MODAL.share_mail_body', { name: name, url: encodeURIComponent(this.url) });
    location.href = 'mailto:?subject=' + subject + '&body=' + body;
    this.mail_opened = true;
  }

  public openUrl() {
    window.open(this.url, '_blank');
    this.window_opened = true;
  }
}
