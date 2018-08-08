import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ErrorsModule } from './core/errors';
import { HomeModule } from './features/home/home.module';
import { PageModule } from './features/page/page.module';

import { HttpService } from './core/services/http/http.service';
import { NotificationService } from './core/services/notification/notification.service';


import { AppComponent } from './app.component';
import { PageResolver } from './core/resolvers/page.resolver';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ErrorsModule,
    HomeModule,
    PageModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    HttpService,
    NotificationService,
    PageResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }