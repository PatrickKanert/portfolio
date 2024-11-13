import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  sliderItems = [
    'Frontend Developer',
    'Based in Munich',
    'Available for remote work',
    'Open to work',
  ];
}
