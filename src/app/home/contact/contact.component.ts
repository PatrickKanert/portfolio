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
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
	selector: "app-contact",
	standalone: true,
	imports: [CommonModule, ContactFormComponent, TranslatePipe],
	templateUrl: "./contact.component.html",
	styleUrl: "./contact.component.scss",
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
export class ContactComponent {
	fadeIn = "hidden";

	constructor(private el: ElementRef) {}

	@HostListener("window:scroll", ["$event"])
	onScroll() {
		const rect = this.el.nativeElement.getBoundingClientRect();
		if (rect.top < window.innerHeight * 0.8) {
			this.fadeIn = "visible";
		}
	}
}
