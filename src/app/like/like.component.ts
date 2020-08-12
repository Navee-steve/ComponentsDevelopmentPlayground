import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount : number = 0;
  @Input('isActive') isActive : boolean;

  @Output() onClickLike = new EventEmitter();

  public onLikeClicked = () => {
    this.likesCount += (this.isActive) ? -1 : 1 ;
    this.isActive = !this.isActive;
    this.onClickLike.emit({ likesCount : this.likesCount });
  }
}

export interface LikeComponentEmitArgs{
  likesCount : number;
}