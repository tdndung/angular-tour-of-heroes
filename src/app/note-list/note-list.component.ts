import { Component, OnInit } from '@angular/core';
import fetch from 'node-fetch';
import {TodoistApi} from "@doist/todoist-api-typescript";
import {Task} from "@doist/todoist-api-typescript/dist/types/entities";


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']

})
export class NoteListComponent implements OnInit{

  api = new TodoistApi("d7c4ce06a5b68eebfb111def4d61fa5ff1e97619")
  tasks?: Promise<Task[]>;
  constructor() { }

  ngOnInit(): void {
    // this.api.getProjects()
    //   .then((projects) => console.log(projects))
    //   .catch((error) => console.log(error))

    this.getTasks();
  }

  async getTasks() {
    const tasks = await this.api.getTasks({projectId: "2312307767"});

    // Print the task content for each task
    tasks.forEach(task => console.log(`${task.content} - ${task.createdAt}`));
  }

}
