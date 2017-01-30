import {MenuItemModel} from "../../../core/core-components/side-menu/menu-item/model/menu-item-model";
import {Router} from "@angular/router";
export class MenuItem implements MenuItemModel {

    constructor(private router:Router){

    }

    onClick($event: Event): void {
    }

    onHold($event: Event): void {
    }

    getName(): string {
        return undefined;
    }

    getIcon(): {type: string; name: string} {
        return {type: 'fa', name: 'fa-cloud-download'};
    }

    getPriority(): number {
        return undefined;
    }

}