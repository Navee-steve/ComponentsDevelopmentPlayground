import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {AppError} from './../common/app-error';

//Added for getting catch method in observables
import { map,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient ,private rootURL: string ,private jsonURL: string) { }

  getAll(){
    //Change to URL to rootURL for STS IDE
    return this.httpClient.get( this.jsonURL)
    .pipe(
        map(response => response),
        catchError(this.errorHandler)
    );
  }

  create(resource){
    return this.httpClient.post(this.jsonURL , resource).pipe(
        map(response => response),
       catchError(this.errorHandler)
    );
    
  }

  update(resource){
    return this.httpClient.put(this.rootURL + 'doOperation' , resource).pipe(
        map(response => response),
        catchError(this.errorHandler)
    );
  }

  delete(id){
  return this.httpClient.delete(this.rootURL + 'doOperation/' + id).pipe(
    map(response => response),
    catchError(this.errorHandler)
);
  }

  deleteJson(id){
  return this.httpClient.delete(this.jsonURL + '/' + id)
    .pipe(
        map(response => response),
        catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    
    //In angular 4 Observable.throw(new Error()) is used
    
    //Above angular 4 throwError rxjs > 6.5 V it can be written as throwError(new Error())

    if(error.status === 400)
      return throwError(new BadInputError(error));
    if(error.status === 404 )
      return throwError(new NotFoundError(error));
    return throwError(new AppError(error));
  }
  
}