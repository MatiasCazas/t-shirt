import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {
  images: string[] = ['assets/Kids/slide-diseno1.png','assets/Kids/slide-diseno2.png', 'assets/Kids/slide-diseno3.png', 'assets/Kids/slide-diseno4.png', 'assets/Kids/slide-diseno5.png'];
  currentIndex = 0;
  translateValue = 0;

  constructor() { 

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
