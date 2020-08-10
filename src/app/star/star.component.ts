import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  isStarClicked : boolean;

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.isStarClicked = !this.isStarClicked;
  }

}
