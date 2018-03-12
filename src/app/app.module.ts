import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DeliveryscreenComponent } from './deliveryscreen/deliveryscreen.component';
import { ClientService } from './services/clients.service';
import { WeekService } from './services/week.service';

const appRoutes : Routes = [
  { path: "splash-screen", component: SplashScreenComponent },
  { path: "main-screen", component: MainScreenComponent },
  { path: "delivery-screen", component: DeliveryscreenComponent },
  { path: "", component: MainScreenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    MainScreenComponent,
    DeliveryscreenComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [ ClientService, WeekService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
