import { Component, Input, OnInit } from '@angular/core';
import { YoutubersServiceService } from './youtubers-service.service';
import { Youtubers } from './helper-files/Youtubers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top YouTubers';
  @Input() contentItem?: Youtubers;

  constructor() { 
   
}

searchTitle(title: string, coolYoutubers: Youtubers[]): string{
  for(let content of coolYoutubers){
    if(title == content.title.toLowerCase()){
      return "Title Found!";
    }
  }
  return "Title Not Found!";
}



}
