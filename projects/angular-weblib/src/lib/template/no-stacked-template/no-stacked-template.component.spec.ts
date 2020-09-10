import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoStackedTemplateComponent } from './no-stacked-template.component';


describe('NoStackedTemplateComponent', () => {
  let component: NoStackedTemplateComponent;
  let fixture: ComponentFixture<NoStackedTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoStackedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
