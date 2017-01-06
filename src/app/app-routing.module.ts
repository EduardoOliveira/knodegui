import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AppPanelComponent} from "./core/core-panels/app-panel/app-panel.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'app',
                component: AppPanelComponent
            },
            {path: '', redirectTo: 'app', pathMatch: 'full'},
            //{ path: '**', component: PageNotFoundComponent }
        ], {useHash: true})
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
