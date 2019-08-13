import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-widget-one",
  templateUrl: "./widget-one.component.html",
  styleUrls: ["./widget-one.component.css"]
})

// this is a presentation component
export class WidgetOneComponent implements OnInit {
  @Input() message: string;

  constructor() {}

  ngOnInit() {}
}
