import {
	animate,
	state,
	style,
	transition,
	trigger,
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { TranslatePipe } from "@ngx-translate/core";
import type { Project } from "../../models/project.model";
import { ProjectOverlayCardComponent } from "./project-overlay-card/project-overlay-card.component";

@Component({
	selector: "app-my-projects",
	standalone: true,
	imports: [
		CommonModule,
		TranslatePipe,
		MatIconModule,
		ProjectOverlayCardComponent,
	],
	templateUrl: "./my-projects.component.html",
	styleUrl: "./my-projects.component.scss",
	animations: [
		trigger("fadeInLeft", [
			state("hidden", style({ opacity: 0, transform: "translateX(-150px)" })),
			state("visible", style({ opacity: 1, transform: "translateX(0)" })),
			transition("hidden => visible", animate("500ms ease-in-out")),
		]),
		trigger("fadeInRight", [
			state("hidden", style({ opacity: 0, transform: "translateX(150px)" })),
			state("visible", style({ opacity: 1, transform: "translateX(0)" })),
			transition("hidden => visible", animate("500ms ease-in-out")),
		]),
	],
})
export class MyProjectsComponent {
	projects: Project[] = [
		{
			id: "join",
			index: 1,
			title: "Join",
			description:
				"Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
			technologies: [
				{ name: "HTML", imgUrl: "assets/img/tech/html.png" },
				{ name: "CSS", imgUrl: "assets/img/tech/css.png" },
				{ name: "JavaScript", imgUrl: "assets/img/tech/js.png" },
				{ name: "Firebase", imgUrl: "assets/img/tech/firebase.png" },
			],
			image: "assets/img/projects/join.png",
			customClass: "top",
			githubUrl: "https://github.com/Patrick-Gogolin/JOIN",
			liveTestUrl: "https://patrick-kanert.com/JOIN/index.html",
		},
		{
			id: "el_pollo_loco",
			index: 2,
			title: "El Pollo Loco",
			description:
				"Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
			technologies: [
				{ name: "HTML", imgUrl: "assets/img/tech/html.png" },
				{ name: "CSS", imgUrl: "assets/img/tech/css.png" },
				{ name: "JavaScript", imgUrl: "assets/img/tech/js.png" },
			],
			image: "assets/img/projects/el-pollo-loco.png",
			customClass: "middle",
			githubUrl: "https://github.com/PatrickKanert/ElPoloLoco",
			liveTestUrl: "https://patrick-kanert.com/ElPolloLoco/index.html",
		},
		// {
		// 	id: "da_bubble",
		// 	index: 3,
		// 	title: "DA Bubble",
		// 	description:
		// 		"This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
		// 	technologies: [
		// 		{ name: "Angular", imgUrl: "assets/img/tech/angular.png" },
		// 		{ name: "Firebase", imgUrl: "assets/img/tech/firebase.png" },
		// 		{ name: "TypeScript", imgUrl: "assets/img/tech/ts.png" },
		// 	],
		// 	image: "assets/img/projects/da-bubble.png",
		// 	customClass: "bottom",
		// 	githubUrl: "#",
		// 	liveTestUrl: "#",
		// },
	];

	hoveredProject: string | null = null;
	activeProject: string | null = null;
	isLargeScreen: boolean = window.innerWidth > 1370;
	fadeIn = "hidden";

	private resizeTimeout: ReturnType<typeof setTimeout> | null = null;

	constructor(private el: ElementRef) {}

	@HostListener("window:scroll", ["$event"])
	onScroll() {
		const rect = this.el.nativeElement.getBoundingClientRect();
		if (rect.top < window.innerHeight * 0.8) {
			this.fadeIn = "visible";
		}
	}

	@HostListener("window:resize", ["$event"])
	onResize(): void {
		if (this.resizeTimeout !== null) {
			clearTimeout(this.resizeTimeout);
		}
		this.resizeTimeout = setTimeout(() => {
			this.isLargeScreen = window.innerWidth > 1370;
		}, 100);
	}

	@HostListener("document:keydown.escape", ["$event"])
	onEscape(): void {
		this.setActiveProject(null);
	}

	setHoveredProject(projectId: string | null): void {
		if (this.isLargeScreen) {
			this.hoveredProject = projectId;
		}
	}

	setActiveProject(projectId: string | null): void {
		this.activeProject = projectId;
		if (projectId) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}

	getActiveProject(): Project | undefined {
		return this.projects.find((p) => p.id === this.activeProject);
	}

	nextProject(): void {
		if (!this.activeProject) {
			this.activeProject = this.projects[0].id;
			return;
		}

		const currentIndex = this.projects.findIndex(
			(p) => p.id === this.activeProject,
		);
		const nextIndex = (currentIndex + 1) % this.projects.length;
		this.activeProject = this.projects[nextIndex].id;
	}
}
