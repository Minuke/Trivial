import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ScoreBoardComponent } from 'app/components/score-board/score-board.component';
import { TrivialComponent } from 'app/components/trivial/trivial.component';
import { Team } from 'app/interfaces/team.interface';
import { Trivial } from 'app/interfaces/trivial.interface';
import { GameService } from 'app/services/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CommonModule, ScoreBoardComponent, TrivialComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {

  private gameService:GameService = inject(GameService);

  public teams:Team[] = this.gameService.getTeamData();
  public questions:Observable<Trivial[]> = this.gameService.getQuestions();

}
