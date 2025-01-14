import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
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
			liveTestUrl: "#",
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
			liveTestUrl: "#",
		},
		{
			id: "da_bubble",
			index: 3,
			title: "DA Bubble",
			description:
				"This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
			technologies: [
				{ name: "Angular", imgUrl: "assets/img/tech/angular.png" },
				{ name: "Firebase", imgUrl: "assets/img/tech/firebase.png" },
				{ name: "TypeScript", imgUrl: "assets/img/tech/ts.png" },
			],
			image: "assets/img/projects/da-bubble.png",
			customClass: "bottom",
			githubUrl: "#",
			liveTestUrl: "#",
		},
	];

	hoveredProject: string | null = null;
	activeProject: string | null = null;

	setHoveredProject(projectId: string | null): void {
		this.hoveredProject = projectId;
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
		const active = this.projects.find((p) => p.id === this.activeProject);
		return active;
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
