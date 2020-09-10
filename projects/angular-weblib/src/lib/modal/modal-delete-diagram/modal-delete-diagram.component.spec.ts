import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteDiagramComponent } from './modal-delete-diagram.component';

describe('ModalDeleteDiagramComponent', () => {
  let component: ModalDeleteDiagramComponent;
  let fixture: ComponentFixture<ModalDeleteDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
