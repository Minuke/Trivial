import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Team } from 'app/interfaces/team.interface';
import { Answer, Trivial } from 'app/interfaces/trivial.interface';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'app-trivial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trivial.component.html',
  styleUrl: './trivial.component.scss'
})
export class TrivialComponent {

  private gameService:GameService = inject(GameService);

  @Input() question!:Trivial;
  @Input() teams!:Team[];

  public currentTurn:number = this.gameService.getCurrentTurn();
  public currentTeam!: Team;
  public totalCorrectAnswersSelected:number = this.gameService.getTotalCorrectAnswersSelected();
  public nextQuestion:boolean = this.gameService.getNextQuestion();

  selectAnswer(answer:Answer):void {
    if(answer.selected) return;
    this.nextTeamTurn();
    this.saveAnswerStatus(answer);
    if(answer.correct) {
      this.addPoints(answer);
      this.nextQuestion = this.endQuestion();
      this.gameService.setNextQuestion(this.nextQuestion);
    }
  }

  saveAnswerStatus(answer:Answer) {
    answer.selected = true;
    this.gameService.setQuestion(this.question);
  }

  nextTeamTurn():void {
    if (this.currentTurn >= this.teams.length) {
      this.currentTurn = 0;
    }
    this.currentTeam = this.teams[this.currentTurn];
    this.currentTurn += 1;
    this.gameService.setCurrentTurn(this.currentTurn);

  }

  addPoints(answer:Answer):void {
    if(answer.correct) {
      this.currentTeam.score += 1;
      this.gameService.setTeamData(this.teams);
    }
  }

  endQuestion():boolean {
    this.totalCorrectAnswersSelected += 1;
    this.gameService.setTotalCorrectAnswersSelected(this.totalCorrectAnswersSelected);
    if(this.question.totalCorrectAnswers == this.question.totalCorrectAnswers) {
      return true;
    } else {
      return false;
    }
  }

}
