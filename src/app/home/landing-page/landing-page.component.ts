import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-landing-page",
	standalone: true,
	imports: [CommonModule, TranslatePipe],
	templateUrl: "./landing-page.component.html",
	styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent {
	sliderItems: string[] = [];
	isSmallScreen: boolean = window.innerWidth <= 599;

	constructor(private translate: TranslateService) {
		this.updateSliderItems();
		this.translate.onLangChange.subscribe(() => this.updateSliderItems());
	}

	private updateSliderItems() {
		this.translate
			.get([
				"LANDING.FRONTEND_DEVELOPER",
				"LANDING.BASED_NEAR",
				"LANDING.REMOTE_WORK",
				"LANDING.OPEN_TO_WORK",
			])
			.subscribe((translations) => {
				this.sliderItems = [
					translations["LANDING.FRONTEND_DEVELOPER"],
					translations["LANDING.BASED_NEAR"],
					translations["LANDING.REMOTE_WORK"],
					translations["LANDING.OPEN_TO_WORK"],
				];
			});
	}

	scrollTo(sectionId: string): void {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	@HostListener("window:resize", ["$event"])
	onResize(event: Event): void {
		this.isSmallScreen = window.innerWidth <= 599;
	}
}
