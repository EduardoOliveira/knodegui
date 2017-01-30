import {Component, OnInit} from '@angular/core';
import {DashboardWidgetsService} from "./services/dashboard-widgets.service";
import {WidgetModel} from "./widget/model/widget-model";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    private widgets: WidgetModel[];

    constructor(widgetsService: DashboardWidgetsService) {
        this.widgets = widgetsService.getWidgets();
    }

    ngOnInit() {
    }

}
