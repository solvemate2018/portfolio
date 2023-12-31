import { Component, Input } from '@angular/core';
import { Route } from 'src/app/interfaces/Route';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input() route!: Route;
}
