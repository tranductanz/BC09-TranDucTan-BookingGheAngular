import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDSgheComponent } from './edit-dsghe.component';

describe('EditDSgheComponent', () => {
  let component: EditDSgheComponent;
  let fixture: ComponentFixture<EditDSgheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDSgheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDSgheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
