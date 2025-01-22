import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule, TranslatePipe } from "@ngx-translate/core";

@Component({
	selector: "app-privacy-policy",
	standalone: true,
	imports: [CommonModule, TranslatePipe, TranslateModule, MatIconModule],
	templateUrl: "./privacy-policy.component.html",
	styleUrl: "./privacy-policy.component.scss",
})
export class PrivacyPolicyComponent implements OnInit {
	ngOnInit(): void {
		window.scrollTo({ top: 0, behavior: "smooth" }); // Scrollt zur Oberseite
	}

	goBack(): void {
		window.history.back();
	}
}
