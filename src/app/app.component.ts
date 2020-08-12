import { LikeComponentEmitArgs } from './like/like.component';
import { RatingComponentEventArgs } from './rating/rating.component';
import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //set the values for like component attributes
  likeComponentEnum = {
    likesCount : 0,
    isLiked : true
  }

  inputTyped : string ;
  isRatingScore: number = 0;

  title = "CUSTOM - COMPONENT'S";

  onRatingChanged = (eventArgs : RatingComponentEventArgs) => {
    //You can take your rating score from this.isRatingScore
    this.isRatingScore = eventArgs.ratingScore;
    console.log(this.isRatingScore)
  }

  onlikeClicked = (eventArgs : LikeComponentEmitArgs) => {
    //Events from likeComponent Click
  }
}
