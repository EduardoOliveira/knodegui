import {Component, OnInit, HostBinding} from '@angular/core';
import {ToggleMenuItem} from "./toggle-item/toggleMenuItem";
import {MenuItemModel} from "./menu-item/model/menu-item-model";
import {MenuItemsService} from "./services/menu-items.service";

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
    @HostBinding('class.small') small: boolean = true;

    private toggleMenu: ToggleMenuItem;
    private menuItems: MenuItemModel[] = [];


    public constructor(menuItemsService: MenuItemsService) {
        this.toggleMenu = new ToggleMenuItem(this);
        menuItemsService.addItem(this.toggleMenu);

        this.menuItems = menuItemsService.getItems().sort((n1, n2) => n2.getPriority() - n1.getPriority());
    }

    ngOnInit() {
    }

}
