import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-customization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customization.component.html',
  styleUrl: './customization.component.css'
})
export class CustomizationComponent implements OnInit{
  @ViewChild('asReverseButton') buttonReverse!: ElementRef;
  @ViewChild('asFrenteImg') frenteImg!: ElementRef;
  @ViewChild('asDorsoImg') dorsoImg!: ElementRef;
  @ViewChild('asColor') color!: ElementRef;
  @ViewChild('asColorRed') colorRed!: ElementRef;
  @ViewChild('asColorVioleta') colorVioleta!: ElementRef;
  @ViewChild('asDeleteButton') buttonDelete!:ElementRef;
  @ViewChild('asColorGreen') colorGreen!: ElementRef;
  @ViewChild('asColorCeleste') colorCeleste!: ElementRef;
  @ViewChild('asMangasFrente') mangasFrente!: ElementRef;
  @ViewChild('asMangasDorso') mangasDorso!: ElementRef;
  @ViewChild('asEstampados') estampados!: ElementRef;
  @ViewChild('asDiseñador') diseñador!: ElementRef;
  @ViewChild('asDiseñadorBuzos') diseñadorBuzos!: ElementRef;

  constructor(private renderer2: Renderer2) {}
  
  ngOnInit(): void {
  }

  comenzar(): void{
    const asDiseñador = this.diseñador.nativeElement;
    const asDiseñadorBuzos = this.diseñadorBuzos.nativeElement; 
    if (asDiseñadorBuzos.getAttribute('hidden')) {
      this.renderer2.removeAttribute(asDiseñadorBuzos, 'hidden');
      this.renderer2.setAttribute(asDiseñador, 'hiiden', 'true');
    } else {
      this.renderer2.removeAttribute(asDiseñadorBuzos, 'hidden');
      this.renderer2.setAttribute(asDiseñador, 'hidden', 'true');
    }
  }

  reverse(): void{
    const asFrenteImg = this.frenteImg.nativeElement;
    const asDorsoImg = this.dorsoImg.nativeElement;
    if (asDorsoImg.getAttribute('hidden')) {
      this.renderer2.removeAttribute(asDorsoImg, 'hidden')
      this.renderer2.setAttribute(asFrenteImg, 'hidden', 'true');
    }else{
      this.renderer2.removeAttribute(asFrenteImg, 'hidden');
      this.renderer2.setAttribute(asDorsoImg, 'hidden', 'true');
    }
  

  }

  paint(color: string): void {
    const asFrenteImg = this.frenteImg.nativeElement;
    const asDorsoImg = this.dorsoImg.nativeElement;
    const paintColor = this.renderer2.createText(color);
    if (asFrenteImg.getAttribute('hidden')) {
      this.renderer2.setStyle(asDorsoImg, 'background-color', color);
    } else {
      this.renderer2.setStyle(asFrenteImg, 'background-color', color);
    }
  }


  deleteDesing(): void{
    const asFrenteImg = this.frenteImg.nativeElement;
    const asDorsoImg = this.dorsoImg.nativeElement;
    this.renderer2.setStyle(asFrenteImg, 'background-color', 'white');    
    this.renderer2.setStyle(asDorsoImg, 'background-color', 'white');
    this.renderer2.setStyle(asFrenteImg, 'background-image', 'none');
    this.renderer2.setStyle(asDorsoImg, 'background-image', 'none');

    }

    mangasFrenteCall(): void{
      const asMangasFrente = this.mangasFrente.nativeElement;
      const asMangasDorso = this.mangasDorso.nativeElement;
      if(asMangasFrente.getAttribute('hidden')){
        this.renderer2.removeAttribute(asMangasFrente, 'hidden');
      }else{
        this.renderer2.setAttribute(asMangasFrente, 'hidden', 'true')
      }
    }

    estampadosW(): void{
      const asDorsoImg = this.dorsoImg.nativeElement;
      const asFrenteImg = this.frenteImg.nativeElement;
      if (asFrenteImg.getAttribute('hidden')) {
        this.renderer2.setStyle(asDorsoImg, 'background-image', "url('assets/textura1.jpg')");
      } else {
        this.renderer2.setStyle(asFrenteImg, 'background-image', "url('assets/textura1.jpg')");
      }

    }
}
