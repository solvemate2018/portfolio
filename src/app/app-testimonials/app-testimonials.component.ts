import { Component, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { Testimonial } from '../interfaces/Testimonial';

@Component({
  selector: 'app-testimonials',
  templateUrl: './app-testimonials.component.html',
  styleUrls: ['./app-testimonials.component.scss'],
})
export class AppTestimonialsComponent {
  testimonials: Testimonial[] = [];
  showControls: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.testimonials = this.dataService.getTestimonials();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
      // Update screen size on window resize
      this.checkScreenSize();
  }

  private checkScreenSize() {
    const width = window.innerWidth;

    if (width < 768) {
        this.showControls = false;
    } else if (width >= 768 && width < 1024) {
        this.showControls = false;
    } else {
        this.showControls = true;
    }
}
}
