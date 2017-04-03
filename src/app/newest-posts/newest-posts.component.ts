import { Component, OnInit, Input } from '@angular/core';
import { Post } from './../post.model';
import { Router } from '@angular/router';
import { PostService } from './../post.service';


@Component({
  selector: 'app-newest-posts',
  templateUrl: './newest-posts.component.html',
  styleUrls: ['./newest-posts.component.css'],
  providers: [PostService]
})
export class NewestPostsComponent{
  constructor(private router: Router, private postService: PostService) {}
  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id])
  }
}
