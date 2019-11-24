import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './pages/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {HoverDirective} from "./directives/hover.directive";
import {SearchPipe} from "./pipes/search.pipe";
import {FormsModule} from "@angular/forms";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SetupPageComponent} from './pages/setup-page/setup-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

