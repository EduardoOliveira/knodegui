import {Component, OnInit, Inject, forwardRef, Input} from '@angular/core';
import {SideMenuComponent} from "../side-menu.component";
import {MenuItemModel} from "./model/menu-item-model";

@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
    host: {
        '(click)': 'onClick($event)'
    }
})
export class MenuItemComponent implements OnInit {

    private _parent: SideMenuComponent;
    @Input() private model: MenuItemModel;

    constructor(@Inject(forwardRef(() => SideMenuComponent)) _parent: SideMenuComponent) {
        this._parent = _parent;
    }

    private onClick($event: Event): void {
        console.log($event);
        this.model.onClick($event);
    }

    ngOnInit() {
    }

}
