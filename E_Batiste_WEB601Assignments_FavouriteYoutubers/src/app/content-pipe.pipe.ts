import { Pipe, PipeTransform } from '@angular/core';

import { Youtubers } from './helper-files/Youtubers';

@Pipe({
  name: 'contentPipe'
})
export class ContentPipePipe implements PipeTransform {

  transform(contentItem: Youtubers[], ytype?: string): Youtubers[] {
    let searchFilter;
    if(!ytype){
      searchFilter = contentItem.filter(item => item.type == "" || item.type == null);
    }else{
      searchFilter = contentItem.filter(item => item.type == ytype);
    }
    return searchFilter;
  }
  }

