import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes : Routes = [
    {
        path : 'admin',
        component : AdminComponent,
        children : [
            { path : 'dashboard', component : DashboardComponent },
            { path : 'profile' , component : ProfileComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule{}