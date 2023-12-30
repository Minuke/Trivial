import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseNameTeamsComponent } from './choose-name-teams.component';

describe('ChooseNameTeamsComponent', () => {
  let component: ChooseNameTeamsComponent;
  let fixture: ComponentFixture<ChooseNameTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseNameTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseNameTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
