import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-choose-name-teams',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './choose-name-teams.component.html',
  styleUrl: './choose-name-teams.component.scss'
})
export class ChooseNameTeamsComponent {

  @Input() teams!: number;

  constructor(private fb: FormBuilder) { }

  teamForm = this.fb.group({
    name: ['', Validators.required],
    score: [0]
  });

  get name() {
    return this.teamForm.get('name');
  }

  onSubmit() {
    console.log(this.teamForm.value);
  }
}
