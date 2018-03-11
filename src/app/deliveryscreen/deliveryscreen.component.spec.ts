import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryscreenComponent } from './deliveryscreen.component';

describe('DeliveryscreenComponent', () => {
  let component: DeliveryscreenComponent;
  let fixture: ComponentFixture<DeliveryscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
