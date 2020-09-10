import { Component, Input, QueryList } from '@angular/core';

import { TemplateConfigService } from '../template-config.service';
import { GlobalTemplateSizeService } from '../global-template-size.service';
import { TemplateContentDirective } from '../template-content.directive';
import { TemplateMainContentDirective } from '../template-main-content.directive';

@Component({
  selector: 'app-no-stacked-template',
  templateUrl: './no-stacked-template.component.html',
  styleUrls: ['./no-stacked-template.component.css']
})
export class NoStackedTemplateComponent {

  @Input() public contentTpls: QueryList<TemplateContentDirective>;
  @Input() public contentMainTpl: TemplateMainContentDirective;

  constructor(private templateConfig: TemplateConfigService, public globalTemplateSize: GlobalTemplateSizeService) { }

  public getHeight() {
    if (this.templateConfig.getGlobalNavigationContainer() && this.templateConfig.getGlobalNavigationContainer().nativeElement) {
      return window.innerHeight - this.templateConfig.getGlobalNavigationContainer().nativeElement.getBoundingClientRect().height;
    }
    return 0;
  }

  public getWidth() {
    return window.innerWidth;
  }

  public getPanelIcon(icon: boolean) {
    return icon ? 'minus' : 'plus';
  }

  public toggle(contentTpl: TemplateContentDirective) {
    contentTpl.toggle.emit(contentTpl.opened);
  }

  public repaint() {
    this.globalTemplateSize.onResize.emit();
  }
}
