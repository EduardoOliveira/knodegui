import {WidgetModel} from "../../../dashboard/widget/model/widget-model";
import {TorrentsWidgetComponent} from "./torrents-widget.component";

export class TorrentsWidgetModel implements WidgetModel{
    getComponent(): any {
        return TorrentsWidgetComponent;
    }

    getInputs(): any {
        return {cenas:'weee'};
    }

}