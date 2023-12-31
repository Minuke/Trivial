import { Component, Input } from '@angular/core';
import { Team } from 'app/interfaces/team.interface';

@Component({
  selector: 'app-game-winner',
  standalone: true,
  imports: [],
  templateUrl: './game-winner.component.html',
  styleUrl: './game-winner.component.scss'
})
export class GameWinnerComponent {

  @Input() teams:Team[] = [];
  public winner:Team = {name:"", score:0};

  ngOnInit():void {
    this.getWinningTeam(this.teams);
  }

  getWinningTeam(teams:Team[]){
    if(teams.length > 0){
      this.winner = this.teams.reduce((prev, current) => {
        return (prev.score > current.score) ? prev : current
      });
    }
  }

}
