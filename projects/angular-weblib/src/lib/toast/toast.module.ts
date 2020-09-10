import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    ToastrModule.forRoot({
      timeOut: 30000,
      extendedTimeOut: 500,
      closeButton: true,
      progressBar: true,
      preventDuplicates: true
    }),
    BrowserAnimationsModule
  ],
  declarations: [],
})
export class ToastModule { }
