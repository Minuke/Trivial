import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWinnerComponent } from './game-winner.component';

describe('GameWinnerComponent', () => {
  let component: GameWinnerComponent;
  let fixture: ComponentFixture<GameWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameWinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
