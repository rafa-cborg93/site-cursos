import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosFrontendComponent } from './cursos-frontend.component';

describe('CursosFrontendComponent', () => {
  let component: CursosFrontendComponent;
  let fixture: ComponentFixture<CursosFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
