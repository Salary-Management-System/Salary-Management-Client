CREATE TABLE IF NOT EXISTS positions (
    position_id VARCHAR(255) NOT NULL,
    position_name VARCHAR(255) NOT NULL,
    job_description TEXT,
    department_id VARCHAR(255) NOT NULL,
    PRIMARY KEY(position_id),
    FOREIGN KEY(department_id) REFERENCES departments(department_id)
);

/*markdown

*/

CREATE TABLE IF NOT EXISTS departments (
    department_id VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(department_id)
);

CREATE TABLE IF NOT EXISTS job_function (
    job_function_id VARCHAR(255),
    position_id VARCHAR(255) NOT NULL,
    maximum_salary int,
    minimum_salary int,
    job_requirement TEXT,
    PRIMARY KEY(job_function_id),
    FOREIGN KEY(position_id) REFERENCES positions(position_id)
)

CREATE TABLE IF NOT EXISTS levels (
    level_id VARCHAR(255) NOT NULL,
    level_name VARCHAR(255) NOT NULL,
    yoe_required FLOAT,
    PRIMARY KEY(level_id)
)

CREATE TABLE IF NOT EXISTS allowance_employee (
    employee_id VARCHAR(255) NOT NULL,
    allowance_id SERIAL NOT NULL,
    created_at TIMESTAMPTZ,
    amount INT NOT NULL,
    PRIMARY KEY(employee_id, allowance_id)
)
ALTER TABLE allowance_employee
    ADD FOREIGN KEY(employee_id) REFERENCES employees(employee_id),
    ADD FOREIGN KEY(allowance_id) REFERENCES allowances(allowance_id)

CREATE TABLE IF NOT EXISTS salary_advances (
    salary_advances_id SERIAL PRIMARY KEY,
    employee_id VARCHAR(255) NOT NULL,
    payment_date TIMESTAMPTZ,
    suggested_amount INT NOT NULL,
    reason TEXT NOT NULL,
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id)
)

CREATE TABLE IF NOT EXISTS bonus_policy(
    bonus_id VARCHAR(255) NOT NULL PRIMARY KEY,
    bonus_name VARCHAR(255) NOT NULL,
    effect_date TIMESTAMPTZ,
    expired_date TIMESTAMPTZ,
    basic_amount INT NOT NULL
)

CREATE TABLE IF NOT EXISTS bonus_employee(
    policy_id VARCHAR(255) NOT NULL,
    employee_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ,
    PRIMARY KEY(policy_id, employee_id),
    FOREIGN KEY(policy_id) REFERENCES bonus_policy(bonus_id),
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id)
)

CREATE TABLE IF NOT EXISTS deductions(
    deduction_id VARCHAR(255) NOT NULL PRIMARY KEY,
    deduction_name VARCHAR(255) NOT NULL,
    effect_date TIMESTAMPTZ,
    from_resource VARCHAR(255),
    by_percentage INT
)

CREATE TABLE IF NOT EXISTS payroll_types(
    payroll_type_id SERIAL  PRIMARY KEY,
    type_name VARCHAR(255) NOT NULL,
    properties VARCHAR(255) NOT NULL,
    effect_date TIMESTAMPTZ,
    applicable_object VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS payrolls(
    payroll_id VARCHAR(255) NOT NULL PRIMARY KEY,
    payment_date TIMESTAMPTZ,
    created_date TIMESTAMPTZ,
    payroll_name VARCHAR(255) NOT NULL,
    payroll_type_id SERIAL NOT NULL,
    FOREIGN KEY(payroll_type_id) REFERENCES payroll_types(payroll_type_id)
);
CREATE TABLE IF NOT EXISTS salary(
    salary_id VARCHAR(255) NOT NULL PRIMARY KEY,
    employee_id VARCHAR(255) NOT NULL,
    payroll_id VARCHAR(255) NOT NULL,
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY(payroll_id) REFERENCES payrolls(payroll_id)
)

CREATE TABLE IF NOT EXISTS deduction_salary(
    deduction_id VARCHAR(255) NOT NULL,
    salary_id VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    unit VARCHAR(255),
    PRIMARY KEY(deduction_id, salary_id),
    FOREIGN KEY(deduction_id) REFERENCES deductions(deduction_id),
    FOREIGN KEY(salary_id) REFERENCES salary(salary_id)
);

CREATE TABLE IF NOT EXISTS timesheets(
    timesheet_id VARCHAR(255) NOT NULL PRIMARY KEY,
    timesheet_name VARCHAR(255) NOT NULL,
    month INT NOT NULL,
    year INT NOT NULL,
    created_date TIMESTAMPTZ
);
CREATE TABLE IF NOT EXISTS timekeepings(
    timekeeping_id SERIAL PRIMARY KEY,
    timesheet_id VARCHAR(255) NOT NULL,
    employee_id VARCHAR(255) NOT NULL,
    check_date TIMESTAMPTZ NOT NULL,
    created_date TIMESTAMPTZ
    FOREIGN KEY(timesheet_id) REFERENCES timesheets(timesheet_id),
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id)
)