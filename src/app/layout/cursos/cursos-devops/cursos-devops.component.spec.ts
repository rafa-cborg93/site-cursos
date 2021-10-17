import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDevopsComponent } from './cursos-devops.component';

describe('CursosDevopsComponent', () => {
  let component: CursosDevopsComponent;
  let fixture: ComponentFixture<CursosDevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDevopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
