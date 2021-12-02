import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekENerdComponent } from './geek-e-nerd.component';

describe('GeekENerdComponent', () => {
  let component: GeekENerdComponent;
  let fixture: ComponentFixture<GeekENerdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekENerdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeekENerdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
