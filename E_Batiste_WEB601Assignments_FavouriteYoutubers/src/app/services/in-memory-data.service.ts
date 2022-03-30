import { Injectable } from '@angular/core';
import { Youtubers } from '../helper-files/Youtubers';
import { YOUTUBERSLIST } from '../helper-files/youtubersDb';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const youtuberList: Youtubers[] = YOUTUBERSLIST;
    return {youtuberList};
  }

  genId(youtuber: Youtubers[]): number{
    return youtuber.length > 0 ?
    Math.max(...youtuber.map(c => c.id ?? 0)) + 1 : 2000;
  }

}
