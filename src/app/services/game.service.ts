import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Team } from 'app/interfaces/team.interface';
import { Trivial } from 'app/interfaces/trivial.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private http:HttpClient = inject(HttpClient);

  private teamData:Team[] = [];
  private questionsUrl: string = "http://localhost:3000/questions";


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

  getQuestions():Observable<Trivial[]> {
    return this.http.get<Trivial[]>(`${ this.questionsUrl }`);
  }

}
