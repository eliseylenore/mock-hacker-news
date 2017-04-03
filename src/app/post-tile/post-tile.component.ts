import { Component, OnInit, Input } from '@angular/core';
import { Post, POSTS } from './../post.model';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent {
  posts: Post[] = POSTS;
}
