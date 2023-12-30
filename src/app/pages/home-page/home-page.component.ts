import { Component } from '@angular/core';
import { ChooseNameTeamsComponent } from 'app/components/choose-name-teams/choose-name-teams.component';
import { ChooseNumberTeamsComponent } from 'app/components/choose-number-teams/choose-number-teams.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ChooseNumberTeamsComponent, ChooseNameTeamsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  getNumberTeams(teams:number){
    console.log(teams);
  }

}
