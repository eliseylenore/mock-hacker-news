import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model'

@Pipe({
  name: 'newest'
})
export class NewestPipe implements PipeTransform {

  transform(input: Post[]) {
    var output: Post[] = [];
    for (var i = 0; i < input.length; i++) {
      if(input[i].points > 6) {
        output.push(input[i])
      }
    }
    return output;
  }

}
