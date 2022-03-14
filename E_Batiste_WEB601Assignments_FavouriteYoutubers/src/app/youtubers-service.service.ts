import { Injectable } from '@angular/core';
import { YOUTUBERSLIST } from './helper-files/youtubersDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Youtubers } from './helper-files/Youtubers';
@Injectable({
  providedIn: 'root'
})
export class YoutubersServiceService {

  constructor(private messageService: MessageService) {

   }

   youtubersObj(): Observable<Youtubers[]> {
    this.messageService.addMsg('Content Array Loaded!');
    return of(YOUTUBERSLIST);
  }

  singleYoutuber(id: number):Observable<Youtubers[]>{
    let youtuber = YOUTUBERSLIST.filter(youtuber => youtuber.id == id);
    this.messageService.addMsg(`ID: ${id} has been loaded.`);
    return of(youtuber);
  }

}
