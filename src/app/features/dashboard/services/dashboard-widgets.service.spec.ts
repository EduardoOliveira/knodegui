/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {DashboardWidgetsService} from "./dashboard-widgets.service";

describe('DashboardWidgetsServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DashboardWidgetsService]
        });
    });

    it('should ...', inject([DashboardWidgetsService], (service: DashboardWidgetsService) => {
        expect(service).toBeTruthy();
    }));
});
