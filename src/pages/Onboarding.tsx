
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import OnboardingWizard from '@/components/onboarding/OnboardingWizard';

const Onboarding = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Employee Onboarding</h1>
        <p className="text-muted-foreground">
          Add new employees to your organization and guide them through the onboarding process.
        </p>
        
        <OnboardingWizard />
      </div>
    </MainLayout>
  );
};

export default Onboarding;
