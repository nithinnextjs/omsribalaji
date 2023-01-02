import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './block/footer/footer/footer.component';
import { HeaderComponent } from './block/header/header/header.component';
import { NavigationComponent } from './block/navigation/navigation/navigation.component';
import { LayoutComponent } from './block/app-layout/layout/layout.component';
import { AboutUsComponent } from './block/about-us/about-us.component';
import { NewsComponent } from './block/news/news.component';
import { MediaComponent } from './block/media/media.component';
import { PhaseComponent } from './block/phase/phase.component';
import { MapsComponent } from './block/maps/maps.component';
import { CountComponent } from './block/count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    LayoutComponent,
    AboutUsComponent,
    NewsComponent,
    MediaComponent,
    PhaseComponent,
    MapsComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
