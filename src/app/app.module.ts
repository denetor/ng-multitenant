import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './core/interceptors/jwt.interceptor';
import {HttpErrorInterceptor} from './core/interceptors/http-error.interceptor';
import { FooterComponent } from './core/components/footer/footer.component';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        SidenavComponent,
        ToolbarComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
