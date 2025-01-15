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
})
export class HeaderComponent {
	isSmallScreen: boolean = window.innerWidth <= 799;
	isMenuOpen = false;

	constructor(private translate: TranslateService) {
		this.translate.addLangs(["de", "en"]);
		this.translate.setDefaultLang("en");
	}

	toggleLanguage(event: Event) {
		const checked = (event.target as HTMLInputElement).checked;
		this.translate.use(checked ? "de" : "en"); // Sprache umschalten
	}

	@HostListener("window:resize", ["$event"])
	onResize(event: Event): void {
		this.isSmallScreen = window.innerWidth <= 799;
	}

	toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen; // Zustand umschalten
	}
}
