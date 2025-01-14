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
	imports: [FormsModule, RouterLink, TranslatePipe, MatCheckboxModule],
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
		if (ngForm.submitted && ngForm.form.valid) {
			this.formSubmitted.set(true);
			document.body.classList.add("no-scroll");

			this.http
				.post(this.post.endPoint, this.post.body(this.contactData))
				.subscribe({
					next: (response) => {
						console.log("Form erfolgreich gesendet:", response);

						// Eingabefelder zurücksetzen
						this.contactData = {
							name: "",
							email: "",
							message: "",
						};

						// Angular-Formular zurücksetzen
						ngForm.resetForm();
					},
					error: (error) => {
						console.error("Fehler beim Senden des Formulars:", error);
					},
					complete: () => {
						console.info("Formular erfolgreich verarbeitet.");
					},
				});
		}

		setTimeout(() => {
			this.formSubmitted.set(false);
			document.body.classList.remove("no-scroll");
		}, 3000);
	}

	closeDialog() {
		this.formSubmitted.set(false);
		document.body.classList.remove("no-scroll");
	}
}
