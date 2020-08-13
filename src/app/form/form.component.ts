import { SimpleDialogComponent } from './../simple-dialog/simple-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /**
   * onInputChange change event need to implememt validation in future
   * 
   * @param firstName 
   */
  onInputChange(firstName){
    //Type your code here...
  }

  /**
   * openDialog is a dialog component which is attached to form-component 
   * if it was clicked as proceed it returns true if cancel clicked it returns nothing
   * 
   */
  public openDialog = () => {
    this.dialog.open(SimpleDialogComponent)
    .afterClosed()
    .subscribe(result => console.log(result));
  }
}
