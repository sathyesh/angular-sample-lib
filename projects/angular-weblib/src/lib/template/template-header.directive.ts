import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: 'header[TemplateHeaderDirective]'
})
export class TemplateHeaderDirective {

    constructor(private elementRef: ElementRef) { }

    getElementRef() {
        return this.elementRef;
    }
}
