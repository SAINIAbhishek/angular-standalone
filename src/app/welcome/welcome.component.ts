import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DetailsComponent} from "./details/details.component";

@Component({
  standalone: true,
  imports: [CommonModule, DetailsComponent],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
