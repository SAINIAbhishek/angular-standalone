import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from "../../directives/highlight.directive";
import {AnalyticsService} from "../../services/analytics.service";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
  }

  public onClick() {
    this.analyticsService.registerClick();
  }

}
