import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Team } from 'app/interfaces/team.interface';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'app-form-three-teams',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-three-teams.component.html',
  styleUrl: './form-three-teams.component.scss'
})
export class FormThreeTeamsComponent {

  private fb:FormBuilder = inject(FormBuilder);
  private gameService:GameService = inject(GameService);

  public teamsBuild:Team[] = [];

  teamForm = this.fb.group({
    name1: ['', Validators.required],
    score1: [0],
    name2: ['', Validators.required],
    score2: [0],
    name3: ['', Validators.required],
    score3: [0]

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

  onSubmit():void {
    if (this.teamForm.invalid) {
      this.teamForm.markAllAsTouched();
      return;
    }else{
      this.teamsBuild = this.buildTeams(this.teamForm.value);
      this.gameService.setTeamData(this.teamsBuild);
      this.gameService.switchComponent('component2');
    }
  }

  private buildTeams(formValues:any):Team[] {
    const teams: Team[] = [];
      for (let i = 1; i <= 3; i++) {
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
