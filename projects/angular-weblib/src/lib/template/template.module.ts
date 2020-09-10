import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarModule } from 'ng-sidebar';

import { CustomNgbAccordionComponent } from './custom-ngb-accordion/custom-ngb-accordion.component';
import { GlobalTemplateComponent } from './global-template/global-template.component';
import { NoStackedTemplateComponent } from './no-stacked-template/no-stacked-template.component';
import { StackedTemplateComponent } from './stacked-template/stacked-template.component';
import { TemplateContentDirective } from './template-content.directive';
import { TemplateMainContentDirective } from './template-main-content.directive';
import { TemplateHeaderDirective } from './template-header.directive';
import { GlobalLayoutComponent } from './global-layout/global-layout.component';

const TEMPLATE_DIRECTIVES = [TemplateMainContentDirective, TemplateContentDirective, TemplateHeaderDirective];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SidebarModule.forRoot(),
    TranslateModule
  ],
  exports: [
    TEMPLATE_DIRECTIVES,
    GlobalTemplateComponent,
    GlobalLayoutComponent,
    CustomNgbAccordionComponent,
    NoStackedTemplateComponent,
    StackedTemplateComponent
  ],
  declarations: [
    TEMPLATE_DIRECTIVES,
    GlobalTemplateComponent,
    StackedTemplateComponent,
    NoStackedTemplateComponent,
    CustomNgbAccordionComponent,
    GlobalLayoutComponent,

  ]
})
export class TemplateModule { }
