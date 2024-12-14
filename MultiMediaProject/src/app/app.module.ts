import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Layout/Header/Header.component';
import { FooterComponent } from './components/Layout/Footer/Footer.component';
import { NavbarComponent } from './components/Layout/Navbar/Navbar.component';
import { HomeComponent } from './components/pages/Home/Home.component';
import { NotFoundPageComponent } from './components/pages/NotFoundPage/NotFoundPage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  
    FooterComponent,
    NavbarComponent,
    HomeComponent,    
    NotFoundPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
