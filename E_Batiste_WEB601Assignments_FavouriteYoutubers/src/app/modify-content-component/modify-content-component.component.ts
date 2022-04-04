import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { Youtubers } from '../helper-files/Youtubers';
import { YoutubersServiceService } from '../services/youtubers-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  youtuber?: Youtubers;
  data: any;
  @Output() youtuberEvent: EventEmitter<Youtubers> = new EventEmitter<Youtubers>();
  @Output() updateYoutuberEvent: EventEmitter<Youtubers> = new EventEmitter<Youtubers>();
  constructor(public dialog: MatDialog) { }
  

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModifyContent, {
      width: '600px',
      height: '600px',
      data: {}
    });

    dialogRef.componentInstance.mClose.subscribe(data => {this.addNewYoutuber(data);
    });
  }

    addNewYoutuber(data: Youtubers) {
      console.log(data);
      this.youtuber = {
        title: data.title,
        description: data.description,
        creator: data.creator,
        imgURL: data.imgURL,
        type: data.type,
        tags: data.tags
      }
      this.youtuberEvent.emit(this.youtuber);
    }

  updateYoutubers(data: Youtubers){
    this.youtuber = {
      title: data.title,
      description: data.description,
      creator: data.creator,
      imgURL: data.imgURL,
      type: data.type,
      tags: data.tags
    }
    this.updateYoutuberEvent.emit(this.youtuber);
  }
}
  
  @Component({
    selector: 'modify-content',
    templateUrl: './modify-content.html',
    styleUrls: ['./modify-content-component.component.scss']
  })
  export class ModifyContent {
    mClose = new EventEmitter();
    youtuber?: Youtubers;
    constructor(public dialogRef: MatDialogRef<ModifyContent>, @Inject(MAT_DIALOG_DATA) public data: Youtubers) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    newYoutuber(title: string, desc: string, creator: string, imgurl: string, type: string, tags: string) {
      this.youtuber = {
        title: title,
        description: desc,
        creator: creator,
        imgURL: imgurl,
        type: type,
        tags: tags.split(",")
      }
  
      this.dialogRef.close(this.youtuber);
      this.dialogRef.afterClosed().subscribe(data => {
        this.data = data;
        this.mClose.emit(this.data);
        console.log(this.data);
      });
    }

  }

