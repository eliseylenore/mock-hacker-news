import { Post } from './post.model';

export class Comment {
  public date: Date = new Date();
  public points: number = 0;

  constructor(
    public author: string,
    public text: string,
    public post: number
  ) {}
}

export var COMMENTS: Comment[] = [
  new Comment("Elise", "Test text", 1),
  new Comment("Someone", "Test text", 1),
  new Comment("Harhar", "Test text", 1),
]
