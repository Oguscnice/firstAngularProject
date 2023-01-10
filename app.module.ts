import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
