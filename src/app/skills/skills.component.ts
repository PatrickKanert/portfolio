import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
	selector: "app-skills",
	standalone: true,
	imports: [CommonModule, TranslatePipe],
	templateUrl: "./skills.component.html",
	styleUrl: "./skills.component.scss",
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
}
