import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Social } from '../interfaces/Social';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
})
export class AppFooterComponent implements OnInit {
  socials: Social[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.socials = this.dataService.getSocials();
  }
}
