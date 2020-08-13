import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

/**
 * PrimeModule module used for import of prime material UI compponents
 * 
 */
@NgModule({
    imports :[
        InputTextModule
    ],
    exports : [
        InputTextModule
    ]
})

export class PrimeModule {};