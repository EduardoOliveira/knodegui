import {NgModule} from '@angular/core';

import {CoreComponentsModule} from "./core-components/core-components.module";
import {CorePanelsModule} from "./core-panels/core-panels.module";

//https://angular.io/docs/ts/latest/guide/router.html
@NgModule({
    exports: [
        CoreComponentsModule,
        CorePanelsModule
    ],
    imports: [
        CoreComponentsModule,
        CorePanelsModule
    ],
    declarations: [],
    providers: [],
})
export class CoreModule {
}
