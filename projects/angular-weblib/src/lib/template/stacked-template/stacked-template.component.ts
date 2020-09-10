import { Component, Input, OnInit, QueryList } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { GlobalTemplateSizeService } from '../global-template-size.service';
import { TemplateContentDirective } from '../template-content.directive';
import { TemplateMainContentDirective } from '../template-main-content.directive';

@Component({
  selector: 'app-stacked-template',
  templateUrl: './stacked-template.component.html',
  styleUrls: ['./stacked-template.component.css']
})
export class StackedTemplateComponent implements OnInit {

  @Input() public contentTpls: QueryList<TemplateContentDirective>;
  @Input() public contentMainTpl: TemplateMainContentDirective;

  public activeIds: string[] = [];

  constructor(private globalTemplateSize: GlobalTemplateSizeService) { }

  ngOnInit() {
    if (this.contentTpls) {
      this.setActiveIds();
      this.contentTpls.changes.subscribe(() => this.setActiveIds());
    }
  }

  private setActiveIds() {
    if (this.contentTpls) {
      this.activeIds = [];
      this.contentTpls.forEach(tpl => { if (tpl.opened) { this.activeIds.push(tpl.title); } });
    }
  }

  public toggle(event: NgbPanelChangeEvent) {
    if (this.contentTpls) {
      this.contentTpls.forEach(tpl => { if (tpl.title === event.panelId) { tpl.toggle.emit(tpl.opened); } });
    }
  }
}
