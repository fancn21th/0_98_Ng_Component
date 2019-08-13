import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { WidgetsModule } from "../widgets/widgets.module";

@NgModule({
  imports: [WidgetsModule], // WidgetsModule is shared components
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
