import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { RatingComponent } from './rating/rating.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';

//for primeNg usage
import { PrimeModule } from './ui-module/prime.module';

//importing material icon module
import { MaterialModule } from './ui-module/material.module';
import { ChipComponent } from './chip/chip.component';
import { FormComponent } from './form/form.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    RatingComponent,
    TitleCasePipe,
    LikeComponent,
    ChipComponent,
    FormComponent,
    SimpleDialogComponent
  ],
  //Dynamic components must be registered here to avoid compilation error but for our version it works fine
  entryComponents : [
    SimpleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    //Adding Prime Ng UI module
    PrimeModule,
    
    //Adding Material Design Module
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
