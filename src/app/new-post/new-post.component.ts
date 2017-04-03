import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from './../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent  {

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService, private router: Router) { }

  submitForm(title: string, author: string, url: string, text: string) {
    var newPost = new Post(title, author, url, text);
    this.postService.addPost(newPost);
    this.router.navigate(['posts', newPost.id]);
  }

}
