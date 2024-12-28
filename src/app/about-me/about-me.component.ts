import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  isHovered = false;

  // Methode, die aufgerufen wird, wenn die Maus über das Bild fährt
  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    // Du kannst diese Methode leer lassen oder entfernen,
    // wenn du willst, dass der Hintergrund auch nach dem Verlassen der Maus bleibt
  }
}
