import { PasswordValidators } from './password.validator';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.css']
})
export class PasswordResetFormComponent {

  form : FormGroup;

  constructor(formbuild : FormBuilder) {
    this.form = formbuild.group({
      oldPassword : ['' , 
        Validators.required, 
        PasswordValidators.validOldPassword],
      newPassword : ['' , Validators.required],
      confirmPassword : ['' , Validators.required],
    },{
      validator : PasswordValidators.passwordShouldMatch
    });
   }

  get oldPassword(){ 
     return this.form.get("oldPassword");
  }

  get newPassword(){ 
    return this.form.get("newPassword");
  }

  get confirmPassword(){ 
    return this.form.get("confirmPassword");
  }
}
