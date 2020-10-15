import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemopageComponent} from '@app/features/demopage/demopage.component';


const routes: Routes = [
    { path: '', component: DemopageComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemopageRoutingModule { }
