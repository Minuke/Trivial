import { Component, inject } from '@angular/core';
import { ChooseNameTeamsComponent } from 'app/components/choose-name-teams/choose-name-teams.component';
import { ChooseNumberTeamsComponent } from 'app/components/choose-number-teams/choose-number-teams.component';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ChooseNumberTeamsComponent, ChooseNameTeamsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  private gameService:GameService = inject(GameService);

  public teams:number = 0;

  ngOnInit():void {
    this.gameService.deleteData();
  }

  getNumberTeams(teams:number){
    this.teams = teams;
  }

}
