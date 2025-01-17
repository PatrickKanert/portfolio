import {
	animate,
	state,
	style,
	transition,
	trigger,
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
	selector: "app-about-me",
	standalone: true,
	imports: [CommonModule, TranslateModule],
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"],
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
export class AboutMeComponent {
	isHovered = false;
	fadeIn = "hidden";

	constructor(private el: ElementRef) {}

	@HostListener("window:scroll", ["$event"])
	onScroll() {
		const rect = this.el.nativeElement.getBoundingClientRect();
		if (rect.top < window.innerHeight * 0.8) {
			this.fadeIn = "visible";
		}
	}

	onMouseEnter() {
		this.isHovered = true;
	}

	onMouseLeave() {}
}
