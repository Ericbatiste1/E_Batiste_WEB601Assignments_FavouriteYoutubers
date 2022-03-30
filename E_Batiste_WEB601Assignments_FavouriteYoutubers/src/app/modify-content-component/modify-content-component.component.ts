import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Youtubers } from '../helper-files/Youtubers';
import { YoutubersServiceService } from '../services/youtubers-service.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  youtuber?: Youtubers;
  @Output() youtuberEvent: EventEmitter<Youtubers> = new EventEmitter<Youtubers>();
  @Output() updateYoutuberEvent: EventEmitter<Youtubers> = new EventEmitter<Youtubers>();
  constructor(private youtubersService: YoutubersServiceService) { }

  ngOnInit(): void {
  }

  addYoutuber(title: string, desc: string, creator: string, imgurl: string, type: string, tags: string){

    this.youtuber = {
      title: title,
      description: desc,
      creator: creator,
      imgURL: imgurl,
      type: type,
      tags: tags.split(',')
    }
    this.youtuberEvent.emit(this.youtuber);
  }

  updateYoutubers(title: string, desc: string, creator: string, imgurl: string, type: string, tags: string){
    this.youtuber = {
      title: title,
      description: desc,
      creator: creator,
      imgURL: imgurl,
      type: type,
      tags: tags.split(',')
    }
    this.updateYoutuberEvent.emit(this.youtuber);
  }

  }


