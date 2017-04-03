import { Component, OnInit, Input } from '@angular/core';
import { Post } from './../post.model';
import { Router } from '@angular/router';
import { PostService } from './../post.service';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
  providers: [PostService]
})
export class PostTileComponent {
  constructor(private router: Router, private postService: PostService){}

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }
}
