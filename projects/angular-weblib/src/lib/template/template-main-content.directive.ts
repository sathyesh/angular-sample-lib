import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[TemplateMainContentDirective]'
})
export class TemplateMainContentDirective {

  public window: Window;

  constructor(public templateRef: TemplateRef<any>) {
    this.window = window;
  }
}
