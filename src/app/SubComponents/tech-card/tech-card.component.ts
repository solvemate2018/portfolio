import { Component, Input } from '@angular/core';
import { TechCard } from 'src/app/interfaces/TechCard';

@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.scss'],
})
export class TechCardComponent {
  @Input() techCard!: TechCard;
  @Input() rotated!: Boolean;
}
