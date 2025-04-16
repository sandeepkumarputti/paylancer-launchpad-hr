
import React from 'react';
import { 
  Users, 
  FileText, 
  Clock, 
  AlertTriangle,
  CheckCircle2 
} from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: string;
  icon: React.ReactNode;
  trendUp?: boolean;
}

const MetricCard = ({ title, value, trend, icon, trendUp }: MetricCardProps) => {
  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {trend && (
            <p className={`text-xs mt-1 flex items-center ${
              trendUp ? 'text-green-500' : 'text-red-500'
            }`}>
              {trendUp ? '↑' : '↓'} {trend}
            </p>
          )}
        </div>
        <div className="bg-primary/10 p-3 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
};

export const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <MetricCard 
        title="Total Employees" 
        value={42}
        trend="12% from last month"
        trendUp={true}
        icon={<Users className="h-6 w-6 text-primary" />}
      />
      
      <MetricCard 
        title="Onboarding" 
        value={5}
        icon={<UserPlus className="h-6 w-6 text-purple-600" />}
      />
      
      <MetricCard 
        title="Pending Documents" 
        value={8}
        icon={<FileText className="h-6 w-6 text-amber-500" />}
      />
      
      <MetricCard 
        title="Time-off Requests" 
        value={3}
        icon={<Clock className="h-6 w-6 text-blue-500" />}
      />
    </div>
  );
};

const UserPlus = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  );
};

export default DashboardMetrics;
