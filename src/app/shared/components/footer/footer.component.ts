import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [CommonModule, TranslatePipe, RouterModule],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.scss",
})
export class FooterComponent {
	scrollToTop(): void {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Optional: Smooth scrolling
		});
	}

	ngOnInit(): void {
		window.scrollTo({ top: 0, behavior: "smooth" }); // Scrollt zur Oberseite
	}
}
