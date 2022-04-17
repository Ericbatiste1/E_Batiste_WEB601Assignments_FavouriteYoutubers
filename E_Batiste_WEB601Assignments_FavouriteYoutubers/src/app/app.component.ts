import { Component, Input, OnInit } from '@angular/core';
import { YoutubersServiceService } from './services/youtubers-service.service';
import { Youtubers } from './helper-files/Youtubers';
import { LogUpdateService } from './services/log-update.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top YouTubers';
  someYoutuber: Youtubers[] = [];
  filteredYoutuber : Youtubers[] = [];

  constructor(private logService: LogUpdateService) { 
   
}

ngOnInit(): void{
}


}
