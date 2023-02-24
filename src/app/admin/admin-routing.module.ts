import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service/auth.service';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeCreateComponent } from './employee/childs/employee.create/employee.create.component';
import { EmployeeHomeComponent } from './employee/childs/employee.home/employee.home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AllowanceComponent } from './payroll/childs/allowance/allowance.component';
import { FormCreateComponent } from './payroll/childs/allowance/childs/allowance.create/form.create.component';
import { AllowanceHomeComponent } from './payroll/childs/allowance/childs/allowance.home/home.component';
import { BonusComponent } from './payroll/childs/bonus/bonus.component';
import { BonusCreateComponent } from './payroll/childs/bonus/childs/bonus-create/bonus-create.component';
import { BonusHomeComponent } from './payroll/childs/bonus/childs/bonus-home/bonus-home.component';
import { DeductionCreateComponent } from './payroll/childs/deduction/childs/deduction-create/deduction-create.component';
import { DeductionHomeComponent } from './payroll/childs/deduction/childs/deduction-home/deduction-home.component';
import { DeductionComponent } from './payroll/childs/deduction/deduction.component';
import { PayrollTypeCreateComponent } from './payroll/childs/payroll-type/childs/payroll-type-create/payroll-type-create.component';
import { PayrollTypeHomeComponent } from './payroll/childs/payroll-type/childs/payroll-type-home/payroll-type-home.component';
import { PayrollTypeDetailComponent } from './payroll/childs/payroll-type/childs/payroll-type.detail/payroll-type.detail.component';
import { PayrollTypeComponent } from './payroll/childs/payroll-type/payroll-type.component';
import { PayrollHomeComponent } from './payroll/childs/payroll.home/payroll.home.component';
import { PayrollComponent } from './payroll/payroll.component';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentCreateComponent } from './salary-bracket/childs/department/childs/department.create/department.create.component';
import { DepartmentHomeComponent } from './salary-bracket/childs/department/childs/department.home/department.home.component';
import { DepartmentComponent } from './salary-bracket/childs/department/department.component';
import { LevelCreateComponent } from './salary-bracket/childs/level/childs/level.create/level.create.component';
import { LevelHomeComponent } from './salary-bracket/childs/level/childs/level.home/level.home.component';
import { LevelComponent } from './salary-bracket/childs/level/level.component';
import { PositionCreateComponent } from './salary-bracket/childs/position/childs/position.create/position.create.component';
import { PositionHomeComponent } from './salary-bracket/childs/position/childs/position.home/position.home.component';
import { PositionComponent } from './salary-bracket/childs/position/position.component';
import { SalaryBracketHomeComponent } from './salary-bracket/childs/salary-bracket-home/salary-bracket-home.component';
import { SalaryBracketCreateComponent } from './salary-bracket/childs/salary-bracket.create/salary-bracket.create.component';
import { SalaryBracketComponent } from './salary-bracket/salary-bracket.component';

const routes : Routes = [
    {
        path : 'admin',
        component : AdminComponent,
        canActivate :  [AuthService],
        children : [
            { path : 'dashboard', component : DashboardComponent },
            { path : 'profile' , component : ProfileComponent },
            { path : 'employee', component : EmployeeComponent,
                children : [
                    { path : '', component : EmployeeHomeComponent },
                    { path : 'new', component : EmployeeCreateComponent }
                ]
            },
            { path : 'payroll', component : PayrollComponent,
                children : [
                    { path : '', component : PayrollHomeComponent },
                    { path : 'allowances', component : AllowanceComponent,
                        children : [
                            { path : '', component : AllowanceHomeComponent },
                            { path : 'new', component : FormCreateComponent }
                        ]
                    },
                    { path : 'bonuses', component : BonusComponent,
                        children : [
                            { path : '', component : BonusHomeComponent },
                            { path : 'new', component : BonusCreateComponent }
                        ]
                    },
                    { path : 'deductions', component : DeductionComponent,
                        children : [
                            { path : '', component : DeductionHomeComponent },
                            { path : 'new', component : DeductionCreateComponent }
                        ]
                    },
                    { path : 'payroll-types', component : PayrollTypeComponent,
                        children : [
                            { path : '', component : PayrollTypeHomeComponent },
                            { path : 'new', component : PayrollTypeCreateComponent },
                            { path : ':id', component : PayrollTypeDetailComponent }
                        ]
                    }
                ]
            },
            { path : 'bracket', component : SalaryBracketComponent,
                children : [
                    { path : '', component : SalaryBracketHomeComponent },
                    { path : 'new', component : SalaryBracketCreateComponent },
                    { path : 'departments', component : DepartmentComponent,
                        children : [
                            { path : '', component : DepartmentHomeComponent },
                            { path : 'new', component : DepartmentCreateComponent }
                        ]
                    },
                    { path : 'positions', component : PositionComponent,
                        children : [
                            { path : '', component : PositionHomeComponent },
                            { path : 'new', component : PositionCreateComponent }
                        ]
                    },
                    { path : 'levels', component : LevelComponent,
                        children : [
                            { path : '', component : LevelHomeComponent },
                            { path : 'new', component : LevelCreateComponent }
                        ]
                    }
                ]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule{}