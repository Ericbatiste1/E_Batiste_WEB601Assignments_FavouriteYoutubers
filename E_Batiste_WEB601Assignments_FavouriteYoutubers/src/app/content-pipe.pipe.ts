import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentPipe'
})
export class ContentPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
