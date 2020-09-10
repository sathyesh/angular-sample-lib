import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTemplateComponent } from './global-template.component';
import { SharedModule } from '../../shared/shared.module';
import { ChartDesignerModule } from '../../../chart-designer/chart-designer.module';
import { ChartOverviewModule } from '../../../chart-overview/chart-overview.module';

describe('GlobalTemplateComponent', () => {
  let component: GlobalTemplateComponent;
  let fixture: ComponentFixture<GlobalTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ChartDesignerModule,
        ChartOverviewModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
