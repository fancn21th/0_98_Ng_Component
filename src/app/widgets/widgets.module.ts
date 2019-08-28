import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetOneComponent } from "./widget-one/widget-one.component";
import { WidgetTwoComponent } from "./widget-two/widget-two.component";
import { WidgetThreeComponent } from "./widget-three/widget-three.component";
import { WidgetFourComponent } from "./widget-four/widget-four.component";
@NgModule({
  declarations: [
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent,
    WidgetFourComponent
  ],
  imports: [CommonModule], // CommonModule is required to use *ng
  exports: [
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent,
    WidgetFourComponent
  ],
  entryComponents: [WidgetThreeComponent]
})
export class WidgetsModule {}
