import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  title = "shell";
  constructor(private router: Router) {
    // This is a hack to expose the router to the window object so the router can be used in the React NavigateLinkToAngular Component
    (window as any).AngularRouter = router;
  }
}
