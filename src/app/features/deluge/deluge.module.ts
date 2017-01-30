import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DelugeComponent} from './deluge.component';
import {Router} from "@angular/router";
import {MenuItemsService} from "../../core/core-components/side-menu/services/menu-items.service";
import  {MenuItem} from "./menu-item/menu-item"
import {DelugeServiceService} from "./services/deluge-service.service";
import {TorrentsWidgetComponent} from './widgets/torrents-widget/torrents-widget.component';
import {DashboardWidgetsService} from "../dashboard/services/dashboard-widgets.service";
import {TorrentsWidgetModel} from "./widgets/torrents-widget/torrents-widget-model";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [TorrentsWidgetComponent],
    declarations: [DelugeComponent, TorrentsWidgetComponent],
    entryComponents: [TorrentsWidgetComponent],
    providers: [DelugeServiceService]
})
export class DelugeModule {
    constructor(router: Router, menuItemsService: MenuItemsService, widgetsService: DashboardWidgetsService) {
        menuItemsService.addItem(new MenuItem(router));
        widgetsService.addWidget(new TorrentsWidgetModel());
    }
}
