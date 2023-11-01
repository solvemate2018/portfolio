import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Testimonial } from '../interfaces/Testimonial';

@Component({
  selector: 'app-testimonials',
  templateUrl: './app-testimonials.component.html',
  styleUrls: ['./app-testimonials.component.scss'],
})
export class AppTestimonialsComponent {
  testimonials: Testimonial[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.testimonials = this.dataService.getTestimonials();
  }
}
