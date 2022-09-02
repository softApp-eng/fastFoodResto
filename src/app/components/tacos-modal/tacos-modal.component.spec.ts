import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosModalComponent } from './tacos-modal.component';

describe('TacosModalComponent', () => {
  let component: TacosModalComponent;
  let fixture: ComponentFixture<TacosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacosModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
