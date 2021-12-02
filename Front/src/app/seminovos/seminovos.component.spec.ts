import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminovosComponent } from './seminovos.component';

describe('SeminovosComponent', () => {
  let component: SeminovosComponent;
  let fixture: ComponentFixture<SeminovosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminovosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminovosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
