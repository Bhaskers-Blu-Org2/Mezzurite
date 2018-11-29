﻿import { NgModule, ModuleWithProviders } from "@angular/core";
import { MezzuriteDirective } from './angular-performance.directive';
import { RoutingService } from "./angular-routing.service";


@NgModule({
    declarations: [MezzuriteDirective],
    exports: [MezzuriteDirective]
})

/**
 * Mezzurite Performance Module for Angular
 */
export class AngularPerfModule {
    static forRoot() : ModuleWithProviders {
        return {
            ngModule: AngularPerfModule,
            providers: [
                RoutingService
                // Add new services here.
            ]
        };
    }
}
