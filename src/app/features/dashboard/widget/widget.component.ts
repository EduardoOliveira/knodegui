import {Component, OnInit, HostBinding} from '@angular/core';

@Component({
    selector: 'widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
    @HostBinding('class') private size = 'size-third';
    //http://blog.rangle.io/dynamically-creating-components-with-angular-2/
    //http://plnkr.co/edit/ZXsIWykqKZi5r75VMtw2?p=preview
    constructor() {
    }

    ngOnInit() {
    }

}
