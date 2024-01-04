import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomePageComponent, GamePageComponent, ResultsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Trivial';
}
