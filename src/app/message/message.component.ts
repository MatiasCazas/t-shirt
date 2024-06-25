import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  nombreApellido: string = '';
  date: string = '';
  horario: string = '';
  meetingType: string = 'meet';
  email: string = '';
  telefono: string = '';

  constructor() {}

  onMeetingTypeChange(): void {
    this.email = '';
    this.telefono = '';
  }

  onSubmit(): void {
    if (this.meetingType === 'meet') {
      console.log('Meet details:', {
        nombreApellido: this.nombreApellido,
        date: this.date,
        horario: this.horario,
        email: this.email
      });
    } else if (this.meetingType === 'call') {
      console.log('Call details:', {
        nombreApellido: this.nombreApellido,
        date: this.date,
        horario: this.horario,
        telefono: this.telefono
      });
    }
  }
}
