import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-annotate-client',
  template: `
  <div class="container">
    <app-line
      *ngFor="let line of lines" [line]="line">
    </app-line>
  </div>
  `
})
export class AnnotateClientComponent implements OnInit {
  lines: any[] = [];

  constructor(private af: AngularFire) {}

  ngOnInit() {
    const remote$ = this.af.database.object('annotate/');

    remote$
      .subscribe(line => this.lines = [...this.lines, line]);
  }
}