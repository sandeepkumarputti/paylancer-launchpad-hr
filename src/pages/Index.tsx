
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Automatically redirect to dashboard for now
    // This could be replaced with a proper login flow in the future
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-paylancer-600 to-purple-600 opacity-10"></div>
        
        <div className="relative pb-16 sm:pb-24">
          <div className="px-4 pt-6 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between" aria-label="Global">
              <div className="flex items-center">
                <div className="flex items-center">
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
                  <span className="text-2xl font-bold text-gray-900">PayLancer</span>
                </div>
              </div>
              
              <div className="hidden md:flex md:items-center md:space-x-6">
                <Button
                  onClick={() => navigate('/dashboard')}
                  variant="outline"
                >
                  Log In
                </Button>
                <Button onClick={() => navigate('/dashboard')}>
                  Get Started
                </Button>
              </div>
              
              <div className="flex md:hidden">
                <Button
                  onClick={() => navigate('/dashboard')}
                >
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
          
          <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">The modern way to</span>
                <span className="block text-primary">onboard your team</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                PayLancer streamlines HR processes, from onboarding new hires to managing employee documents, all in one intuitive platform.
              </p>
              <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Button
                    onClick={() => navigate('/dashboard')}
                    size="lg"
                    className="w-full md:w-auto px-8 py-3 text-base font-medium"
                  >
                    Get Started
                  </Button>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Button
                    onClick={() => navigate('/dashboard')}
                    variant="outline"
                    size="lg"
                    className="w-full md:w-auto px-8 py-3 text-base font-medium"
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-1"></div>
            <div className="bg-gray-100 w-full h-1/3 md:h-1/4"></div>
          </div>
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                className="w-full h-auto"
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=3270&h=1280"
                alt="Dashboard preview"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <div className="bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for HR management
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500">
              Simplify your HR processes with our comprehensive suite of tools.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white px-6 py-8 shadow-lg">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" x2="19" y1="8" y2="14" />
                  <line x1="22" x2="16" y1="11" y2="11" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Streamlined Onboarding</h3>
              <p className="mt-2 text-base text-gray-500">
                Automate the onboarding process with customizable workflows, document collection, and task management.
              </p>
            </div>
            
            <div className="rounded-lg bg-white px-6 py-8 shadow-lg">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Document Management</h3>
              <p className="mt-2 text-base text-gray-500">
                Securely store, organize, and track employee documents with automated reminders for renewals and updates.
              </p>
            </div>
            
            <div className="rounded-lg bg-white px-6 py-8 shadow-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M3 3v18h18" />
                  <path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Powerful Analytics</h3>
              <p className="mt-2 text-base text-gray-500">
                Gain insights with comprehensive reporting on employee data, onboarding metrics, and document compliance.
              </p>
            </div>
            
            <div className="rounded-lg bg-white px-6 py-8 shadow-lg">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-600"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Secure & Compliant</h3>
              <p className="mt-2 text-base text-gray-500">
                Enterprise-grade security and privacy controls to protect sensitive employee information and maintain compliance.
              </p>
            </div>
            
            <div className="rounded-lg bg-white px-6 py-8 shadow-lg">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Customizable Workflows</h3>
              <p className="mt-2 text-base text-gray-500">
                Build and customize workflows to match your organization's unique onboarding and HR processes.
              </p>
            </div>
            
            <div className="rounded-lg bg-white px-6 py-8 shadow-lg">
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 1 3 3 3h6c2 0 3-1 3-3v-5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Employee Self-Service</h3>
              <p className="mt-2 text-base text-gray-500">
                Empower employees with self-service portals for document submission, information updates, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to simplify your HR management?
              </h2>
              <p className="mt-3 max-w-md text-lg text-primary-foreground opacity-80">
                Join thousands of companies using PayLancer to streamline their HR operations and improve employee experience.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <Button 
                    onClick={() => navigate('/dashboard')}
                    variant="secondary"
                    size="lg"
                    className="px-5 py-3 text-base font-medium"
                  >
                    Get Started Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="flex justify-center lg:justify-end space-y-0 space-x-6">
                <div className="flex flex-col items-center">
                  <p className="text-5xl font-bold text-white">98%</p>
                  <p className="mt-2 text-primary-foreground opacity-80">Customer Satisfaction</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-5xl font-bold text-white">85%</p>
                  <p className="mt-2 text-primary-foreground opacity-80">Reduced Onboarding Time</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-5xl font-bold text-white">24/7</p>
                  <p className="mt-2 text-primary-foreground opacity-80">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center">
                <div className="bg-primary text-white p-1.5 rounded-md mr-2">
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
                <span className="text-lg font-bold text-gray-900">PayLancer</span>
              </div>
              <p className="mt-2 text-base text-gray-500">
                Modern HR management for modern businesses.
              </p>
            </div>
            <div className="col-span-2 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Features</a></li>
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</a></li>
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Security</a></li>
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Changelog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a></li>
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a></li>
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Careers</a></li>
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Help Center</a></li>
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Documentation</a></li>
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">API Status</a></li>
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Community</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex justify-between items-center">
              <p className="text-base text-gray-500">
                &copy; 2023 PayLancer. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
