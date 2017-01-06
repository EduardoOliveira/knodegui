import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPanelComponent} from "./main-panel/main-panel.component";
import {AppPanelComponent} from './app-panel/app-panel.component';
import {CoreComponentsModule} from "../core-components/core-components.module";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [RouterModule,
        BrowserModule,
        CommonModule,
        CoreComponentsModule
    ],
    exports: [MainPanelComponent, AppPanelComponent],
    declarations: [MainPanelComponent, AppPanelComponent]
})
export class CorePanelsModule {
}
