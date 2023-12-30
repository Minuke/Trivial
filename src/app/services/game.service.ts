import { Injectable } from '@angular/core';
import { Team } from 'app/interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private teamData:Team[] = [];

  setDatos(newDataTeam: Team[]): void {
    this.teamData = newDataTeam;
  }

  getDatos(): Team[] {
    return this.teamData;
  }
}
