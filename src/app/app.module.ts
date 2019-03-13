import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';

import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { NavigationModule } from './main-layout/navigation.module';
import { FullContainedLayoutComponent } from './main-layout/full-contained-layout.component';
import { preloadProviderFacotry } from './service/preloadProviderFacotry';
import { PreloadService } from './service/preload.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CacheInterceptor } from './service/cache-interceptor.service';
import { LoginLayoutComponent } from './main-layout/login-layout.component';

// main layout


@NgModule({
    declarations: [
        LoginLayoutComponent,
        AppComponent,
        FullContainedLayoutComponent
  ],
  imports: [
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    RouterModule,
    FormsModule,
    SharedModule,
    ViewsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: preloadProviderFacotry, deps: [PreloadService], multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true, }
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
