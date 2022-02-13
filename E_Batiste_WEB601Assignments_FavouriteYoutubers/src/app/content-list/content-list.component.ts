import { Component, Input, OnInit } from '@angular/core';

import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent  {
  @Input() contentItem?: Content;

  constructor() { 
   
  }

  imageClicked(): void {
    console.log("ID: ", this.contentItem?.id, ", Title: ", this.contentItem?.title);
  }

}
