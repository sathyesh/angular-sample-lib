import { EventEmitter, Injectable, QueryList } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { TemplateConfigService } from './template-config.service';
import { TemplateContentDirective } from './template-content.directive';
import { TemplateMainContentDirective } from './template-main-content.directive';


@Injectable({ providedIn: 'root' })
export class GlobalTemplateSizeService {

  private contentTpls: QueryList<TemplateContentDirective>;
  private contentMainTpl: TemplateMainContentDirective;

  private readonly PADDING_WIDTH: number = 10;
  private readonly PADDING_HEIGHT: number = 10;

  public onResize: EventEmitter<any> = new EventEmitter<any>();

  constructor(private templateConfig: TemplateConfigService) {
    templateConfig.resize.pipe(debounceTime(200)).subscribe(() => this.onResize.emit());
  }

  public setTemplateChildren(contentTpls: QueryList<TemplateContentDirective>, contentMainTpl: TemplateMainContentDirective) {

    this.contentTpls = contentTpls;
    this.contentMainTpl = contentMainTpl;
    this.onResize.emit();
  }

  private calculateSidebarWidth(): number {
    let width = 0;

    if (this.contentTpls) {

      this.contentTpls.forEach(tpl => {
        if (tpl.opened) {
          switch (tpl.position) {
            case 'left':
            case 'right':
              width += tpl.width + tpl.widthDock;
              break;
          }
        } else {
          switch (tpl.position) {
            case 'left':
            case 'right':
              width += tpl.widthDock;
              break;
          }
        }
      });
    }

    return width;
  }

  private calculateSidebarHeight(): number {
    let height = 0;

    if (this.contentTpls) {

      this.contentTpls.forEach(tpl => {
        if (tpl.opened) {
          switch (tpl.position) {
            case 'top':
            case 'bottom':
              height += tpl.width + tpl.widthDock;
              break;
          }
        } else {
          switch (tpl.position) {
            case 'top':
            case 'bottom':
              height += tpl.widthDock;
              break;
          }
        }
      });
    }

    return height;
  }

  public getWidthForMainArea(): number {
    let width = 0;
    if (this.contentMainTpl) {
      if (this.templateConfig.isMobileDesign) {
        width = this.contentMainTpl.window.innerWidth - 2 * this.PADDING_WIDTH;
      } else {
        width = this.contentMainTpl.window.innerWidth - this.calculateSidebarWidth();
      }
    }
    return width;
  }

  public getHeightForMainArea(): number {
    let height = 0;
    if (this.contentMainTpl) {
      if (this.templateConfig.isMobileDesign) {
        height = this.contentMainTpl.window.innerHeight;
      } else {
        height = this.contentMainTpl.window.innerHeight
          - this.templateConfig.getGlobalNavigationContainer().nativeElement.getBoundingClientRect().height
          - this.calculateSidebarHeight() - this.PADDING_HEIGHT;
      }
    }
    return height;
  }

}
