import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormTwoTeamsComponent } from '../form-two-teams/form-two-teams.component';
import { FormThreeTeamsComponent } from '../form-three-teams/form-three-teams.component';
import { FormFourTeamsComponent } from '../form-four-teams/form-four-teams.component';

@Component({
  selector: 'app-choose-name-teams',
  standalone: true,
  imports: [CommonModule, FormTwoTeamsComponent, FormThreeTeamsComponent, FormFourTeamsComponent],
  templateUrl: './choose-name-teams.component.html',
  styleUrl: './choose-name-teams.component.scss'
})
export class ChooseNameTeamsComponent {

  @Input() teams!: number;

}
