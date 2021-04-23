import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenSinkComponent } from './kitchen-sink.component';

import '@dp/ui-lib'

@NgModule({
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    declarations: [KitchenSinkComponent],
    exports:[KitchenSinkComponent],
    imports: [
        CommonModule
    ]
})
export class KitchenSinkModule { }
