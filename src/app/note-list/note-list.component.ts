import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Task} from "@doist/todoist-api-typescript/dist/types/entities";
import {TodoistApi} from "@doist/todoist-api-typescript"
import {Observable, combineLatest, from} from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']

})
export class NoteListComponent  {


}
