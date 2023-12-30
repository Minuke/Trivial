import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-choose-name-teams',
  standalone: true,
  imports: [],
  templateUrl: './choose-name-teams.component.html',
  styleUrl: './choose-name-teams.component.scss'
})
export class ChooseNameTeamsComponent {

  @Input() teams!: number;

}
