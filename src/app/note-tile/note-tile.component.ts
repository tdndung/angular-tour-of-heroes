import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-note-tile',
  templateUrl: './note-tile.component.html',
  styleUrls: ['./note-tile.component.less']
})
export class NoteTileComponent implements OnInit {

  @Input()
  public content = '';

  @Input()
  public isCompleted?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  clickDone() {
    console.log("I click on it!!")
  }
}
