import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  constructor() { 
    const documentRef: Document = document;
    const selectProvincias: HTMLElement | null = documentRef.getElementById("selectProvincias");
    const selectMunicipio: HTMLElement | null = documentRef.getElementById("selectMunicipio");

    function provincias(): void {
      const selectProvincias: HTMLElement | null = documentRef.getElementById("selectProvincias");

      fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then((res: Response) => res.ok ? res.json() : Promise.reject(res))
      .then((json: any) => {
            let optionsString: string = `<option value="Elige una provincia">Elige una provincia</option>`;

            json.provincias.forEach((element: any) => {
                optionsString += `<option value="${element.nombre}">${element.nombre}</option>`;
            });

            if (selectProvincias) {
                selectProvincias.innerHTML = optionsString;
            }

            console.log(json.provincias);
        });
  }

  documentRef.addEventListener("DOMContentLoaded", provincias);
  function municipios(): void {
    const selectMunicipios: HTMLElement | null = documentRef.getElementById("selectMunicipios");

    fetch(`https://apis.datos.gob.ar/georef/api/municipios`)
    .then((res: Response) => res.ok ? res.json() : Promise.reject(res))
    .then((json: any) => {
          let optionsString: string = `<option value="Elige un municipio">Elige un municipio</option>`;

          json.municipios.forEach((element: any) => {
              optionsString += `<option value="${element.id}">${element.nombre}</option>`;
          });

          if (selectMunicipios) {
            selectMunicipios.innerHTML = optionsString;
          }

          console.log(json.provincias);
      });
}

documentRef.addEventListener("DOMContentLoaded", municipios);


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