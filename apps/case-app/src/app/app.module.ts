import { CoreModule } from '@playground/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';

import { AddToShoppingComponent } from './add-to-shopping/add-to-shopping.component';

@NgModule({
  declarations: [AppComponent, AddToShoppingComponent],
  imports: [BrowserModule, NxModule.forRoot(), CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
