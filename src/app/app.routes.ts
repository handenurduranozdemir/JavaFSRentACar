import { Routes } from '@angular/router';
import { homeRoutes } from './routes/home-page/home.routes';
import { managementRoutes } from './routes/management-page/management.routes';
import { NotFoundPageComponent } from './routes/not-found-page/not-found-page.component';
import { loginRoutes } from './auth/components/login-page/login.routes';
import { signupRoutes } from './auth/components/signup-page/signup.routes';
import { AdminComponent } from './modules/admin/admin/admin.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { CustomerComponent } from './modules/customer/customer/customer.component';
import { CustomerDashboardComponent } from './modules/customer/components/customer-dashboard/customer-dashboard.component';
import { aboutRoutes } from './routes/about-page/about.routes';

export const routes: Routes = [
    ...homeRoutes,
    ...managementRoutes,
    ...loginRoutes,
    ...signupRoutes,
    ...aboutRoutes, // [1, 2, 3] // Desturcturing Operator
    // 1,
    // 2,
    // 3
    {
        path: '', 
        component: NotFoundPageComponent,
    },

    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'dashboard',
                component: AdminDashboardComponent,
            }
        ]
    },

    {
        path: 'customer',
        component: CustomerComponent,
        children: [
            {
                path: 'dashboard',
                component: CustomerDashboardComponent,
            }
        ]
    },
];
