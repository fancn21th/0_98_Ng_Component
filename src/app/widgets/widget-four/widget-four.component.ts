import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { WidgetThreeComponent } from "../widget-three/widget-three.component";

@Component({
  selector: "app-widget-four",
  templateUrl: "./widget-four.component.html",
  styleUrls: ["./widget-four.component.css"]
})
export class WidgetFourComponent implements OnInit {
  @ViewChild("container", { read: ViewContainerRef }) container;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.container);
    const factory = this.resolver.resolveComponentFactory(WidgetThreeComponent);
    this.container.createComponent(factory);
  }
}
