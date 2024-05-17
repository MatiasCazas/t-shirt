import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egresados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './egresados.component.html',
  styleUrl: './egresados.component.css'
})
export class EgresadosComponent {
  images: string[] = ['assets/Egresados/slide-egresados1.png','assets/slide2.jpg', 'assets/slide3.jpg'];
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
