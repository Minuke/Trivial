import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Team } from 'app/interfaces/team.interface';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'app-form-four-teams',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-four-teams.component.html',
  styleUrl: './form-four-teams.component.scss'
})
export class FormFourTeamsComponent {

  private fb:FormBuilder = inject(FormBuilder);
  private gameService:GameService = inject(GameService);
  private router:Router = inject(Router);

  public teamsBuild:Team[] = [];

  teamForm = this.fb.group({
    name1: ['', Validators.required],
    score1: [0],
    name2: ['', Validators.required],
    score2: [0],
    name3: ['', Validators.required],
    score3: [0],
    name4: ['', Validators.required],
    score4: [0]

  });

  get name1() {
    return this.teamForm.get('name1');
  }

  get name2() {
    return this.teamForm.get('name2');
  }

  get name3() {
    return this.teamForm.get('name3');
  }

  get name4() {
    return this.teamForm.get('name4');
  }

  onSubmit():void {
    if (this.teamForm.invalid) {
      this.teamForm.markAllAsTouched();
      return;
    }else{
      this.teamsBuild = this.buildTeams(this.teamForm.value);
      this.gameService.setTeamData(this.teamsBuild);
      this.router.navigate(['/game']);
    }
  }

  private buildTeams(formValues:any):Team[] {
    const teams: Team[] = [];
      for (let i = 1; i <= 4; i++) {
        const name = formValues[`name${i}`];
        const score = formValues[`score${i}`];
        const team: Team = {
          name: name,
          score: score,
        };

        teams.push(team);
      }
      return teams;
  }

}
