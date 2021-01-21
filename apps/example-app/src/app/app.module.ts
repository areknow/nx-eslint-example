import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AAngularLibModule } from '@spine-z/a-angular-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AAngularLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
