import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getAll() {
    return POSTS;
  }

  find(id) {
    for(var i = 0; i < POSTS.length; i++) {
      if(POSTS[i].id === id) {
        return POSTS[i];
      }
    }
  }

}
