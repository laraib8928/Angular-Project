import { Routes } from '@angular/router';
import { Email } from './component/email/email';
import { Home } from './component/home/home';

export const routes: Routes = [
    {
        path: "sendemail",
        component: Email,
        pathMatch: "full"

    },
    {
        path:"",
        component:Home,
        pathMatch:"full"
    }

];
