import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TechCard } from '../interfaces/TechCard';

@Component({
  selector: 'app-about',
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.scss'],
})
export class AppAboutComponent implements OnInit {
  techCards: TechCard[] = [];
  categories: Set<String> = new Set();
  techCardsGrouped: Array<TechCard[]> = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.techCards = this.dataService.getTechCards();
    let groupCounter: number = 0;
    let cardsCounter: number = 0;

    this.techCards.forEach((card, index) => {
      this.categories.add(card.category);

      if (index == 0) {
        this.techCardsGrouped[groupCounter] = [card];
        cardsCounter += 1;
      } else {
        if (
          this.techCardsGrouped[groupCounter][
            this.techCardsGrouped[groupCounter].length - 1
          ].category == card.category
        ) {
          if (cardsCounter == 3) {
            groupCounter += 1;
            this.techCardsGrouped[groupCounter] = [card];
            cardsCounter = 1;
          } else {
            this.techCardsGrouped[groupCounter].push(card);
            cardsCounter++;
          }
        } else {
          groupCounter += 1;
          this.techCardsGrouped[groupCounter] = [card];
          cardsCounter = 1;
        }
      }
    });
  }
}
