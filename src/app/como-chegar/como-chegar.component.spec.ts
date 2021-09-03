import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoChegarComponent } from './como-chegar.component';

describe('ComoChegarComponent', () => {
  let component: ComoChegarComponent;
  let fixture: ComponentFixture<ComoChegarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoChegarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoChegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
