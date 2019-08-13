import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SimpleService {
  message: string = "Hello World from Simple Service";

  constructor() {}
}
