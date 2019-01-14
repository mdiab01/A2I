import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabPage } from '../pages/tab/tab';

@NgModule( {
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot( MyApp )
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    MyApp,
    TabPage,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
} )
export class AppModule { }
