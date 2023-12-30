import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-three-teams',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-three-teams.component.html',
  styleUrl: './form-three-teams.component.scss'
})
export class FormThreeTeamsComponent {

  constructor(private fb: FormBuilder) { }

  teamForm = this.fb.group({
    name1: ['', Validators.required],
    score1: [0],
    name2: ['', Validators.required],
    score2: [0],
    name3: ['', Validators.required],
    score3: [0]

  });

  get name1() {
    return this.teamForm.get('name1');
  }

  get name2() {
    return this.teamForm.get('name2');
  }

  get name3() {
    return this.teamForm.get('name3');
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
