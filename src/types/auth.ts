export interface User {
  id: string;
  email: string;
  password: string;
}

export interface Tenant {
  id: string;
  name: string;
  domain: string;
  users: string[];
}

export interface Role {
  id: string;
  name: string;
}

export interface UserTenantRole {
  id: string;
  userId: string;
  tenantId: string;
  roleId: string;
  defaultView: string;
}

export interface AuthState {
  currentUser: User | null;
  currentTenant: Tenant | null;
  currentRole: Role | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, domain: string) => Promise<void>;
  logout: () => void;
}