import { Injectable } from '@angular/core';
import { Comment, COMMENTS } from './comment.model';

let masterCommentList: Comment[] = COMMENTS;

@Injectable()
export class CommentService {

  constructor() { }

  findAll() {
    return masterCommentList;
  }

  findByPostId(postId: number) {
    var output: Comment[] = [];
    for (let i=0; i < masterCommentList.length; i++) {
      if (masterCommentList[i].post === postId) {
        output.push(masterCommentList[i]);
      }
    }
    return output;
  }

  addComment(comment: Comment) {
    masterCommentList.push(comment);
  }

}
