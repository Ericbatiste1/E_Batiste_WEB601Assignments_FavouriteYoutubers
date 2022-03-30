import { Component, Input, OnInit } from '@angular/core';
import { YoutubersServiceService } from './services/youtubers-service.service';
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
  this.getYoutubers();
}

getYoutubers(): void{
  this.yService.getYoutubers().subscribe(youtubersArray => this.someYoutuber = youtubersArray);
  this.yService.singleYoutuber(0).subscribe(singleYoutuber => this.filteredYoutuber = singleYoutuber);
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

updateYoutubers(contentItem: Youtubers): void{
  this.yService.updateContent(contentItem).subscribe(() => {
    console.log("Content has been updated");
    this.getYoutubers();
  });
}

newYoutuberList(newYoutuberChild: Youtubers): void{
  this.yService.addContent(newYoutuberChild).subscribe(newYoutuberFromServer => {
    console.log('New Youtuber from the server', newYoutuberFromServer);
    this.someYoutuber.push(newYoutuberFromServer);
    this.someYoutuber = [...this.someYoutuber];
  });
}

}
