import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoProfileComponent } from './botao-profile.component';

describe('BotaoProfileComponent', () => {
  let component: BotaoProfileComponent;
  let fixture: ComponentFixture<BotaoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
