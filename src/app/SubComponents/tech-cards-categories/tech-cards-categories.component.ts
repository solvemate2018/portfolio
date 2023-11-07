import { Component, Input } from '@angular/core';
import { TechCard } from 'src/app/interfaces/TechCard';

@Component({
  selector: 'app-tech-cards-categories',
  templateUrl: './tech-cards-categories.component.html',
  styleUrls: ['./tech-cards-categories.component.scss']
})
export class TechCardsCategoriesComponent {
  @Input() categories: Set<String> = new Set();
  @Input() techCardsGrouped: Array<TechCard[]> = [];
  flipped: boolean = false;
  public flipCards(){
    this.flipped = !this.flipped;
  }
}
