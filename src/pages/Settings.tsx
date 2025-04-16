
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useForm } from 'react-hook-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Building, CreditCard, Bell, Shield, User } from 'lucide-react';

const Settings = () => {
  const companyForm = useForm({
    defaultValues: {
      companyName: 'Acme Inc.',
      companyAddress: '123 Main St, San Francisco, CA 94105',
      companyPhone: '(415) 555-1234',
      companyEmail: 'info@acmeinc.com',
      companyWebsite: 'https://acmeinc.com',
      companyLogo: '',
    },
  });

  const notificationForm = useForm({
    defaultValues: {
      emailNotifications: true,
      onboardingAlerts: true,
      documentAlerts: true,
      weeklyReports: false,
    },
  });

  const saveCompanySettings = (data: any) => {
    console.log('Company settings saved:', data);
    toast.success('Company settings updated successfully!');
  };

  const saveNotificationSettings = (data: any) => {
    console.log('Notification settings saved:', data);
    toast.success('Notification preferences updated successfully!');
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your company profile, preferences, and account settings.
        </p>
        
        <Tabs defaultValue="company" className="space-y-6">
          <TabsList>
            <TabsTrigger value="company">
              <Building className="mr-2 h-4 w-4" />
              Company
            </TabsTrigger>
            <TabsTrigger value="billing">
              <CreditCard className="mr-2 h-4 w-4" />
              Billing
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security">
              <Shield className="mr-2 h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="account">
              <User className="mr-2 h-4 w-4" />
              My Account
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle>Company Profile</CardTitle>
                <CardDescription>
                  Update your company information and branding.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...companyForm}>
                  <form 
                    onSubmit={companyForm.handleSubmit(saveCompanySettings)} 
                    className="space-y-6"
                  >
                    <FormField
                      control={companyForm.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={companyForm.control}
                      name="companyAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={companyForm.control}
                        name="companyPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={companyForm.control}
                        name="companyEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={companyForm.control}
                      name="companyWebsite"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={companyForm.control}
                      name="companyLogo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Logo</FormLabel>
                          <FormControl>
                            <div className="flex items-center gap-4">
                              <div className="border rounded-lg h-16 w-16 flex items-center justify-center bg-muted">
                                {field.value ? (
                                  <img
                                    src={field.value}
                                    alt="Company logo"
                                    className="max-h-full max-w-full object-contain"
                                  />
                                ) : (
                                  <Building className="h-8 w-8 text-muted-foreground" />
                                )}
                              </div>
                              <Button variant="outline" type="button">
                                Upload Logo
                              </Button>
                            </div>
                          </FormControl>
                          <FormDescription>
                            Recommended size: 512x512px. Max file size: 2MB.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit">
                      Save Company Settings
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>
                  Manage your subscription and payment methods.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Current Plan</h3>
                    <div className="mt-2 p-4 border rounded-lg bg-muted/50">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-semibold text-lg">Business Plan</p>
                          <p className="text-muted-foreground">$49.99/month, billed annually</p>
                        </div>
                        <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Active</Badge>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground">Your next payment of $599.88 will be processed on May 15, 2023.</p>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm">Change Plan</Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">Cancel Subscription</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium">Payment Methods</h3>
                    <div className="mt-2 space-y-2">
                      <div className="p-4 border rounded-lg flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                          <div className="bg-slate-100 p-2 rounded">
                            <CreditCard className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">•••• •••• •••• 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 06/2025</p>
                          </div>
                        </div>
                        <Badge>Default</Badge>
                      </div>
                      <Button variant="outline" className="w-full">Add Payment Method</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium">Billing History</h3>
                    <div className="mt-2 border rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-border">
                        <thead className="bg-muted">
                          <tr>
                            <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Description</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                          <tr>
                            <td className="py-3 px-4 text-sm">Apr 15, 2023</td>
                            <td className="py-3 px-4 text-sm">Business Plan - Annual Subscription</td>
                            <td className="py-3 px-4 text-sm">$599.88</td>
                            <td className="py-3 px-4 text-sm">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Paid</Badge>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-sm">Mar 15, 2023</td>
                            <td className="py-3 px-4 text-sm">Additional Team Members (5)</td>
                            <td className="py-3 px-4 text-sm">$50.00</td>
                            <td className="py-3 px-4 text-sm">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Paid</Badge>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Configure how and when you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...notificationForm}>
                  <form 
                    onSubmit={notificationForm.handleSubmit(saveNotificationSettings)} 
                    className="space-y-6"
                  >
                    <FormField
                      control={notificationForm.control}
                      name="emailNotifications"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <FormLabel className="text-base">Email Notifications</FormLabel>
                            <FormDescription>
                              Receive notifications via email
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="onboardingAlerts"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <FormLabel className="text-base">Onboarding Alerts</FormLabel>
                            <FormDescription>
                              Get notified about onboarding progress and tasks
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="documentAlerts"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <FormLabel className="text-base">Document Alerts</FormLabel>
                            <FormDescription>
                              Get notified when documents are uploaded or require action
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="weeklyReports"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <FormLabel className="text-base">Weekly Report Summary</FormLabel>
                            <FormDescription>
                              Receive a weekly summary of all activities
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit">
                      Save Notification Preferences
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security and access control.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-medium">Password</h3>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Change Password</p>
                        <p className="text-sm text-muted-foreground">
                          Last updated 3 months ago
                        </p>
                      </div>
                      <Button variant="outline">Update Password</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium">Active Sessions</h3>
                    <div className="border rounded-lg">
                      <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Chrome on MacOS</p>
                            <p className="text-sm text-muted-foreground">
                              San Francisco, CA • Current session
                            </p>
                          </div>
                          <Badge>Current</Badge>
                        </div>
                      </div>
                      <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Safari on iPhone</p>
                            <p className="text-sm text-muted-foreground">
                              San Francisco, CA • 2 hours ago
                            </p>
                          </div>
                          <Button variant="outline" size="sm">Log Out</Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Firefox on Windows</p>
                            <p className="text-sm text-muted-foreground">
                              San Francisco, CA • 3 days ago
                            </p>
                          </div>
                          <Button variant="outline" size="sm">Log Out</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="destructive">Log Out All Devices</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Update your personal information and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="sm:w-1/3">
                      <div className="flex flex-col items-center p-6 border rounded-lg">
                        <div className="w-24 h-24 rounded-full border-4 border-primary/20 mb-4 overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="font-medium text-lg">Alex Johnson</p>
                        <p className="text-muted-foreground">HR Administrator</p>
                        <Button variant="outline" className="mt-4 w-full">
                          Change Photo
                        </Button>
                      </div>
                    </div>
                    
                    <div className="sm:w-2/3 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">First Name</label>
                          <Input defaultValue="Alex" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Last Name</label>
                          <Input defaultValue="Johnson" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input defaultValue="alex.johnson@example.com" type="email" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input defaultValue="(123) 456-7890" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Job Title</label>
                        <Input defaultValue="HR Administrator" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Time Zone</label>
                        <Select defaultValue="pacific">
                          <SelectTrigger>
                            <SelectValue placeholder="Select a timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="eastern">Eastern Time (ET)</SelectItem>
                            <SelectItem value="central">Central Time (CT)</SelectItem>
                            <SelectItem value="mountain">Mountain Time (MT)</SelectItem>
                            <SelectItem value="pacific">Pacific Time (PT)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={() => toast.success("Account information updated!")}>
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

const Badge = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { className?: string }) => {
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Settings;
