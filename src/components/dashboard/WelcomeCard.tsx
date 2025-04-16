
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

export const WelcomeCard = () => {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  
  let greeting = 'Good evening';
  if (hour < 12) greeting = 'Good morning';
  else if (hour < 18) greeting = 'Good afternoon';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          {greeting}, Alex! 👋
        </CardTitle>
        <CardDescription>
          Here's what's happening with your team today.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-amber-50 border border-amber-100 rounded-lg">
            <div className="bg-amber-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-amber-800">3 employees haven't completed onboarding</p>
              <p className="text-xs text-amber-600 mt-1">Action required</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-800">Next payroll deadline in 4 days</p>
              <p className="text-xs text-blue-600 mt-1">Mark your calendar</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-green-50 border border-green-100 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-green-800">You've completed 85% of your tasks</p>
              <p className="text-xs text-green-600 mt-1">Great progress!</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button asChild className="flex-1">
            <Link to="/onboarding">Complete Onboarding Tasks</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link to="/documents">View Documents</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WelcomeCard;
