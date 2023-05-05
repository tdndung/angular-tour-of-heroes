import { Component, OnInit } from '@angular/core';
import {Task} from "@doist/todoist-api-typescript/dist/types/entities";
import { TodoistApi } from "@doist/todoist-api-typescript"
import { Observable, combineLatest, from } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']

})
export class NoteListComponent implements OnInit{
  token = 'd7c4ce06a5b68eebfb111def4d61fa5ff1e97619';
  projectId = '2312307767'
  api = new TodoistApi(this.token)
  uncompletedTasks$?: Observable<Task[]>;
  completedTasks$?: Observable<Task[]>;
  allTasks: Task[] = [];
  constructor() { }

  ngOnInit(): void {
    this.uncompletedTasks$ = from(this.getUncompletedTasks());
    this.completedTasks$ = from(this.getCompletedTasks());
   
    combineLatest(this.uncompletedTasks$, this.completedTasks$).subscribe(([uncompleteTasks, completedTask]) => {
      completedTask.forEach(a => a.isCompleted = true);
      this.allTasks = [...uncompleteTasks, ...completedTask];
      console.log(this.allTasks);
    });
  }

  async getUncompletedTasks() {
    return await this.api.getTasks({projectId: this.projectId}).then(res => {
      return res;
    });
  }

  getCompletedTasks() {
    return fetch(`https://todoist.com/API/v9.0/archive/items?project_id=${this.projectId}&limit=20&token=${this.token}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${this.token }`
      }
    })
    .then(response =>  response.json())
    .then(response => response.items)
    .catch(console.log);
  }

}
