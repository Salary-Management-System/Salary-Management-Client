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
import { NgChartsModule } from 'ng2-charts';
import { PayrollComponent } from './payroll/payroll.component';
import { BonusComponent } from './payroll/childs/bonus/bonus.component';
import { DeductionComponent } from './payroll/childs/deduction/deduction.component';
import { AllowanceComponent } from './payroll/childs/allowance/allowance.component';
import { FormsModule } from '@angular/forms';
import { FormCreateComponent } from './payroll/childs/allowance/childs/allowance.create/form.create.component';
import { AllowanceHomeComponent } from './payroll/childs/allowance/childs/allowance.home/home.component';
import { PayrollHomeComponent } from './payroll/childs/payroll.home/payroll.home.component';
import { BonusHomeComponent } from './payroll/childs/bonus/childs/bonus-home/bonus-home.component';
import { BonusCreateComponent } from './payroll/childs/bonus/childs/bonus-create/bonus-create.component';
import { DeductionHomeComponent } from './payroll/childs/deduction/childs/deduction-home/deduction-home.component';
import { DeductionCreateComponent } from './payroll/childs/deduction/childs/deduction-create/deduction-create.component';
import { SalaryBracketComponent } from './salary-bracket/salary-bracket.component';
import { DepartmentComponent } from './salary-bracket/childs/department/department.component';
import { PositionComponent } from './salary-bracket/childs/position/position.component';
import { SalaryBracketHomeComponent } from './salary-bracket/childs/salary-bracket-home/salary-bracket-home.component';
import { LevelComponent } from './salary-bracket/childs/level/level.component';
import { PayrollTypeComponent } from './payroll/childs/payroll-type/payroll-type.component';
import { PayrollTypeHomeComponent } from './payroll/childs/payroll-type/childs/payroll-type-home/payroll-type-home.component';
import { PayrollTypeCreateComponent } from './payroll/childs/payroll-type/childs/payroll-type-create/payroll-type-create.component';
import { PositionHomeComponent } from './salary-bracket/childs/position/childs/position.home/position.home.component';
import { PositionCreateComponent } from './salary-bracket/childs/position/childs/position.create/position.create.component';
import { DepartmentHomeComponent } from './salary-bracket/childs/department/childs/department.home/department.home.component';
import { DepartmentCreateComponent } from './salary-bracket/childs/department/childs/department.create/department.create.component';
import { LevelHomeComponent } from './salary-bracket/childs/level/childs/level.home/level.home.component';
import { LevelCreateComponent } from './salary-bracket/childs/level/childs/level.create/level.create.component';
import { SalaryBracketCreateComponent } from './salary-bracket/childs/salary-bracket.create/salary-bracket.create.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeHomeComponent } from './employee/childs/employee.home/employee.home.component';
import { EmployeeCreateComponent } from './employee/childs/employee.create/employee.create.component';
import { TimesheetHomeComponent } from './timesheet/childs/timesheet.home/timesheet.home.component';
import { TimesheetCreateComponent } from './timesheet/childs/timesheet.create/timesheet.create.component';
import { TimeskippingComponent } from './timesheet/childs/timeskipping/timeskipping.component';
import { TimeskippingHomeComponent } from './timesheet/childs/timeskipping/childs/timeskipping.home/timeskipping.home.component';
import { TimeskippingCreateComponent } from './timesheet/childs/timeskipping/childs/timeskipping.create/timeskipping.create.component';
import { PayrollTypeDetailComponent } from './payroll/childs/payroll-type/childs/payroll-type.detail/payroll-type.detail.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    DropdownUserComponent,
    TimelineComponent,
    UserTagComponent,
    PayrollComponent,
    BonusComponent,
    DeductionComponent,
    AllowanceComponent,
    FormCreateComponent,
    AllowanceHomeComponent,
    PayrollHomeComponent,
    BonusHomeComponent,
    BonusCreateComponent,
    DeductionHomeComponent,
    DeductionCreateComponent,
    SalaryBracketComponent,
    DepartmentComponent,
    PositionComponent,
    SalaryBracketHomeComponent,
    LevelComponent,
    PayrollTypeComponent,
    PayrollTypeHomeComponent,
    PayrollTypeCreateComponent,
    PositionHomeComponent,
    PositionCreateComponent,
    DepartmentHomeComponent,
    DepartmentCreateComponent,
    LevelHomeComponent,
    LevelCreateComponent,
    SalaryBracketCreateComponent,
    TimesheetComponent,
    EmployeeComponent,
    EmployeeHomeComponent,
    EmployeeCreateComponent,
    TimesheetHomeComponent,
    TimesheetCreateComponent,
    TimeskippingComponent,
    TimeskippingHomeComponent,
    TimeskippingCreateComponent,
    PayrollTypeDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule,
    FormsModule
  ]
})
export class AdminModule { }
