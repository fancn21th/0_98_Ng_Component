import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetOneComponent } from "./widget-one/widget-one.component";
@NgModule({
  declarations: [WidgetOneComponent],
  imports: [CommonModule],
  exports: [WidgetOneComponent]
})
export class WidgetsModule {}
