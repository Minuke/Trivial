import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFourTeamsComponent } from './form-four-teams.component';

describe('FormFourTeamsComponent', () => {
  let component: FormFourTeamsComponent;
  let fixture: ComponentFixture<FormFourTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFourTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFourTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
