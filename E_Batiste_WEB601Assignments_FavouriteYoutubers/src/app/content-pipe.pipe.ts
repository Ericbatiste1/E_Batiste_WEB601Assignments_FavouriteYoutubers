import { Pipe, PipeTransform } from '@angular/core';

import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentPipe'
})
export class ContentPipePipe implements PipeTransform {

  transform(contentItem: Content[], type?: string): Content[] {
    let searchFilter;
    if(!type){
      searchFilter = contentItem.filter(item => item.type == "" || item.type == null);
    }else{
      searchFilter = contentItem.filter(item => item.type == type);
    }
    return searchFilter;
  }
  }

