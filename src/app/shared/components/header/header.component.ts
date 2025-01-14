import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [CommonModule, MatSlideToggleModule, TranslatePipe],
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	constructor(private translate: TranslateService) {
		this.translate.addLangs(["de", "en"]);
		this.translate.setDefaultLang("en");
	}

	toggleLanguage(event: Event) {
		const checked = (event.target as HTMLInputElement).checked;
		this.translate.use(checked ? "de" : "en"); // Sprache umschalten
	}

	scrollTo(sectionId: string): void {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}
}
