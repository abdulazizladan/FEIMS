import { institution } from './institution.model';

export interface User{
  institution: institution;
  fullName: string;
  userType: string;
  userRole: string;
  status: string;
  _id: string;
  fName: string;
  lName: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  dob: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
  active_status : boolean
}
