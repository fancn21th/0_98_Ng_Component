import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { ServicesModule } from "./services/services.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, ServicesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
