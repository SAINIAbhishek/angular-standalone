import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DetailsComponent} from "./details/details.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, DetailsComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
