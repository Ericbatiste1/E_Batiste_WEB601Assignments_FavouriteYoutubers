import { Component, Output, EventEmitter } from '@angular/core';

import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() addYoutuberEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newYoutuber?: Content;

  constructor() { }

  addYoutuber(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    this.newYoutuber = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(", ")
    };
    this.addYoutuberEvent.emit(this.newYoutuber);
  }



}
