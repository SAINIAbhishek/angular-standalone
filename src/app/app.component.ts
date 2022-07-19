import { Component } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {WelcomeComponent} from "./welcome/welcome.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppRoutingModule, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Standalone';
}
