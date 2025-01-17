import {
	animate,
	state,
	style,
	transition,
	trigger,
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
	selector: "app-skills",
	standalone: true,
	imports: [CommonModule, TranslatePipe],
	templateUrl: "./skills.component.html",
	styleUrl: "./skills.component.scss",
	animations: [
		trigger("fadeInLeft", [
			state("hidden", style({ opacity: 0, transform: "translateX(-150px)" })), // Startzustand
			state("visible", style({ opacity: 1, transform: "translateX(0)" })), // Endzustand
			transition("hidden => visible", animate("500ms ease-in-out")), // Animation
		]),
		trigger("fadeInRight", [
			state("hidden", style({ opacity: 0, transform: "translateX(150px)" })), // Startzustand
			state("visible", style({ opacity: 1, transform: "translateX(0)" })), // Endzustand
			transition("hidden => visible", animate("500ms ease-in-out")), // Animation
		]),
	],
})
export class SkillsComponent {
	skills = [
		{ name: "HTML", icon: "assets/img/skill-icons/html.png" },
		{ name: "CSS", icon: "assets/img/skill-icons/css.png" },
		{ name: "JavaScript", icon: "assets/img/skill-icons/js.png" },
		{
			name: "Material Design",
			icon: "assets/img/skill-icons/material-design.png",
		},
		{ name: "TypeScript", icon: "assets/img/skill-icons/ts.png" },
		{ name: "Angular", icon: "assets/img/skill-icons/angular.png" },
		{ name: "Firebase", icon: "assets/img/skill-icons/firebase.png" },
		{ name: "GIT", icon: "assets/img/skill-icons/git.png" },
		{ name: "Rest-Api", icon: "assets/img/skill-icons/api.png" },
		{ name: "Scrum", icon: "assets/img/skill-icons/scrum.png" },
	];

	interestedSkills = [
		{ name: "React", icon: "assets/img/skill-icons/react-icon.svg" },
		{ name: "Vue Js", icon: "assets/img/skill-icons/vue.svg" },
	];

	fadeIn = "hidden";

	constructor(private el: ElementRef) {}

	@HostListener("window:scroll", ["$event"])
	onScroll() {
		const rect = this.el.nativeElement.getBoundingClientRect();
		if (rect.top < window.innerHeight * 0.8) {
			this.fadeIn = "visible";
		}
	}

	scrollTo(sectionId: string): void {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}
}
