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
  public currentTurn:number = 0;
  public totalCorrectAnswersSelected:number = 0;
  public endQuestion:boolean = false;
  public rounds:number = 1;
  public question:Trivial = {question:"", showed:false, totalCorrectAnswers:0, answers:[]};
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

  setQuestion(question:Trivial):void {
    if (typeof localStorage !== 'undefined') {
      question.showed = true;
      localStorage.setItem('question', JSON.stringify(question));
    }
  }

  getQuestion():Trivial {
      if (typeof localStorage !== 'undefined') {
        this.question = JSON.parse(localStorage.getItem('question') || '[]');
      }
    return this.question;
  }

  getCurrentTurn():number {
    if (typeof localStorage !== 'undefined') {
      this.currentTurn = JSON.parse(localStorage.getItem('currentTurn') || "0");
    }
  return this.currentTurn;
  }

  setCurrentTurn(currentTurn:number) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('currentTurn', JSON.stringify(currentTurn));
    }
  }

  getTotalCorrectAnswersSelected() {
    if (typeof localStorage !== 'undefined') {
      this.totalCorrectAnswersSelected = JSON.parse(localStorage.getItem('totalCorrectAnswersSelected') || "0");
    }
  return this.totalCorrectAnswersSelected;
  }

  getEndQuestion() {
    if (typeof localStorage !== 'undefined') {
      this.endQuestion = JSON.parse(localStorage.getItem('endQuestion') || "false");
    }
  return this.endQuestion;
  }

  setTotalCorrectAnswersSelected(totalCorrectAnswersSelected:number) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('totalCorrectAnswersSelected', JSON.stringify(totalCorrectAnswersSelected));
    }
  }

  deleteTotalCorrectAnswersSelected():void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('totalCorrectAnswersSelected');
    }
  }

  setEndQuestion(endQuestion:boolean) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('endQuestion', JSON.stringify(endQuestion));
    }
  }

  deleteEndQuestion():void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('endQuestion');
    }
  }

  deleteQuestion():void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('question');
    }
  }

  getRounds():number {
    if (typeof localStorage !== 'undefined') {
      this.rounds = JSON.parse(localStorage.getItem('rounds') || "1");
    }
  return this.rounds;
  }

  setRounds(rounds:number) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('rounds', JSON.stringify(rounds));
    }
  }

}
