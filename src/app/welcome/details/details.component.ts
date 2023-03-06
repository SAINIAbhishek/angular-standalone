import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from "../../directives/highlight.directive";
import {AnalyticsService} from "../../services/analytics.service";
import {BorderDirective} from "../../directives/border.directive";
import {CompositeDirective} from "../../directives/composite.directive";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HighlightDirective, BorderDirective, CompositeDirective],
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
  }

  public onClick() {
    this.analyticsService.registerClick();
  }

}
