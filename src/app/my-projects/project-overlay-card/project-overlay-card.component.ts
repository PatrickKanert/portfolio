import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../models/project.model';


@Component({
  selector: 'app-project-overlay-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './project-overlay-card.component.html',
  styleUrl: './project-overlay-card.component.scss',
})
export class ProjectOverlayCardComponent {
  @Input() project?: Project;

  @Output() close = new EventEmitter<void>();

  closeOverlay(): void {
    this.close.emit();
  }


}
