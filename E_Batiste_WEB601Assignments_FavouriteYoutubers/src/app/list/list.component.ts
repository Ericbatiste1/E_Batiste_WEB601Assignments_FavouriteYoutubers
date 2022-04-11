import { Component, Input, OnInit } from '@angular/core';
import { YoutubersServiceService } from '../services/youtubers-service.service';
import { Youtubers } from '../helper-files/Youtubers';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  someYoutuber: Youtubers[] = [];
  filteredYoutuber: Youtubers[] = [];
  constructor(private youtubersService: YoutubersServiceService, public messageService: MessageService ) { }

  ngOnInit(): void{
    this.getYoutubers();
  }
  
  getYoutubers(): void{
    this.youtubersService.getYoutubers().subscribe(youtubersArray => this.someYoutuber = youtubersArray);
    this.youtubersService.singleYoutuber(0).subscribe(singleYoutuber => this.filteredYoutuber = singleYoutuber);
  }
  
  displayYoutuberItem(id: string): void{
    this.youtubersService.singleYoutuber(parseInt(id)).subscribe(youtuber => this.someYoutuber = youtuber);
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
    this.youtubersService.updateContent(contentItem).subscribe(() => {
      console.log("Content has been updated");
      this.getYoutubers();
    });
  }
  
  newYoutuberList(newYoutuberChild: Youtubers): void{
    this.youtubersService.addContent(newYoutuberChild).subscribe(newYoutuberFromServer => {
      console.log('New Youtuber from the server', newYoutuberFromServer);
      this.someYoutuber.push(newYoutuberFromServer);
      this.someYoutuber = [...this.someYoutuber];
    });
  }

}
