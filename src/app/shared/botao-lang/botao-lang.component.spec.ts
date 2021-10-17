import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoLangComponent } from './botao-lang.component';

describe('BotaoLangComponent', () => {
  let component: BotaoLangComponent;
  let fixture: ComponentFixture<BotaoLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoLangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
