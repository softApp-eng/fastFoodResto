import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumModalComponent } from './hum-modal.component';

describe('HumModalComponent', () => {
  let component: HumModalComponent;
  let fixture: ComponentFixture<HumModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
