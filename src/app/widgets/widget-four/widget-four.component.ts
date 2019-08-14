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
  @ViewChild("container", { read: ViewContainerRef, static: false }) container;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.container);
    const factory = this.resolver.resolveComponentFactory(WidgetThreeComponent);
    this.container.createComponent(factory);
    this.container.createComponent(factory);
    this.container.createComponent(factory);
    const widgetRef = this.container.createComponent(factory, 2);
    widgetRef.instance.message = "I'm the third one ";
  }

  onClick() {
    const factory = this.resolver.resolveComponentFactory(WidgetThreeComponent);
    const widgetRef = this.container.createComponent(factory, 2);
    widgetRef.instance.message = "I'm the third one ";
  }
}
