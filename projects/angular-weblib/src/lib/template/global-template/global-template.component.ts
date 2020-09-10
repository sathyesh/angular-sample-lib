import { AfterContentInit, Component, ContentChild, ContentChildren, QueryList } from '@angular/core';

import { GlobalTemplateSizeService } from '../global-template-size.service';
import { TemplateContentDirective } from '../template-content.directive';
import { TemplateMainContentDirective } from '../template-main-content.directive';
import { TemplateConfigService } from '../template-config.service';

@Component({
  selector: 'global-template',
  templateUrl: './global-template.component.html',
  styleUrls: ['./global-template.component.css']
})
export class GlobalTemplateComponent implements AfterContentInit {


  @ContentChildren(TemplateContentDirective) contentTpls: QueryList<TemplateContentDirective>;
  @ContentChild(TemplateMainContentDirective) contentMainTpl: TemplateMainContentDirective;


  constructor(private globalTemplateSize: GlobalTemplateSizeService, public templateConfigService: TemplateConfigService) { }

  ngAfterContentInit() {
    this.globalTemplateSize.setTemplateChildren(this.contentTpls, this.contentMainTpl);
  }

}
