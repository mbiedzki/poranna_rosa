import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MessageComponent } from './message/message.component';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { GlobalsService } from './globals.service';
import { GalleryComponent } from './gallery/gallery.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MessageComponent,
    MenuComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [GlobalsService, MenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
