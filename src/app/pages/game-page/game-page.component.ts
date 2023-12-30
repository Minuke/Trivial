import { Component, inject } from '@angular/core';
import { Team } from 'app/interfaces/team.interface';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {

  private gameService:GameService = inject(GameService);

  public teams: Team[] = [];

  ngOnInit() {
    this.teams = this.gameService.getDatos();
    console.log(this.teams);
  }

}
