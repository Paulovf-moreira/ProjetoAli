import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicosComponent } from './classicos.component';

describe('ClassicosComponent', () => {
  let component: ClassicosComponent;
  let fixture: ComponentFixture<ClassicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
