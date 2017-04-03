import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model'

@Pipe({
  name: 'newest'
})
export class NewestPipe implements PipeTransform {

  transform(input: Post[]) {
    return input;
  }

}
