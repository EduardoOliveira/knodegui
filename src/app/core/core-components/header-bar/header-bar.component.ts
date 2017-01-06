import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class HeaderBarComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}