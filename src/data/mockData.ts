import { User, Tenant, Role, UserTenantRole } from '../types/auth';

export const users: User[] = [
  { id: '1', email: 'advisor@company1.com', password: 'password123' },
  { id: '2', email: 'connector@company1.com', password: 'password123' },
  { id: '3', email: 'admin@company2.com', password: 'password123' },
  { id: '4', email: 'member@company2.com', password: 'password123' },
];

export const tenants: Tenant[] = [
  {
    id: '1',
    name: 'Company One',
    domain: 'ten1',
    users: ['1', '2'],
  },
  {
    id: '2',
    name: 'Company Two',
    domain: 'ten2',
    users: ['3', '4'],
  },
];

export const roles: Role[] = [
  { id: '1', name: 'Advisor' },
  { id: '2', name: 'Connector' },
  { id: '3', name: 'Member' },
  { id: '4', name: 'Admin' },
];

export const userTenantRoles: UserTenantRole[] = [
  {
    id: '1',
    userId: '1',
    tenantId: '1',
    roleId: '1',
    defaultView: '/dashboard',
  },
  {
    id: '2',
    userId: '2',
    tenantId: '1',
    roleId: '2',
    defaultView: '/connections',
  },
  {
    id: '3',
    userId: '3',
    tenantId: '2',
    roleId: '4',
    defaultView: '/admin',
  },
  {
    id: '4',
    userId: '4',
    tenantId: '2',
    roleId: '3',
    defaultView: '/profile',
  },
];