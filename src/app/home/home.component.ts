import { Component } from "@angular/core";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ContactComponent } from "./contact/contact.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [
		AboutMeComponent,
		ContactComponent,
		LandingPageComponent,
		MyProjectsComponent,
		SkillsComponent,
	],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {}
