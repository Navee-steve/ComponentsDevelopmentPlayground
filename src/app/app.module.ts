import { GitHubFollowersService } from './services/git-hub-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { NewFormDynamicComponent } from './new-form-dynamic/new-form-dynamic.component';
import { PasswordResetFormComponent } from './password-reset-form/password-reset-form.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    RatingComponent,
    TitleCasePipe,
    LikeComponent,
    ChipComponent,
    FormComponent,
    SimpleDialogComponent,
    NewFormDynamicComponent,
    PasswordResetFormComponent,
    PostComponent,
    GitHubFollowersComponent
  ],
  //Dynamic components must be registered here to avoid compilation error but for our version it works fine
  entryComponents : [
    SimpleDialogComponent,
    NewFormDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //Adding Prime Ng UI module
    PrimeModule,
    
    //Adding Material Design Module
    MaterialModule
  ],
  providers: [
    PostService,
    GitHubFollowersService,
    { provide: ErrorHandler , useClass : AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
