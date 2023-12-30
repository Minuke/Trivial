import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
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

  selectAnswer(answer:Answer):void {
    answer.selected = true;
    this.gameService.setQuestion(this.question);
  }

}
