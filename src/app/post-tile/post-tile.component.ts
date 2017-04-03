import { Component, OnInit, Input } from '@angular/core';
import { Post, POSTS } from './../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent {
  constructor(private router: Router){}
  posts: Post[] = POSTS;

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }
}
