import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from '../app/clinet/components/about-me/about-me.component';
import { ContactFormComponent } from '../app/clinet/components/contact-form/contact-form.component';
import { HeaderComponent } from '../app/clinet/components/header/header.component';
import { ProjectsListComponent } from '../app/clinet/components/projects-list/projects-list.component';
import { SkillsListComponent } from '../app/clinet/components/skills-list/skills-list.component';
import { ToolsListComponent } from '../app/clinet/components/tools-list/tools-list.component';
import { PortfolioPageComponent } from '../app/clinet/pages/portfolio-page/portfolio-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AvatarModule} from 'primeng/avatar';
import {TooltipModule} from 'primeng/tooltip';
import {MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import { HomeComponent } from '../app/clinet/pages/home/home.component';
import { FooterComponent } from './clinet/components/footer/footer.component';
import { GalleryComponent } from './clinet/pages/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactFormComponent,
    HeaderComponent,
    PortfolioPageComponent,
    ProjectsListComponent,
    SkillsListComponent,
    ToolsListComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    DividerModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    AvatarModule,
    TooltipModule,
    MessagesModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
