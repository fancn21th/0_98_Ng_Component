import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetOneComponent } from "./widget-one/widget-one.component";
import { WidgetTwoComponent } from "./widget-two/widget-two.component";
import { WidgetThreeComponent } from "./widget-three/widget-three.component";
@NgModule({
  declarations: [WidgetOneComponent, WidgetTwoComponent, WidgetThreeComponent],
  imports: [CommonModule],
  exports: [WidgetOneComponent, WidgetTwoComponent, WidgetThreeComponent]
})
export class WidgetsModule {}
