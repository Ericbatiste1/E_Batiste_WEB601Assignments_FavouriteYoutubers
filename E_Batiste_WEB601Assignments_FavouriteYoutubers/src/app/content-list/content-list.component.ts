import { Component, Input, OnInit } from '@angular/core';

import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent  {
  @Input() contentItem?: Content;
  coolYoutubers: Content[];

  constructor() { 
    this.coolYoutubers = [{
      id: 0,
      title: "PewDiePie",
      description: "Most famous youtuber in subscriptions.",
      creator: "Himself",
      imgURL: "https://static.onecms.io/wp-content/uploads/sites/20/2016/12/pewdiepie-435.jpg",
      type: "Youtube"
    },
    {
      id: 1,
      title: "MrBeast",
      description: "Very creative youtuber, puts millions earned on youtube back into his own videos.",
      creator: "Himself",
      imgURL: "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg",
      type: "Youtube"
    },
    {
      id: 2,
      title: "Tyler1",
      description: "Gaming youtuber/streamer.",
      creator: "Himself",
      imgURL: "https://celebily.com/wp-content/uploads/2020/04/Tyler1-Bio.jpg",
      type: "Streamer"
    },
    {
      id: 3,
      title: "xQc",
      description: "Streamer/youtuber gamer.",
      creator: "Himself",
      imgURL: "https://pbs.twimg.com/profile_images/1188911868863221772/fpcyKuIW_400x400.jpg",
      type: "Streamer"
    },
    {
      id: 4,
      title: "Sidemen",
      description: "Youtube group of 7 friends",
      creator: "KSI",
      imgURL: "https://i.pinimg.com/736x/66/c8/a2/66c8a282161e564617bebade6227ca7b.jpg",
      type: "Youtube"
    }];
  }



}
