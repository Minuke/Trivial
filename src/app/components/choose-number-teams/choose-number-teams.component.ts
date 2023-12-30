import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choose-number-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-number-teams.component.html',
  styleUrl: './choose-number-teams.component.scss'
})
export class ChooseNumberTeamsComponent {

  @Output() teamsEmitter:EventEmitter<number> = new EventEmitter<number>;
  public teams:number = 0;

  getNumberTeams(teams:number){
    this.teams = teams;
    this.teamsEmitter.emit(this.teams);
  }

}
