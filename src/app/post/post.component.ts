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
    this.postService.getPosts()
      .subscribe(PartialObserver =>{
      this.posts = PartialObserver;
    })
  }

  /**
   * createPost method is used to post the data from the front end 
   * Note: It is not saved in DB
   * @param input 
   */
  createPost(input : HTMLInputElement) {
    let post = { id : input.value };
    input.value = "";
    this.postService.createPosts(post)
    .subscribe(data => {
      post['idValue'] = data;
      this.posts.splice(0,0,post);
    })
  }

  /**
   * updatePost method is used to update the value on localhost server
   * @param post 
   */
  updatePost(post){
    post.name = "sakthi";
    this.postService.updatePosts(post)
    .subscribe(data => {
        console.log(data);
    })
  }

  /**
   * deletePost didn't work some issues in this...
   * 
   * @param post 
   */
  deletePost(post) {
    this.postService.deletePostJson(post['id'])
    .subscribe(data => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1)
      console.log('deleted')
    })
  }
}
