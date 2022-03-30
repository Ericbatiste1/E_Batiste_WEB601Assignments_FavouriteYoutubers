import { Injectable } from '@angular/core';
import { YOUTUBERSLIST } from '../helper-files/youtubersDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Youtubers } from '../helper-files/Youtubers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class YoutubersServiceService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json' })
  };


  constructor(private http: HttpClient, private messageService: MessageService) {

   }

  singleYoutuber(id: number):Observable<Youtubers[]>{
    let youtuber = YOUTUBERSLIST.filter(youtuber => youtuber.id == id);
    this.messageService.addMsg(`ID: ${id} has been loaded.`);
    return of(youtuber);
  }

  updateContent(contentItem: Youtubers): Observable<any>{
    return this.http.put("api/youtuberList", contentItem, this.httpOptions);
  }

  addContent(newContentItem: Youtubers): Observable<Youtubers>{
    this.messageService.addMsg(`A new Youtuber has been added.`);
    return this.http.post<Youtubers>("api/youtuberList", newContentItem, this.httpOptions);
  }

  getYoutubers(): Observable<Youtubers[]>{
    return this.http.get<Youtubers[]>("api/youtuberList");
  }

}
