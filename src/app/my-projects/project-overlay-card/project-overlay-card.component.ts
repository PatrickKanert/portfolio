import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import type { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-overlay-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslateModule],
  templateUrl: './project-overlay-card.component.html',
  styleUrl: './project-overlay-card.component.scss',
})

export class ProjectOverlayCardComponent {
  @Input() project?: Project;
  @Input() projects: Project[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  closeOverlay(): void {
    this.close.emit();
  }

  nextProject(): void {
    this.next.emit();
  }
}
