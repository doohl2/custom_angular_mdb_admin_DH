import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginLayoutComponent } from './main-layout/login-layout.component';
import { LoginComponent } from './views/login/login.component';
// import { AuthGuard } from './service/auth.guard';
import { NoticeComponent } from './views/notice/notice.component';
import { NoticeDetailComponent } from './views/notice/notice-detail/notice-detail.component';
import { CustomersDetailComponent } from './views/customers/customers-detail/customers-detail.component';
import { CustomersComponent } from './views/customers/customers.component';
import { FullContainedLayoutComponent } from './main-layout/full-contained-layout.component';

const routes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'notice' },
    {
        path: 'login', component: LoginLayoutComponent, children:
            [{ path: '', component: LoginComponent }]
    },
    {
        path: 'notice', component: FullContainedLayoutComponent, children: [
            {path: ':id', component: NoticeDetailComponent},
            {path: '', component: NoticeComponent}
        ],
        // canActivate: [AuthGuard],
    },
    {
        path: 'customer', component: FullContainedLayoutComponent, children: [
            {path: ':id', component: CustomersDetailComponent},
            {path: '', component: CustomersComponent}
        ],
        // canActivate: [AuthGuard],
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
