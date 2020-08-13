import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {

  @Output('Click') click = new EventEmitter();
  
  categories = [
    { name : 'Beginner'},
    { name : 'Intermediate'},
    { name : 'Advanced'}
  ];

  public onselectCategory = (category) => {
    this.categories
    .filter(selectedCategory => selectedCategory != category)
    .forEach(selectedCategory => selectedCategory['selected'] = false);
    category.selected = !category.selected;
    this.click.emit(category);
  }
}