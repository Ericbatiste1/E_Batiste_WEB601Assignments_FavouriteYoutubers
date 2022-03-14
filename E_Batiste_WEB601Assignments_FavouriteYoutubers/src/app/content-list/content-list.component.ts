import { Component, Input, OnInit } from '@angular/core';

import { Youtubers } from '../helper-files/Youtubers';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  title = 'Top YouTubers';
  @Input() contentItem?: Youtubers;

  constructor() { 
    this.contentItem = {
      id: 0,
      title: "",
      description: "",
      creator: "",
      imgURL: "",
      type: "",
      tags: []
    }
  }

  ngOnInit(): void {
    
  }

  Clicked(){
    if(this.contentItem != null){
      console.log(`Title: '${this.contentItem.title}' \nId: '${this.contentItem.id}'`);
    }
  }

  }





