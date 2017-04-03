import { Component } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = POSTS;
}
