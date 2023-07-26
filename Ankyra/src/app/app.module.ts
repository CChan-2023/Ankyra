import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CarrouselComponent } from './components/pages/carrousel/carrousel.component';
import { BannerComponent } from './components/pages/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    CarrouselComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
