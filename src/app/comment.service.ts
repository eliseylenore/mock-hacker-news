import { Injectable } from '@angular/core';
import { Comment, COMMENTS } from './comment.model';


@Injectable()
export class CommentService {

  constructor() { }

  findAll() {
    return COMMENTS;
  }

  findByPostId(postId: number) {
    var output: Comment[] = [];
    for (var i=0; i < COMMENTS.length; i++) {
      if (COMMENTS[i].post === postId) {
        output.push(COMMENTS[i]);
      }
    }
    return output;
  }

}
