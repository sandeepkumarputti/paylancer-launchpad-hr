
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

// Define the steps for the wizard
const steps = [
  { 
    id: 'personal', 
    name: 'Personal Information',
    fields: ['firstName', 'lastName', 'email', 'phone'],
  },
  { 
    id: 'employment', 
    name: 'Employment Details',
    fields: ['jobTitle', 'department', 'startDate', 'employmentType'],
  },
  { 
    id: 'documents', 
    name: 'Required Documents',
    fields: ['acceptedTerms', 'uploadedDocuments'],
  },
  { 
    id: 'complete', 
    name: 'Complete',
    fields: [],
  },
];

// Form schema for validation
const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  jobTitle: z.string().min(2, 'Job title is required'),
  department: z.string().min(2, 'Department is required'),
  startDate: z.string().min(1, 'Start date is required'),
  employmentType: z.string().min(1, 'Employment type is required'),
  acceptedTerms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
  uploadedDocuments: z.boolean().refine(val => val === true, {
    message: 'You must confirm all required documents are uploaded',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export const OnboardingWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  // Initialize the form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobTitle: '',
      department: '',
      startDate: '',
      employmentType: '',
      acceptedTerms: false,
      uploadedDocuments: false,
    },
  });
  
  const { control, handleSubmit, trigger, getValues } = form;
  
  const processForm = (values: FormValues) => {
    console.log('Form submitted with values:', values);
    toast.success('Employee onboarding completed successfully!');
  };
  
  const onSubmit = async (data: FormValues) => {
    if (currentStep === steps.length - 1) {
      processForm(data);
    } else {
      const fieldsToValidate = steps[currentStep].fields;
      const output = await trigger(fieldsToValidate as any[], { shouldFocus: true });
      
      if (output) {
        setCurrentStep(currentStep + 1);
      }
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative mb-8">
        <div className="overflow-hidden h-2 text-xs flex bg-muted rounded">
          <div 
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" 
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between mt-3">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                index < currentStep 
                  ? 'bg-primary border-primary' 
                  : index === currentStep 
                  ? 'border-primary text-primary' 
                  : 'border-muted-foreground text-muted-foreground'
              }`}>
                {index < currentStep ? (
                  <CheckCircle className="w-4 h-4 text-white" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span className="text-xs text-muted-foreground mt-1">{step.name}</span>
            </div>
          ))}
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep].name}</CardTitle>
              <CardDescription>
                {currentStep === 0 && "Enter the new employee's personal details."}
                {currentStep === 1 && "Provide details about the employee's position."}
                {currentStep === 2 && "Ensure all required documents are submitted."}
                {currentStep === 3 && "Review and complete the onboarding process."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Step 1: Personal Information */}
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 2: Employment Details */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <FormField
                    control={control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Software Engineer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="engineering">Engineering</SelectItem>
                              <SelectItem value="product">Product</SelectItem>
                              <SelectItem value="design">Design</SelectItem>
                              <SelectItem value="marketing">Marketing</SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="support">Customer Support</SelectItem>
                              <SelectItem value="hr">Human Resources</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={control}
                    name="employmentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Type</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select employment type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full-time">Full-time</SelectItem>
                              <SelectItem value="part-time">Part-time</SelectItem>
                              <SelectItem value="contract">Contract</SelectItem>
                              <SelectItem value="intern">Internship</SelectItem>
                              <SelectItem value="temp">Temporary</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 3: Required Documents */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">Required Documents</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Government-issued ID (Passport, Driver's License)</li>
                      <li>Social Security Card or Birth Certificate</li>
                      <li>Completed I-9 Form</li>
                      <li>Completed W-4 Form</li>
                      <li>Direct Deposit Authorization Form</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Document Upload</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      For security reasons, please upload documents through the secure document portal link sent to the employee's email.
                    </p>
                    <Button variant="outline" type="button" className="w-full">
                      Send Document Upload Link
                    </Button>
                  </div>
                  
                  <FormField
                    control={control}
                    name="uploadedDocuments"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Documents Uploaded</FormLabel>
                          <FormDescription>
                            I confirm that all required documents have been uploaded or will be provided.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={control}
                    name="acceptedTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Terms and Conditions</FormLabel>
                          <FormDescription>
                            I agree to the company's terms and conditions, privacy policy, and code of conduct.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 4: Complete */}
              {currentStep === 3 && (
                <div className="space-y-4 text-center py-6">
                  <div className="flex justify-center">
                    <div className="rounded-full bg-green-100 p-3">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold">Onboarding Complete!</h3>
                  
                  <p className="text-muted-foreground">
                    You have successfully completed the onboarding process for:
                  </p>
                  
                  <div className="bg-muted p-4 rounded-lg text-left mt-4">
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-sm text-muted-foreground">Name:</p>
                      <p className="text-sm font-medium">{getValues('firstName')} {getValues('lastName')}</p>
                      
                      <p className="text-sm text-muted-foreground">Email:</p>
                      <p className="text-sm font-medium">{getValues('email')}</p>
                      
                      <p className="text-sm text-muted-foreground">Position:</p>
                      <p className="text-sm font-medium">{getValues('jobTitle')}</p>
                      
                      <p className="text-sm text-muted-foreground">Department:</p>
                      <p className="text-sm font-medium">{getValues('department')}</p>
                      
                      <p className="text-sm text-muted-foreground">Start Date:</p>
                      <p className="text-sm font-medium">{getValues('startDate')}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    An email with all details has been sent to the employee and relevant team members.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              
              <Button type="submit">
                {currentStep === steps.length - 1 
                  ? 'Complete Onboarding' 
                  : (
                    <>
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )
                }
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default OnboardingWizard;
