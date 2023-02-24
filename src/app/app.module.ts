import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AuthService } from './services/auth.service/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    AdminModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
