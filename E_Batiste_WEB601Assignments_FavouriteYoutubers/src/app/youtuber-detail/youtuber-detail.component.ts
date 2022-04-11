import { Component, OnInit } from '@angular/core';
import { YoutubersServiceService } from '../services/youtubers-service.service';
import { Youtubers } from '../helper-files/Youtubers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-youtuber-detail',
  templateUrl: './youtuber-detail.component.html',
  styleUrls: ['./youtuber-detail.component.scss']
})
export class YoutuberDetailComponent implements OnInit {
  youtubers?: Youtubers;
  youtuber?: Youtubers[] = [];
  id?: number;
  


  constructor(private route: ActivatedRoute, private youtubersService: YoutubersServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? "0");
      this.youtubersService.getYoutubers(this.id).subscribe(
        (y) => {
          this.youtuber = y;
        });
    });
  }

  clicked() {
    if (this.youtubers != null) {
      console.log(`Title: '${this.youtubers.title}' \nId: '${this.youtubers.id}'`);
    }
  }

}
