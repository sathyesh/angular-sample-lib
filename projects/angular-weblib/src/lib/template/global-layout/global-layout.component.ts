import { Component, HostListener, ElementRef, ContentChild, AfterViewInit } from '@angular/core';

import { TemplateConfigService } from '../template-config.service';
import { TemplateHeaderDirective } from '../template-header.directive';

@Component({
  selector: 'global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.css']
})
export class GlobalLayoutComponent implements AfterViewInit {

  templateHeaderDirective: any;

  @ContentChild(TemplateHeaderDirective) content: TemplateHeaderDirective;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.templateConfigService.onResize(event);
  }

  constructor(private templateConfigService: TemplateConfigService, private elt: ElementRef) {
  }

  ngAfterViewInit() {
    this.templateConfigService.setGlobalNavigationContainer(this.content.getElementRef());
  }

}
