import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ImprintComponent } from "./imprint/imprint.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "imprint", component: ImprintComponent },
	{ path: "privacy-policy", component: PrivacyPolicyComponent },
	{ path: "**", redirectTo: "" },
];
