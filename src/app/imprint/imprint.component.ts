import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
	selector: "app-imprint",
	standalone: true,
	imports: [CommonModule, TranslatePipe],
	templateUrl: "./imprint.component.html",
	styleUrl: "./imprint.component.scss",
})
export class ImprintComponent {}
