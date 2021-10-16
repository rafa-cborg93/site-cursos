import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaForumComponent } from './tabela-forum.component';

describe('TabelaForumComponent', () => {
  let component: TabelaForumComponent;
  let fixture: ComponentFixture<TabelaForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
