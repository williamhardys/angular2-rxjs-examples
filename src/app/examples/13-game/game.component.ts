import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  styles: [`
  md-card {
    width: 400px;
    box-sizing: border-box;
    margin: 16px;
    background: white url('assets/stars.jpg') repeat-y top left;
    background-size: cover;
    overflow: hidden;
  }
  .card-container {
    display: flex;
    flex-flow: row wrap;
    position: fixed;
    top: 70px;
    bottom: 0;
  }
  `],
  template: `
  <div class="card-container">
      <md-card>
        <app-game-master></app-game-master>
      </md-card>
      <md-card>
        <app-game-client></app-game-client>
      </md-card>
  </div>
  `
})
export class GameComponent { }
