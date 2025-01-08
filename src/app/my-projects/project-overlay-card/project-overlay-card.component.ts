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
  @Input() projects: Project[] = [];

  @Output() close = new EventEmitter<void>();

  closeOverlay(): void {
    this.close.emit();
  }

  nextProject(): void {
    if (!this.project || this.projects.length === 0) return;

    const currentIndex = this.projects.findIndex(p => p.id === this.project?.id);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.project = this.projects[nextIndex];
  }

}
