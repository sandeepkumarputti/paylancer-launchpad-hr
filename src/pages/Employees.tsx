
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import EmployeesList from '@/components/employees/EmployeesList';

const Employees = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Team Management</h1>
        <p className="text-muted-foreground">
          View and manage your entire team from one central location.
        </p>
        
        <EmployeesList />
      </div>
    </MainLayout>
  );
};

export default Employees;
