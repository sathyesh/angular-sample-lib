import { Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[TemplateContent]'
})
export class TemplateContentDirective {

  @Input() public title: string;

  @Input() public opened = false;

  @Input() public position = 'left';

  @Output() public toggle: EventEmitter<boolean> = new EventEmitter();

  @Input() public width = 350;

  public readonly widthDock: number = 50;

  constructor(public templateRef: TemplateRef<any>) { }
}
