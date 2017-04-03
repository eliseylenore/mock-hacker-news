import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

let masterPostList: Post[] = POSTS;

@Injectable()
export class PostService {
  constructor() { }

  getAll() {
    return masterPostList;
  }

  find(id) {
    for(let i = 0; i < masterPostList.length; i++) {
      if(masterPostList[i].id === id) {
        return masterPostList[i];
      }
    }
  }

  addPost(Post) {
    masterPostList.push(Post);
  }

}
