import { Component, OnInit, ViewChild, Renderer } from "@angular/core";

@Component({
  selector: "app-widget-three",
  templateUrl: "./widget-three.component.html",
  styleUrls: ["./widget-three.component.css"]
})
export class WidgetThreeComponent implements OnInit {
  // TODO: figure out second argument means
  @ViewChild("input", { static: false }) input;

  constructor(private renderer: Renderer) {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.input);
    // rather than this.input.nativeElement.focus()
    this.renderer.invokeElementMethod(this.input.nativeElement, "focus");
  }
}
