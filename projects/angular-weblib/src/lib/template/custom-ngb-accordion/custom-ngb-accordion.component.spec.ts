import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNgbAccordionComponent } from './custom-ngb-accordion.component';

describe('CustomNgbAccordionComponent', () => {
  let component: CustomNgbAccordionComponent;
  let fixture: ComponentFixture<CustomNgbAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomNgbAccordionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNgbAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
