import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {DashboardModule} from "./features/dashboard/dashboard.module";
import {AppRoutingModule} from "./app-routing.module";
import {DelugeModule} from "./features/deluge/deluge.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CoreModule,
        DashboardModule,
        DelugeModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
