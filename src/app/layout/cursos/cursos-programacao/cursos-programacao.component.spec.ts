import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosProgramacaoComponent } from './cursos-programacao.component';

describe('CursosProgramacaoComponent', () => {
  let component: CursosProgramacaoComponent;
  let fixture: ComponentFixture<CursosProgramacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosProgramacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosProgramacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
