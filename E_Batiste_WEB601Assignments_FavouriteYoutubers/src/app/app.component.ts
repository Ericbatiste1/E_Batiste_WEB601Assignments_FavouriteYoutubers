import { Component, Input, OnInit } from '@angular/core';

import { Content } from './helper-files/content-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top YouTubers';
  @Input() contentItem?: Content;
  coolYoutubers: Content[];

  constructor() { 
    this.coolYoutubers = [{
      id: 0,
      title: "PewDiePie",
      description: "Most famous youtuber in subscriptions.",
      creator: "Himself",
      imgURL: "https://static.onecms.io/wp-content/uploads/sites/20/2016/12/pewdiepie-435.jpg",
      type: "Youtube",
      tags: ["GOAT", "1 Subscribers"],
      subscriberNumber: 111000000
      
    },
    {
      id: 1,
      title: "MrBeast",
      description: "Very creative youtuber, puts millions earned on youtube back into his own videos.",
      creator: "Himself",
      imgURL: "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg",
      type: "Youtube",
      tags: ["Highest Paid Youtuber", "Entertaining"],
      subscriberNumber: 90000000
    },
    {
      id: 2,
      title: "Tyler1",
      description: "Gaming youtuber/streamer.",
      creator: "Himself",
      imgURL: "https://celebily.com/wp-content/uploads/2020/04/Tyler1-Bio.jpg",
      type: "Streamer",
      subscriberNumber: 2750000
    },
    {
      id: 3,
      title: "xQc",
      description: "Streamer/youtuber gamer.",
      creator: "Himself",
      imgURL: "https://pbs.twimg.com/profile_images/1188911868863221772/fpcyKuIW_400x400.jpg",
      type: "Streamer",
      subscriberNumber: 2000000
    },
    {
      id: 4,
      title: "Sidemen",
      description: "Youtube group of 7 friends",
      creator: "KSI",
      imgURL: "https://i.pinimg.com/736x/66/c8/a2/66c8a282161e564617bebade6227ca7b.jpg",
      type: "Youtube",
      tags: ["Group", "UK"],
      subscriberNumber: 14300000
    },
    {
      id: 5,
      title: "hJune",
      description: "Streamer/youtuber.",
      creator: "Himself",
      imgURL: "https://yt3.ggpht.com/ytc/AKedOLTUOWf8oIrT8ysdH50UKufolkN-vDK-PekH5LunFA=s900-c-k-c0x00ffffff-no-rj",
      type: "Streamer",
      tags: ["Rust", "League", "OfflineTV"],
      subscriberNumber: 421000
    },
    {
      id: 6,
      title: "Shroud",
      description: "Twitch Streamer",
      creator: "Himself",
      imgURL: "https://www.dexerto.com/wp-content/uploads/2021/09/03/Dexerto-Header-3.jpg",
      type: "Streamer",
      tags: ["Pro Player", "CSGO", "Valorant", "Warzone"],
      subscriberNumber: 6800000
    }];
}


}
