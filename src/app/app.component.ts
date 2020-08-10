import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: number = 0;

  title = "CUSTOM - COMPONENT'S";

  onRatingChanged = (score) => {
    this.score = score;
  }
}
