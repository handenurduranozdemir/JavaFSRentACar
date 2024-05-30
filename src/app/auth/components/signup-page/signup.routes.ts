import { Routes } from "@angular/router";
import { SignupPageComponent } from "./signup-page.component";

export const signupRoutes: Routes = [
    {
        path: 'signup',
        pathMatch: 'full',
        component: SignupPageComponent,
    },
];