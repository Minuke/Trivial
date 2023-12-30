import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThreeTeamsComponent } from './form-three-teams.component';

describe('FormThreeTeamsComponent', () => {
  let component: FormThreeTeamsComponent;
  let fixture: ComponentFixture<FormThreeTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormThreeTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormThreeTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
