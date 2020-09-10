import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalShareComponent } from './modal-share.component';


describe('ModalShareComponent', () => {
  let component: ModalShareComponent;
  let fixture: ComponentFixture<ModalShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
