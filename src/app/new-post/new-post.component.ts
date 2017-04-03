import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';
import { Post } from './../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent  {

  constructor(private postService: PostService) { }

  submitForm(title: string, author: string, url: string, text: string) {
    var newPost = new Post(title, author, url, text);
    this.postService.addPost(newPost);
  }

}
