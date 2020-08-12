import { NgModule , Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  
  //Defining the attributes for rating component
  @Input('isRatingScore') score: number;
  @Input('isMaxScore') maxScore: number = 5;

  //Defining the event for rating component
  @Output() ratingChanged = new EventEmitter();

  //Declared for number of components builded
  overAllRange = [];
  initialMarked = -1;

  ngOnInit(): void {
    for (var i = 0 ; i< this.maxScore ; i++){
      this.overAllRange.push(i);
    }
  }

  /**
   * onRatingClicked method is used to emit the event of rating value once the rating icon clicked
   * 
   * @param index 
   */
  public onRatingClicked = (index) => {
    this.initialMarked = this.initialMarked == index ? index-1 : index;
    this.score = this.initialMarked + 1;  
    this.ratingChanged.emit({ ratingScore : this.score });
  }

  /**
   * isMarked method is used to set the CSS for the each and every click actions
   * 
   * @param index 
   */
  public isMarked = (index) => {
    if(index <= this.initialMarked)
      return "pi-star";
    else
      return "pi-star-o";
  }
}

/**
 * RatingComponentEventArgs interface is used to fetch the object return values from the 
 * ratingComponent 
 */
export interface RatingComponentEventArgs{
  ratingScore : number;
}