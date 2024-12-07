import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"portfolio-52375","appId":"1:163058226139:web:94dc8f680da98c6b0a4dfe","storageBucket":"portfolio-52375.firebasestorage.app","apiKey":"AIzaSyDZlsrkMMHv__LelsK41_QI9RXHe05kZH0","authDomain":"portfolio-52375.firebaseapp.com","messagingSenderId":"163058226139"}))), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};
