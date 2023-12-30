import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-four-teams',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-four-teams.component.html',
  styleUrl: './form-four-teams.component.scss'
})
export class FormFourTeamsComponent {

  constructor(private fb: FormBuilder) { }

  teamForm = this.fb.group({
    name1: ['', Validators.required],
    score1: [0],
    name2: ['', Validators.required],
    score2: [0],
    name3: ['', Validators.required],
    score3: [0],
    name4: ['', Validators.required],
    score4: [0]

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

  get name4() {
    return this.teamForm.get('name4');
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
