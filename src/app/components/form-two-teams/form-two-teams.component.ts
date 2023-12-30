import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-two-teams',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-two-teams.component.html',
  styleUrl: './form-two-teams.component.scss'
})
export class FormTwoTeamsComponent {

  constructor(private fb: FormBuilder) { }

  teamForm = this.fb.group({
    name1: ['', Validators.required],
    score1: [0],
    name2: ['', Validators.required],
    score2: [0]
  });

  get name1() {
    return this.teamForm.get('name1');
  }

  get name2() {
    return this.teamForm.get('name2');
  }

  onSubmit() {
    if (this.teamForm.invalid) {
      this.teamForm.markAllAsTouched();
      return;
    }else{
      console.log(this.teamForm.value);
    }
  }
}
