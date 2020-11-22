import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePipeTestComponent } from './date-pipe-test.component';

describe('DatePipeTestComponent', () => {
  let component: DatePipeTestComponent;
  let fixture: ComponentFixture<DatePipeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePipeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePipeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
