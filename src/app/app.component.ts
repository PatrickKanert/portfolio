import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from "./contact/contact.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { HeaderComponent } from './shared/components/header/header.component';
import { SkillsComponent } from './skills/skills.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    LandingPageComponent,
    AboutMeComponent,
    SkillsComponent,
    MyProjectsComponent,
    ContactComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
