import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormDynamicComponent } from './new-form-dynamic.component';

describe('NewFormDynamicComponent', () => {
  let component: NewFormDynamicComponent;
  let fixture: ComponentFixture<NewFormDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
