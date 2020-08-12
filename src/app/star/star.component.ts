import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  isStarClicked : boolean;

  onClick(){
    this.isStarClicked = !this.isStarClicked;
  }

}
