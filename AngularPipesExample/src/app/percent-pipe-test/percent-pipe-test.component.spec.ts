import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentPipeTestComponent } from './percent-pipe-test.component';

describe('PercentPipeTestComponent', () => {
  let component: PercentPipeTestComponent;
  let fixture: ComponentFixture<PercentPipeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentPipeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentPipeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
