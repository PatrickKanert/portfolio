import {
	animate,
	state,
	style,
	transition,
	trigger,
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { RouterModule } from "@angular/router";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [
		CommonModule,
		MatSlideToggleModule,
		TranslatePipe,
		RouterModule,
		MatIconModule,
	],
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
	animations: [
		trigger("openClose", [
			state("closed", style({ opacity: 0, transform: "translateX(100%)" })),
			state("open", style({ opacity: 1, transform: "translateX(0)" })),
			transition("closed <=> open", [animate("300ms ease-in-out")]),
		]),
	],
})
export class HeaderComponent {
	isSmallScreen: boolean = window.innerWidth <= 799;
	isMenuOpen = false;
	isGerman = false;

	constructor(private translate: TranslateService) {
		this.translate.addLangs(["de", "en"]);
		const savedLang = localStorage.getItem("lang") || "en";
		this.translate.setDefaultLang(savedLang);
		this.isGerman = savedLang === "de";
	}

	toggleLanguage(): void {
		this.isGerman = !this.isGerman;
		const newLang = this.isGerman ? "de" : "en";
		this.translate.use(newLang);
		localStorage.setItem("lang", newLang); // Sprache speichern
	}

	@HostListener("window:resize", ["$event"])
	onResize(): void {
		this.isSmallScreen = window.innerWidth <= 799;
	}

	toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}

	closeMenu(): void {
		this.isMenuOpen = false; // Schließt das Menü, wenn ein Link angeklickt wird
	}
}
