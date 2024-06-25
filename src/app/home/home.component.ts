import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  images: string[] = ['assets/slide1.jpg','assets/slide2.jpg', 'assets/slide3.jpg'];
  currentIndex = 0;
  translateValue = 0; 

  constructor(private router: Router) { 

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