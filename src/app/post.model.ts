import { Comment } from './comment.model';
import { POSTS } from './mock-posts';

var idcounter = 0;

export class Post {
  public date: Date = new Date();
  public points: number = 0;
  public id = idcounter++;
  constructor(public title: string, public author: string, public url: string, public text: string) {}
}
