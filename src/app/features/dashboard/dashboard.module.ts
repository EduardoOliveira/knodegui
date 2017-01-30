import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {MenuItemsService} from "../../core/core-components/side-menu/services/menu-items.service";
import {MenuItem} from "./menu-items/menu-item";
import {RouterModule, Router} from "@angular/router";
import {WidgetComponent} from './widget/widget.component';
import {DashboardWidgetsService} from "./services/dashboard-widgets.service";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [DashboardComponent, WidgetComponent],
    providers: [DashboardWidgetsService]
})
export class DashboardModule {
    constructor(menuItemsService: MenuItemsService, router: Router) {
        menuItemsService.addItem(new MenuItem(router));
    }
}
