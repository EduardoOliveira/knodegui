import {Injectable} from '@angular/core';
import {MenuItemModel} from "../menu-item/model/menu-item-model";

@Injectable()
export class MenuItemsService {
    private menuItems: MenuItemModel[] = [];

    constructor() {
    }

    public addItem(menuItem: MenuItemModel) {
        this.menuItems.push(menuItem);
    }

    public getItems() {
        return this.menuItems;
    }
}
