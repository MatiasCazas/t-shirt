import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teens.component.html',
  styleUrl: './teens.component.css'
})
export class TeensComponent {
  images: string[] = ['assets/Teens/slide-teens1.png','assets/slide2.jpg', 'assets/slide3.jpg'];
  currentIndex = 0;
  translateValue = 0;

  constructor(private router: Router) { 

  }
  goToCustomize(): void {
    this.router.navigate(['/customize']);
  }
  goToMessage(): void{
    this.router.navigate(['/message']);
  }

  ngOnInit(): void {
  }


  //slider
  prevSlide(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
    this.updateSlider();
  }

  nextSlide(): void {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.updateSlider();
  }

  updateSlider(): void {
    this.translateValue = -100 * this.currentIndex;
  }
}
