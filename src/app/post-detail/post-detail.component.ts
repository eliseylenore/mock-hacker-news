import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from './../post.model';
import { PostService } from './../post.service';
import { CommentService } from './../comment.service';
import { Comment } from './../comment.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService, CommentService]
})
export class PostDetailComponent implements OnInit {
  post: Post = null;
  postId: number = null;
  comments: Comment[];

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService, private commentService: CommentService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    })
    this.post = this.postService.find(this.postId);
    this.comments = this.commentService.findByPostId(this.postId);
  }

}
