import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemopageComponent } from './demopage.component';
import {DemopageRoutingModule} from '@app/features/demopage/demopage-routing.module';



@NgModule({
    declarations: [DemopageComponent],
    imports: [
        CommonModule,
        DemopageRoutingModule
    ]
})
export class DemopageModule { }
