
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  MoreVertical,
  Search,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Building,
  Calendar,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Employee type definition
interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  location: string;
  startDate: string;
  status: 'active' | 'onboarding' | 'offboarding' | 'inactive';
  avatar?: string;
}

// Sample employees data
const employees: Employee[] = [
  {
    id: '1',
    name: 'Olivia Martin',
    email: 'olivia.martin@example.com',
    phone: '(123) 456-7890',
    department: 'Engineering',
    position: 'Frontend Developer',
    location: 'San Francisco, CA',
    startDate: '2021-06-15',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: '2',
    name: 'Jackson Lee',
    email: 'jackson.lee@example.com',
    phone: '(234) 567-8901',
    department: 'Design',
    position: 'UI/UX Designer',
    location: 'New York, NY',
    startDate: '2022-01-10',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
  },
  {
    id: '3',
    name: 'Sophia Williams',
    email: 'sophia.williams@example.com',
    phone: '(345) 678-9012',
    department: 'Marketing',
    position: 'Marketing Manager',
    location: 'Chicago, IL',
    startDate: '2022-02-22',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
  {
    id: '4',
    name: 'Liam Johnson',
    email: 'liam.johnson@example.com',
    phone: '(456) 789-0123',
    department: 'Sales',
    position: 'Sales Representative',
    location: 'Austin, TX',
    startDate: '2023-01-05',
    status: 'onboarding',
  },
  {
    id: '5',
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
    phone: '(567) 890-1234',
    department: 'Engineering',
    position: 'Backend Developer',
    location: 'Seattle, WA',
    startDate: '2021-11-18',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4',
  },
  {
    id: '6',
    name: 'Noah Wilson',
    email: 'noah.wilson@example.com',
    phone: '(678) 901-2345',
    department: 'Product',
    position: 'Product Manager',
    location: 'Boston, MA',
    startDate: '2022-07-12',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    id: '7',
    name: 'Ava Brown',
    email: 'ava.brown@example.com',
    phone: '(789) 012-3456',
    department: 'Customer Service',
    position: 'Support Specialist',
    location: 'Miami, FL',
    startDate: '2023-04-03',
    status: 'onboarding',
  },
  {
    id: '8',
    name: 'Mason Taylor',
    email: 'mason.taylor@example.com',
    phone: '(890) 123-4567',
    department: 'Finance',
    position: 'Financial Analyst',
    location: 'Denver, CO',
    startDate: '2021-09-20',
    status: 'inactive',
  },
];

// Get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
};

// Status badge component
const StatusBadge = ({ status }: { status: Employee['status'] }) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>;
    case 'onboarding':
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Onboarding</Badge>;
    case 'offboarding':
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Offboarding</Badge>;
    case 'inactive':
      return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200">Inactive</Badge>;
    default:
      return null;
  }
};

export const EmployeesList = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('all');
  
  // Filter employees based on search term and active tab
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    return matchesSearch && employee.status === activeTab;
  });
  
  // Count employees by status
  const counts = {
    all: employees.length,
    active: employees.filter(e => e.status === 'active').length,
    onboarding: employees.filter(e => e.status === 'onboarding').length,
    offboarding: employees.filter(e => e.status === 'offboarding').length,
    inactive: employees.filter(e => e.status === 'inactive').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Team Members</h2>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="col-span-full">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle>Employees</CardTitle>
              <div className="relative w-64">
                <Input
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">
                  All ({counts.all})
                </TabsTrigger>
                <TabsTrigger value="active">
                  Active ({counts.active})
                </TabsTrigger>
                <TabsTrigger value="onboarding">
                  Onboarding ({counts.onboarding})
                </TabsTrigger>
                <TabsTrigger value="offboarding">
                  Offboarding ({counts.offboarding})
                </TabsTrigger>
                <TabsTrigger value="inactive">
                  Inactive ({counts.inactive})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="space-y-4">
                {filteredEmployees.length > 0 ? (
                  filteredEmployees.map(employee => (
                    <div 
                      key={employee.id} 
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage 
                            src={employee.avatar} 
                            alt={employee.name}
                          />
                          <AvatarFallback>{getInitials(employee.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{employee.name}</h3>
                          <p className="text-sm text-muted-foreground">{employee.position}</p>
                        </div>
                      </div>
                      
                      <div className="hidden md:flex items-center space-x-8 text-sm">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{employee.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span>{employee.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{employee.location}</span>
                        </div>
                        <div>
                          <StatusBadge status={employee.status} />
                        </div>
                      </div>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Details</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Send Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Phone className="mr-2 h-4 w-4" />
                            <span>Call</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No employees found matching your criteria.
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeesList;
