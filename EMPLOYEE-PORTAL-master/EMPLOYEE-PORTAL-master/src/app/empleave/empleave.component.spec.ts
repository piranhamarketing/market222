import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleaveComponent } from './empleave.component';

describe('EmpleaveComponent', () => {
  let component: EmpleaveComponent;
  let fixture: ComponentFixture<EmpleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
