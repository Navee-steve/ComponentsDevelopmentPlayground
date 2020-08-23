import { throwError } from 'rxjs';
import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  posts: any;

  /**
   * constructor 
   * 
   * @param httpClient 
   */
  constructor(private postService: PostService) { 
    
  }

  /**
   * ngOnInit get the details from localhost: 8080 server with mapping 'details'
   */
  ngOnInit() {
    this.postService.getAll()
      .subscribe(posts => this.posts = posts);
  }

  /**
   * createPost method is used to post the data from the front end 
   * Note: It is not saved in DB
   * @param input 
   */
  createPost(input : HTMLInputElement) {
    let post = { email : input.value };
    this.posts.splice(0,0,post);

    input.value = "";
    this.postService.create(post)
    .subscribe(
      posts => {
        console.log(posts);
      }, 
      (error: AppError) => {
        //This is used to Update the UI if any error occurs
        this.posts.splice(0,1);

        if(error instanceof BadInputError ){
          //this.form.setError(error.originalError());
        } else throw error;
      });
  }

  /**
   * updatePost method is used to update the value on localhost server
   * @param post 
   */
  updatePost(post){
    post.email = "sakthi";
    this.postService.updateJson(post)
    .subscribe(updatedPost =>  console.log(updatedPost));
  }

  /**
   * deletePost didn't work some issues in this...
   * 
   * @param post 
   */
  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1)

    this.postService.deleteJson(post)
    .subscribe(
      () => {
        console.log('deleted')
      }, 
      (error: AppError ) => {
        //UI rollback
        this.posts.splice(index, 0, post);

        if(error instanceof NotFoundError ){
          alert("This post already be deleted")
        } else throw error;
      });
  }
}
