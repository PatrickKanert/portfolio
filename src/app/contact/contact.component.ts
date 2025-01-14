import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
	selector: "app-contact",
	standalone: true,
	imports: [CommonModule, ContactFormComponent, TranslatePipe],
	templateUrl: "./contact.component.html",
	styleUrl: "./contact.component.scss",
})
export class ContactComponent {}
