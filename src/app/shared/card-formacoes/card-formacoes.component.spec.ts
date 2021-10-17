import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormacoesComponent } from './card-formacoes.component';

describe('CardFormacoesComponent', () => {
  let component: CardFormacoesComponent;
  let fixture: ComponentFixture<CardFormacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
