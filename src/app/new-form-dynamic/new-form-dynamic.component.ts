import { fade } from './../animations/animations';
import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-form-dynamic',
  templateUrl: './new-form-dynamic.component.html',
  styleUrls: ['./new-form-dynamic.component.css'],
  //Adding Animations
  animations:[
    fade
  ]
})
export class NewFormDynamicComponent {
  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic : HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }

  /**
   * Explicit converts to array
   */
  //Whatever name will given here must be given to template
  /**
   * If no such get method is here
   * HTML template will be 
   * 
   * <like> form.get('topics')['controls'] </like>
   */
  get topics(){
    return this.form.get('topics') as FormArray;
  }

  removeElement(topic : FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
