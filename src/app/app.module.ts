import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsComponent } from './products/products.component';
import { NotifyMeComponent } from './notify-me/notify-me.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsComponent,
    NotifyMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
