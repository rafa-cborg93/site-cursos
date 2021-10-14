import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDashboardComponent } from './cursos-dashboard.component';

describe('CursosDashboardComponent', () => {
  let component: CursosDashboardComponent;
  let fixture: ComponentFixture<CursosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
