import { Component, OnInit } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
