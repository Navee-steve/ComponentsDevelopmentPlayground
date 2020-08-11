import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputTyped : string ;
  score: number = 0;

  title = "CUSTOM - COMPONENT'S";

  onRatingChanged = (score) => {
    this.score = score;
  }
}
