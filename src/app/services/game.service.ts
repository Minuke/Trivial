import { Injectable } from '@angular/core';
import { Team } from 'app/interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private teamData:Team[] = [];

  setTeamData(newDataTeam: Team[]): void {
    this.teamData = newDataTeam;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('teamData', JSON.stringify(newDataTeam));
    }
  }

  getTeamData(): Team[] {
    if (!this.teamData.length) {
      if (typeof localStorage !== 'undefined') {
        this.teamData = JSON.parse(localStorage.getItem('teamData') || '[]');
      }
    }
    return this.teamData;
  }
}
