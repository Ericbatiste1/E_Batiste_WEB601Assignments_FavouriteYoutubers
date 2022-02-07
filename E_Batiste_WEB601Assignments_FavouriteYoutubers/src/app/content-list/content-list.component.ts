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
      imgURL: "https://i.guim.co.uk/img/media/9d9759a25269ff4dd7f4c41bde320c4928bdfb65/0_24_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e4916223d76a56180788e7bfc1d25b02",
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
      imgURL: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/0a/NA_Tyler1_2019_AS.png/revision/latest/scale-to-width-down/220?cb=20201010055827",
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
