import {Injectable} from '@angular/core';
import {WidgetModel} from "../widget/model/widget-model";

@Injectable()
export class DashboardWidgetsService {
    private widgets: WidgetModel[] = [];

    constructor() {
    }

    public addWidget(widget: WidgetModel) {
        this.widgets.push(widget);
    }

    public getWidgets(): WidgetModel[] {
        return this.widgets;
    }
}
