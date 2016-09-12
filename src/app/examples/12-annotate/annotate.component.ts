import { Component } from '@angular/core';

@Component({
  selector: 'app-annotate',
  styles: [`
  md-card {
    width: 400px;
    box-sizing: border-box;
    margin: 16px;
  }
  .card-container {
    display: flex;
    flex-flow: row wrap;
  }
  `],
  template: `
  <div class="card-container">
      <md-card>
        <app-annotate-master></app-annotate-master>
      </md-card>
      <md-card>
          <app-annotate-client></app-annotate-client>
      </md-card>
  </div>
  `
})
export class AnnotateComponent { }