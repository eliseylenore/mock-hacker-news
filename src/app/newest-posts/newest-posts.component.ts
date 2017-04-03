import { Component, OnInit, Input } from '@angular/core';
import { Post, POSTS } from './../post.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newest-posts',
  templateUrl: './newest-posts.component.html',
  styleUrls: ['./newest-posts.component.css']
})
export class NewestPostsComponent{
  posts: Post[] = POSTS;

  constructor(private router: Router) {}
  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id])
  }
}
