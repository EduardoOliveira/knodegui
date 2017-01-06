import {NgModule, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {MenuItemsService} from "../../core/core-components/side-menu/services/menu-items.service";
import {MenuItem} from "./menu-items/menu-item";
import {RouterModule, Router} from "@angular/router";
import {WidgetComponent} from './widget/widget.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [DashboardComponent, WidgetComponent]
})
export class DashboardModule {
    constructor(menuItemsService: MenuItemsService, @Inject(Router)router: Router) {
        menuItemsService.addItem(new MenuItem(router));
    }
}
