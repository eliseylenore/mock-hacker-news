import { Component, OnInit } from '@angular/core';
import { Post, POSTS } from './../post.model';


@Component({
  selector: 'app-newest-posts',
  templateUrl: './newest-posts.component.html',
  styleUrls: ['./newest-posts.component.css']
})
export class NewestPostsComponent{
posts: Post[] = POSTS;

}
