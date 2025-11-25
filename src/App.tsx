import { useState } from 'react';
import { BrokerSignupForm } from './components/BrokerSignupForm';
import { AdminPortalDashboard } from './components/AdminPortalDashboard';
import { BrokerClientTracker } from './components/BrokerClientTracker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

export default function App() {
  const [activeWireframe, setActiveWireframe] = useState('signup');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-center text-blue-600">
            Offshore Real Estate Broker Management Portal - Wireframes
          </h1>
          <p className="text-center text-gray-500 mt-1">
            Professional UI Wireframes for Business Requirements Document
          </p>
        </div>
      </div>

      {/* Wireframe Selector */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeWireframe} onValueChange={setActiveWireframe} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="signup">Broker Signup Form</TabsTrigger>
            <TabsTrigger value="admin">Admin Portal Dashboard</TabsTrigger>
            <TabsTrigger value="tracker">Broker Client Tracker</TabsTrigger>
          </TabsList>

          <TabsContent value="signup">
            <BrokerSignupForm />
          </TabsContent>

          <TabsContent value="admin">
            <AdminPortalDashboard />
          </TabsContent>

          <TabsContent value="tracker">
            <BrokerClientTracker />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
