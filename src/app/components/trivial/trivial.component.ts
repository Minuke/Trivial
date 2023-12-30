import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Trivial } from 'app/interfaces/trivial.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trivial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trivial.component.html',
  styleUrl: './trivial.component.scss'
})
export class TrivialComponent {

  @Input() question!:Trivial;

  selectAnswer(answer:string):void {
    console.log(answer);
  }

}
