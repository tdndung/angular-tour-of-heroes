import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const notes = [
      { id: 1, name: 'Implement responsive design for a new landing page using HTML, CSS, and JavaScript' },
      { id: 2, name: 'Debug and fix cross-browser compatibility issues in the latest feature developed for the web application' },
      { id: 3, name: 'Collaborate with the design team to integrate UI/UX designs into the front-end codebase' },
      { id: 4, name: 'Optimize website performance by minifying CSS and JavaScript files, and optimizing image assets' },
      { id: 5, name: 'Conduct code reviews for peers pull requests and provide constructive feedback for improvements' },
      { id: 6, name: 'Develop a new RESTful API endpoint to support a feature requested by the front-end team.' },
      { id: 7, name: 'Refactor existing Java classes to improve code readability and maintainability.' },
      // { id: 8, name: 'Write unit tests using JUnit for critical components of the application to ensure code quality.' },
      // { id: 9, name: 'Create wireframes and mockups for a new feature requested by the product team, considering user experience and interface design principles' },
      // { id: 10, name: 'Iterate on existing UI designs based on feedback from stakeholders and usability testing results.' },
      // { id: 11, name: 'Collaborate with developers to ensure design feasibility and provide assets in the required formats.' },
    ];
    return {notes};
  }

}
