import { Pipe, PipeTransform } from '@angular/core';

import { Youtubers } from './helper-files/Youtubers';

@Pipe({
  name: 'contentPipe'
})
export class ContentPipePipe implements PipeTransform {

  transform(contentItem: Youtubers[], type?: string): Youtubers[] {
    let searchFilter;
    if(!type){
      searchFilter = contentItem.filter(item => item.type == "" || item.type == null);
    }else{
      searchFilter = contentItem.filter(item => item.type == type);
    }
    return searchFilter;
  }
  }

