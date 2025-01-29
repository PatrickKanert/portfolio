import {
	HttpClient,
	HttpClientModule,
	provideHttpClient,
} from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { routes } from "./app.routes";

// Loader-Funktion für ngx-translate
export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export const appConfig: ApplicationConfig = {
	providers: [
		// Router-Provider
		provideRouter(routes),
		provideHttpClient(),
		provideAnimations(),

		// HttpClient und TranslateModule-Provider
		importProvidersFrom(
			HttpClientModule,
			TranslateModule.forRoot({
				loader: {
					provide: TranslateLoader,
					useFactory: httpLoaderFactory,
					deps: [HttpClient],
				},
			}),
		),

		// Animationen-Provider
		provideAnimations(),
	],
};
