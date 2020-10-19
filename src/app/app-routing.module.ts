import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from '@app/shared/components/page-not-found/page-not-found.component';
import {IndexpageComponent} from '@app/features/indexpage/indexpage.component';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        path: 'index', component: IndexpageComponent
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'demopage',
        loadChildren: () => import('./features/demopage/demopage.module').then(m => m.DemopageModule)
    },
    // otherwise redirect to home
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
