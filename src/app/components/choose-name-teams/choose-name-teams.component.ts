import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormTwoTeamsComponent } from '../form-two-teams/form-two-teams.component';

@Component({
  selector: 'app-choose-name-teams',
  standalone: true,
  imports: [CommonModule, FormTwoTeamsComponent],
  templateUrl: './choose-name-teams.component.html',
  styleUrl: './choose-name-teams.component.scss'
})
export class ChooseNameTeamsComponent {

  @Input() teams!: number;

}
