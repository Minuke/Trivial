import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseNumberTeamsComponent } from './choose-number-teams.component';

describe('ChooseNumberTeamsComponent', () => {
  let component: ChooseNumberTeamsComponent;
  let fixture: ComponentFixture<ChooseNumberTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseNumberTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseNumberTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
