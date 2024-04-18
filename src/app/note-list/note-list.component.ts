import {Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {Task} from "@doist/todoist-api-typescript/dist/types/entities";
import {TodoistApi} from "@doist/todoist-api-typescript"
import {Observable, combineLatest, from} from 'rxjs';
import {Note, NoteService} from "../note.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']

})
export class NoteListComponent implements OnInit {

  public notes: Note[] = [];

  constructor(private  noteService: NoteService) {
  }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(a => this.notes = a);
  }


}
