import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedTemplateComponent } from './stacked-template.component';


describe('StackedTemplateComponent', () => {
  let component: StackedTemplateComponent;
  let fixture: ComponentFixture<StackedTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
