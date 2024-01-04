import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomePageComponent, GamePageComponent, ResultsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title:string = 'Trivial';
  public currentComponent: string = "";

  private gameService:GameService = inject(GameService);

  ngOnInit():void {
    this.gameService.currentComponent.subscribe(component => {
      this.currentComponent = component;
    });
  }
}
