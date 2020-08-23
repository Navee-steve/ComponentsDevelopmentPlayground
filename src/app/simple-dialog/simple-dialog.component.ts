import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.css']
})
export class SimpleDialogComponent implements OnInit {
  name: string;
  comment: string;

  constructor( @Inject(MAT_DIALOG_DATA) data :any) {
    console.log(data);
    this.name = data.firstName;
    this.comment = data.comment;
   }

  ngOnInit(): void {
  }

}
