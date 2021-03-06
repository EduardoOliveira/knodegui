import {NgModule} from '@angular/core';
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {MenuItemComponent} from "./side-menu/menu-item/menu-item.component";
import {BrowserModule} from "@angular/platform-browser";
import {MenuItemsService} from "./side-menu/services/menu-items.service";

@NgModule({
    imports: [BrowserModule],
    exports: [SideMenuComponent],
    declarations: [SideMenuComponent, MenuItemComponent],
    providers: [MenuItemsService]
})
export class CoreComponentsModule {
}
