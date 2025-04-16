
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Users, 
  FileText, 
  LayoutDashboard, 
  LogOut, 
  Settings, 
  Menu,
  UserPlus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const menuItems = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5 mr-2" />,
  },
  {
    name: 'Onboarding',
    path: '/onboarding',
    icon: <UserPlus className="w-5 h-5 mr-2" />,
  },
  {
    name: 'Employees',
    path: '/employees',
    icon: <Users className="w-5 h-5 mr-2" />,
  },
  {
    name: 'Documents',
    path: '/documents',
    icon: <FileText className="w-5 h-5 mr-2" />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <Settings className="w-5 h-5 mr-2" />,
  },
];

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const renderNav = () => (
    <nav className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Link to="/dashboard" className="flex items-center">
          <div className="bg-primary text-white p-2 rounded-lg mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">PayLancer</span>
            <span className="text-xs text-muted-foreground">HR Onboarding</span>
          </div>
        </Link>
      </div>

      <div className="flex-1 py-8">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
                onClick={() => setMobileNavOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t mt-auto">
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50">
          <LogOut className="w-5 h-5 mr-2" />
          <span>Sign Out</span>
        </Button>
      </div>
    </nav>
  );

  return (
    <div className="app-layout">
      {isMobile ? (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b p-4 flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center">
              <div className="bg-primary text-white p-1 rounded-md mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold">PayLancer</span>
            </Link>

            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                {renderNav()}
              </SheetContent>
            </Sheet>
          </div>

          <main className="content-area col-span-full pt-16">
            {children}
          </main>
        </>
      ) : (
        <>
          <aside className="w-64 border-r bg-sidebar h-screen overflow-y-auto">
            {renderNav()}
          </aside>

          <main className="content-area">
            {children}
          </main>
        </>
      )}
    </div>
  );
};

export default MainLayout;
