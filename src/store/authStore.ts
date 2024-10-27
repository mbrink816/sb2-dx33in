import { create } from 'zustand';
import { AuthState } from '../types/auth';
import { users, tenants, roles, userTenantRoles } from '../data/mockData';

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: null,
  currentTenant: null,
  currentRole: null,
  isAuthenticated: false,

  login: async (email: string, password: string, tenantDomain: string) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const tenant = tenants.find((t) => t.domain === tenantDomain);
    
    if (!tenant) {
      throw new Error('Invalid tenant');
    }

    const userTenantRole = userTenantRoles.find(
      (utr) => utr.userId === user.id && utr.tenantId === tenant.id
    );
    
    if (!userTenantRole) {
      throw new Error('User not authorized for this tenant');
    }

    const role = roles.find((r) => r.id === userTenantRole.roleId);
    if (!role) {
      throw new Error('Role not found');
    }

    const { password: _, ...safeUser } = user;
    
    set({
      currentUser: safeUser,
      currentTenant: tenant,
      currentRole: role,
      isAuthenticated: true,
    });
  },

  logout: () => {
    set({
      currentUser: null,
      currentTenant: null,
      currentRole: null,
      isAuthenticated: false,
    });
  },
}));