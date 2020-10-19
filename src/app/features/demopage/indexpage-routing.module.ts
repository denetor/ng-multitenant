import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexpageComponent} from '../indexpage/indexpage.component';


const routes: Routes = [
    { path: '', component: IndexpageComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndexpageRoutingModule { }
