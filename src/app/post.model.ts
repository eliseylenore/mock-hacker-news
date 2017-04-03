export class Post {
  constructor(public title: string, public date: Date, public points: number, public author: string, public url: string, public text: string, public id: number) {}
}

export var POSTS: Post[] = [
  new Post("Post Title", new Date(), 5, "Author Name", "www.google.com", "Here is the paragraph of our post that says so much but nothing at all.", 1),
  new Post("Post Title", new Date(), 7, "Author Name", "www.google.com", "Here is the paragraph of our post that says so much but nothing at all.", 2),
  new Post("Post Title", new Date(), 12, "Author Name", "www.google.com", "Here is the paragraph of our post that says so much but nothing at all.", 3),
  new Post("Post Title", new Date(), 5, "Author Name", "www.google.com", "Here is the paragraph of our post that says so much but nothing at all.", 4),
  new Post("Post Title", new Date(), 3, "Author Name", "www.google.com", "Here is the paragraph of our post that says so much but nothing at all.", 5),
  new Post("Post Title", new Date(), 5, "Author Name", "www.google.com", "Here is the paragraph of our post that says so much but nothing at all.", 6),
  new Post("Post Title", new Date(), 5, "Author Name", "www.google.com", "Here is the paragraph of our post that says so much but nothing at all.", 7),
  new Post("Post Title", new Date(), 5, "Author Name", "www.google.com", "Here is the paragraph of our post that says so much but nothing at all.", 8)
]
