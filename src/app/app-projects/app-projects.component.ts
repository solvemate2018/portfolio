import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Project } from '../interfaces/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './app-projects.component.html',
  styleUrls: ['./app-projects.component.scss'],
})
export class AppProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.projects = this.dataService.getProject();
  }
}
