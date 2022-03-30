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
  someYoutuber: Youtubers[] = [];
  filteredYoutuber : Youtubers[] = [];

  constructor(private yService: YoutubersServiceService) { 
   
}

ngOnInit(): void{
  this.yService.singleYoutuber(1).subscribe(youtuber => this.someYoutuber = youtuber);
}

displayYoutuberItem(id: string): void{
  this.yService.singleYoutuber(parseInt(id)).subscribe(youtuber => this.someYoutuber = youtuber);
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
