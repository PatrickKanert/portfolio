import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatIconModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  projects = [
    {
      id: 'join',
      title: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      image: 'assets/img/projects/join.png',
      customClass: 'top',
    },
    {
      id: 'el-pollo-loco',
      title: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/img/projects/el-pollo-loco.png',
      customClass: 'middle',
    },
    {
      id: 'da-bubble',
      title: 'DA Bubble',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: 'assets/img/projects/da-bubble.png',
      customClass: 'bottom',
    },
  ];

  activeProject: string | null = null;

  setActiveProject(project: string | null): void {
    this.activeProject = project;
  }
}
