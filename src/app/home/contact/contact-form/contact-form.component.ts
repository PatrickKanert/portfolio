import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, signal } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { RouterLink } from "@angular/router";
import { TranslatePipe } from "@ngx-translate/core";
import type { ContactData } from "../../../models/contact.model";

@Component({
	selector: "app-contact-form",
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		RouterLink,
		TranslatePipe,
		MatCheckboxModule,
	],
	templateUrl: "./contact-form.component.html",
	styleUrl: "./contact-form.component.scss",
})
export class ContactFormComponent {
	private http = inject(HttpClient);

	privacyPolicyChecked = false;
	formSubmitted = signal(false);
	emailFocused = signal(false);

	contactData: ContactData = {
		name: "",
		email: "",
		message: "",
	};

	post = {
		endPoint: "https://patrick-kanert.com/sendMail.php",
		body: (payload: ContactData) => JSON.stringify(payload),
		options: {
			headers: {
				"Content-Type": "text/plain",
				responseType: "text",
			},
		},
	};

	onSubmit(ngForm: NgForm) {
		if (!ngForm.valid) return;

		this.formSubmitted.set(true);
		document.body.classList.add("no-scroll");

		this.http
			.post(this.post.endPoint, this.post.body(this.contactData))
			.subscribe({
				next: (response) => {
					console.log("Form erfolgreich gesendet:", response);
					this.resetForm(ngForm);
				},
				error: (error) => {
					console.error("Fehler beim Senden des Formulars:", error);
				},
				complete: () => {
					console.info("Formular erfolgreich verarbeitet.");
				},
			});
		setTimeout(() => this.closeDialog(), 3000);
	}

	resetForm(ngForm: NgForm) {
		ngForm.resetForm();
		this.privacyPolicyChecked = false;
	}

	closeDialog() {
		this.formSubmitted.set(false);
		document.body.classList.remove("no-scroll");
	}
}
