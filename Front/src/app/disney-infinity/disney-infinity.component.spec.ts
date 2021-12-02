import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyInfinityComponent } from './disney-infinity.component';

describe('DisneyInfinityComponent', () => {
  let component: DisneyInfinityComponent;
  let fixture: ComponentFixture<DisneyInfinityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisneyInfinityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyInfinityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
