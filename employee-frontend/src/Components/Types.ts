export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  age: number;
}

export interface EmployeeRow {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  age: number;
  expanded: boolean;
}

export interface BadInput {
  firstNameBad: boolean;
  lastNameBad: boolean;
  emailBad: boolean;
  roleBad: boolean;
  ageBad: boolean;
}

export enum Property {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  role = "role",
  age = "age",
}
