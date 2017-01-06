import {MenuItemModel} from "../../../core/core-components/side-menu/menu-item/model/menu-item-model";
import {Router} from "@angular/router";

export class MenuItem implements MenuItemModel {
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    getPriority(): number {
        return 0;
    }

    onClick($event: Event): void {
        this.router.navigate(['/dashboard']);
    }

    onHold($event: Event): void {
    }

    getName(): string {
        return "Dashbo";
    }

    getIcon(): string {
        return undefined;
    }
}
