import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Team } from 'app/interfaces/team.interface';
import { Trivial } from 'app/interfaces/trivial.interface';
import { BehaviorSubject, Observable } from 'rxjs';

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
  public questionHistory:string[] = [];
  private questionsUrl: string = "http://localhost:3000/questions";
  private componentSource: BehaviorSubject<string>;
  public currentComponent: Observable<string>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const initialComponent = isPlatformBrowser(this.platformId) ? localStorage.getItem('component') || 'component1' : 'component1';
    this.componentSource = new BehaviorSubject(initialComponent);
    this.currentComponent = this.componentSource.asObservable();
  }

  switchComponent(component: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('component', component);
    }
    this.componentSource.next(component);
  }

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

  deleteData() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('teamData');
      localStorage.removeItem('rounds');
      localStorage.removeItem('currentTurn');
      localStorage.removeItem('endQuestion');
      localStorage.removeItem('question');
      localStorage.removeItem('totalCorrectAnswersSelected');
      localStorage.removeItem('history');
    }
  }

  getQuestionHistory():string[] {
    if (typeof localStorage !== 'undefined') {
      this.questionHistory = JSON.parse(localStorage.getItem('history') || "[]");
    }
  return this.questionHistory;
  }

  setQuestionHistory(question:Trivial):boolean {
    if(!this.questionHistory.includes(question.question)) {
      this.questionHistory.push(question.question);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('history', JSON.stringify(this.questionHistory));
        return true;
      }
    } else {
      return false;
    }
    return false;
  }

}
