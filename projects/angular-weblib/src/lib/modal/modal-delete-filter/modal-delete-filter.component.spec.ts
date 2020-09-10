import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDeleteFilterComponent } from './modal-delete-filter.component';


describe('ModalDeleteFilterComponent', () => {
  let component: ModalDeleteFilterComponent;
  let fixture: ComponentFixture<ModalDeleteFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
