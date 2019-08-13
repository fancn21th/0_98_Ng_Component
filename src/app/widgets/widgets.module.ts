import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetOneComponent } from "./widget-one/widget-one.component";
import { WidgetTwoComponent } from "./widget-two/widget-two.component";
@NgModule({
  declarations: [WidgetOneComponent, WidgetTwoComponent],
  imports: [CommonModule],
  exports: [WidgetOneComponent, WidgetTwoComponent]
})
export class WidgetsModule {}
