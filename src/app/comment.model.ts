import { Post } from './post.model';

export class Comment {

  constructor(
    public author: string,
    public text: string,
    public date: Date,
    public points: number,
    public post: number
  ){}
}

export var COMMENTS: Comment[] = [
  new Comment("Elise", "Test text", new Date(), 9, 1),
  new Comment("Someone", "Test text", new Date(), 9, 1),
  new Comment("Harhar", "Test text", new Date(), 9, 1),
]
