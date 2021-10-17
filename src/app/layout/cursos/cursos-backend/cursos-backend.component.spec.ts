import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosBackendComponent } from './cursos-backend.component';

describe('CursosBackendComponent', () => {
  let component: CursosBackendComponent;
  let fixture: ComponentFixture<CursosBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosBackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
