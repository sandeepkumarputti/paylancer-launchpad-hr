
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import DocumentsList from '@/components/documents/DocumentsList';

const Documents = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Documents</h1>
        <p className="text-muted-foreground">
          Manage and track all employee documents in one place.
        </p>
        
        <DocumentsList />
      </div>
    </MainLayout>
  );
};

export default Documents;
