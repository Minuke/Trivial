import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwoTeamsComponent } from './form-two-teams.component';

describe('FormTwoTeamsComponent', () => {
  let component: FormTwoTeamsComponent;
  let fixture: ComponentFixture<FormTwoTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTwoTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTwoTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
