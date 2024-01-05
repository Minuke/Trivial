import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { GameWinnerComponent } from "app/components/game-winner/game-winner.component";
import { ScoreBoardComponent } from "app/components/score-board/score-board.component";
import { Team } from "app/interfaces/team.interface";
import { GameService } from "app/services/game.service";


@Component({
  selector: 'app-results-page',
  standalone: true,
  imports: [ScoreBoardComponent, GameWinnerComponent],
  templateUrl: './results-page.component.html',
  styleUrl: './results-page.component.scss'
})
export class ResultsPageComponent {

  public teams: Team[] = [];
  private gameService:GameService = inject(GameService);
  private router:Router = inject(Router);

  ngOnInit():void {
    this.teams = this.gameService.getTeamData();
  }

  startAgain(){
    this.gameService.deleteData();
    this.gameService.switchComponent('component1');
  }

}
