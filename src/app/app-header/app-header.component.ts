import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route } from '../interfaces/Route';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  routesList: Route[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.routesList = this.dataService.getRoutes();
  }
}
