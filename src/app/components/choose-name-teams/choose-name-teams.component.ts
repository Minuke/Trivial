import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormTwoTeamsComponent } from '../form-two-teams/form-two-teams.component';
import { FormThreeTeamsComponent } from '../form-three-teams/form-three-teams.component';

@Component({
  selector: 'app-choose-name-teams',
  standalone: true,
  imports: [CommonModule, FormTwoTeamsComponent, FormThreeTeamsComponent],
  templateUrl: './choose-name-teams.component.html',
  styleUrl: './choose-name-teams.component.scss'
})
export class ChooseNameTeamsComponent {

  @Input() teams!: number;

}
