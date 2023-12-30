import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-number-teams',
  standalone: true,
  imports: [],
  templateUrl: './choose-number-teams.component.html',
  styleUrl: './choose-number-teams.component.scss'
})
export class ChooseNumberTeamsComponent {

  public teams:number = 0;

  getNumberTeams(teams:number){
    this.teams = teams;
  }

}
