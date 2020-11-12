import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {

  valid: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  makeOTPFetch = (formValue) => {
    this.valid = true;
    console.log(formValue)
  }

}
