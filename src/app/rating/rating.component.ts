import { NgModule , Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  
  //Defining the attributes for rating component
  @Input() score;
  @Input() maxScore = 5;

  //Defining the event for rating component
  @Output() ratingChanged = new EventEmitter();

  //Declared for number of components builded
  overAllRange = [];
  initialMarked = -1;

  constructor() { 
  }

  ngOnInit(): void {
    for (var i = 0 ; i< this.maxScore ; i++){
      this.overAllRange.push(i);
    }
  }

  public onStarClicked = (index) => {
    this.initialMarked = this.initialMarked == index ? index-1 : index;
    this.score = this.initialMarked + 1;
    this.ratingChanged.next(this.score);
  }

  public isMarked = (index) => {
    if(index <= this.initialMarked)
      return "pi-star";
    else
      return "pi-star-o";
  }
}
