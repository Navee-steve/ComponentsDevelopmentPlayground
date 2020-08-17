import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private rootURL: string =  "http://localhost:8080/";
  private jsonURL : string = "https://jsonplaceholder.typicode.com/comments";

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    //Change to URL to rootURL for STS IDE
    return this.httpClient.get( this.jsonURL);
  }

  createPosts(post){
    return this.httpClient.post(this.jsonURL , JSON.stringify(post))
  }

  updatePosts(post){
    return this.httpClient.put(this.rootURL + 'doOperation' , post)
  }

deletePost(id){
  return this.httpClient.delete(this.rootURL + 'doOperation/' + id)
  }

deletePostJson(id){
  return this.httpClient.delete(this.jsonURL + '/' + id)
  }
}
