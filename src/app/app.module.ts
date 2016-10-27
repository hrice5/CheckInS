import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';

import { ChatPage } from '../pages/chat/chat';
import { RegistrationPage } from '../pages/registration/registration';
import { MapPage } from '../pages/map/map';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,

    AboutPage,

    ChatPage,
    RegistrationPage,
    MapPage,

    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,

    ChatPage,
    RegistrationPage,
    MapPage,

    HomePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
