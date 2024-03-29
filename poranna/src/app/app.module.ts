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
import { GlobalsService } from './services/globals.service';
import { GalleryComponent } from './gallery/gallery.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { MobileMainComponent } from './mobile-main/mobile-main.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        MessageComponent,
        MenuComponent,
        GalleryComponent,
        MobileHeaderComponent,
        MobileMainComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatMenuModule,
        MatListModule,
        FlexModule,
    ],
    providers: [GlobalsService, MenuComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
