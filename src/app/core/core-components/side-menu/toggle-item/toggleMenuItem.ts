import {MenuItemModel} from "../menu-item/model/menu-item-model";
import {SideMenuComponent} from "../side-menu.component";
export class ToggleMenuItem implements MenuItemModel {

    private sideMenu: SideMenuComponent;

    public constructor(sideMenu: SideMenuComponent) {
        this.sideMenu = sideMenu;
    }

    public onClick($event: Event): void {
        console.log("toggleClick");
        this.sideMenu.small = !this.sideMenu.small;
    }

    public onHold($event: Event): void {
        console.log("toggleHold");
    }

    public getName(): string {
        return "Toggle";
    }

    public getIcon(): {type: string; name: string} {
        let clazz = '';
        if (this.sideMenu.small) {
            clazz = 'fa-expand';
        } else {
            clazz = 'fa-compress';
        }
        return {type: 'fa', name: clazz};
    }

    public getPriority(): number {
        return -999;
    }
}
