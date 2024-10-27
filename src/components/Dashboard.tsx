import React from 'react';
import { useAuthStore } from '../store/authStore';
import { Navigate, useParams } from 'react-router-dom';
import { Building2, UserCircle, Shield } from 'lucide-react';

export default function Dashboard() {
  const { currentUser, currentTenant, currentRole, isAuthenticated } = useAuthStore();
  const { tenantDomain } = useParams();

  if (!isAuthenticated) {
    return <Navigate to={`/${tenantDomain}`} replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Authentication Details</h1>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <UserCircle className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-500">User Email</p>
                <p className="text-lg font-semibold text-gray-900">{currentUser?.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
              <Building2 className="h-6 w-6 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-500">Tenant Name</p>
                <p className="text-lg font-semibold text-gray-900">{currentTenant?.name}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
              <Shield className="h-6 w-6 text-purple-600" />
              <div>
                <p className="text-sm font-medium text-gray-500">Role</p>
                <p className="text-lg font-semibold text-gray-900">{currentRole?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}