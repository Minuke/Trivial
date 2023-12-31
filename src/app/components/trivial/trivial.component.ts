import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'app/interfaces/team.interface';
import { Answer, Trivial } from 'app/interfaces/trivial.interface';
import { GameService } from 'app/services/game.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-trivial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trivial.component.html',
  styleUrl: './trivial.component.scss'
})
export class TrivialComponent {

  private gameService:GameService = inject(GameService);
  private router:Router = inject(Router);

  @Input() teams!:Team[];

  public currentTurn:number = this.gameService.getCurrentTurn();
  public totalCorrectAnswersSelected:number = this.gameService.getTotalCorrectAnswersSelected();
  public endQuestion:boolean = this.gameService.getEndQuestion();
  public questions:Observable<Trivial[]> = this.gameService.getQuestions();
  public question:Trivial = this.gameService.getQuestion();
  public rounds:number = this.gameService.getRounds();
  public currentTeam!: Team;
  private questionSubscription?: Subscription;
  public endTrivial:boolean = false;
  public totalRounds:number = 2;
  //test: delete
  public questionIndex = 0;

  ngOnInit():void {
    if (Object.keys(this.question).length === 0) {
      this.chooseQuestion();
    }
  }

  chooseQuestion():void {
    this.questionSubscription = this.questions.subscribe((questions) => {
      this.question = questions[this.questionIndex];
      this.gameService.setQuestion(this.question);
      this.questionIndex++;
    });
  }

  selectAnswer(answer:Answer):void {
    if(answer.selected) return;
    this.nextTeamTurn();
    this.saveAnswerStatus(answer);
    if(answer.correct) {
      this.addPoints(answer);
      this.endQuestion = this.isEndQuestion();
      this.gameService.setEndQuestion(this.endQuestion);
    }
  }

  saveAnswerStatus(answer:Answer):void {
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

  isEndQuestion():boolean {
    this.totalCorrectAnswersSelected += 1;
    this.gameService.setTotalCorrectAnswersSelected(this.totalCorrectAnswersSelected);
    if(this.question.totalCorrectAnswers == this.totalCorrectAnswersSelected) {
      return true;
    } else {
      return false;
    }
  }

  prepareNextQuestion():void {
    this.gameService.setTotalCorrectAnswersSelected(0);
    this.totalCorrectAnswersSelected = this.gameService.getTotalCorrectAnswersSelected();
    this.gameService.setEndQuestion(false);
    this.endQuestion = this.gameService.getEndQuestion();
    this.rounds += 1;
    this.gameService.setRounds(this.rounds);
    this.gameService.deleteQuestion();
    if(this.rounds == this.totalRounds){
      this.endTrivial = true;
    }
    this.chooseQuestion();
  }

  goToResults():void {
    this.router.navigate(['/results']);
  }

  ngOnDestroy():void {
    if (this.questionSubscription) {
      this.questionSubscription.unsubscribe();
    }
  }

}
