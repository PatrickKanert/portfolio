import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'portfolio-52375',
          appId: '1:163058226139:web:94dc8f680da98c6b0a4dfe',
          storageBucket: 'portfolio-52375.firebasestorage.app',
          apiKey: 'AIzaSyDZlsrkMMHv__LelsK41_QI9RXHe05kZH0',
          authDomain: 'portfolio-52375.firebaseapp.com',
          messagingSenderId: '163058226139',
        })
      ),
      provideFirestore(() => getFirestore()),
      provideDatabase(() => getDatabase())
    ),

    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),

    provideAnimationsAsync(),
  ],
};
