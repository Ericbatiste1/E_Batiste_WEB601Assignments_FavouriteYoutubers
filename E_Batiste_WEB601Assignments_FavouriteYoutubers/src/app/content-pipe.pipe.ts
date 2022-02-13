import { Pipe, PipeTransform } from '@angular/core';

import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentPipe'
})
export class ContentPipePipe implements PipeTransform {

  transform(contentItem: Content[]): Content[] {
    return contentItem.filter(c => c.type != null ? c.type.length != 0 : false);
  } 
  }

