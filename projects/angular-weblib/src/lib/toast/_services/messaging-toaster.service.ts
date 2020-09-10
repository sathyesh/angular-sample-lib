import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessagingToasterService {

  constructor(private toaster: ToastrService) { }

  public open(title: string, content?: string, options?: any) {
    return this.openInfo(title, content, options);
  }

  public openInfo(title: string, content?: string, options?: any) {
    return this.toaster.info(content, title);
  }

  public openSuccess(title: string, content?: string, options?: any) {
    return this.toaster.success(content, title);
  }

  public openError(title: string, content?: string, options?: any) {
    return this.toaster.error(content, title);
  }

  public openWarning(title: string, content?: string, options?: any) {
    return this.toaster.warning(content, title);
  }
}
