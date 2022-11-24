import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownUserComponent } from '../shared/components/header/childs/dropdown-user/dropdown-user.component';
import { TimelineComponent } from '../shared/components/timeline/timeline.component';
import { UserTagComponent } from '../shared/components/user-tag/user-tag.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    DropdownUserComponent,
    TimelineComponent,
    UserTagComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ]
})
export class AdminModule { }
