import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar } from './ui/calendar';
import { AddClientDialog } from './AddClientDialog';
import { AgreementManagementDialog } from './AgreementManagementDialog';
import {
  Building2,
  Users,
  Phone,
  Mail,
  TrendingUp,
  UserPlus,
  Search,
  MoreVertical,
  Bell,
  Calendar as CalendarIcon,
  CheckCircle2,
  FileText
} from 'lucide-react';

export function BrokerClientTracker() {
  const [view, setView] = useState('table');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showAddClientDialog, setShowAddClientDialog] = useState(false);
  const [showAgreementDialog, setShowAgreementDialog] = useState(false);

  const stats = [
    { label: 'Total Leads', labelAr: 'إجمالي العملاء المحتملين', value: '156', icon: Users, color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { label: 'Contacted', labelAr: 'تم الاتصال', value: '89', icon: Phone, color: 'bg-purple-50 text-purple-600 border-purple-200' },
    { label: 'Interested', labelAr: 'مهتم', value: '42', icon: TrendingUp, color: 'bg-yellow-50 text-yellow-600 border-yellow-200' },
    { label: 'Closed', labelAr: 'مغلق', value: '28', icon: CheckCircle2, color: 'bg-green-50 text-green-600 border-green-200' }
  ];

  const clients = [
    {
      id: 'CL-001',
      name: 'Mohammed Al-Rashid',
      nameAr: 'محمد الراشد',
      phone: '+966 555-1234',
      email: 'mohammed@email.com',
      status: 'Interested',
      statusAr: 'مهتم',
      lastContact: '2025-11-06',
      nextFollowup: '2025-11-10',
      property: '3BR Villa - Riyadh'
    },
    {
      id: 'CL-002',
      name: 'Fatima Hassan',
      nameAr: 'فاطمة حسن',
      phone: '+966 555-5678',
      email: 'fatima@email.com',
      status: 'Contacted',
      statusAr: 'تم الاتصال',
      lastContact: '2025-11-05',
      nextFollowup: '2025-11-09',
      property: '2BR Apartment - Jeddah'
    },
    {
      id: 'CL-003',
      name: 'Abdullah Khalid',
      nameAr: 'عبدالله خالد',
      phone: '+966 555-9012',
      email: 'abdullah@email.com',
      status: 'Closed',
      statusAr: 'مغلق',
      lastContact: '2025-11-04',
      nextFollowup: '-',
      property: '4BR Townhouse - Dammam'
    },
    {
      id: 'CL-004',
      name: 'Layla Ahmed',
      nameAr: 'ليلى أحمد',
      phone: '+966 555-3456',
      email: 'layla@email.com',
      status: 'New Lead',
      statusAr: 'عميل جديد',
      lastContact: '2025-11-08',
      nextFollowup: '2025-11-11',
      property: 'Commercial Office - Riyadh'
    },
    {
      id: 'CL-005',
      name: 'Omar Saeed',
      nameAr: 'عمر سعيد',
      phone: '+966 555-7890',
      email: 'omar@email.com',
      status: 'Interested',
      statusAr: 'مهتم',
      lastContact: '2025-11-07',
      nextFollowup: '2025-11-12',
      property: 'Luxury Villa - Jeddah'
    }
  ];

  const upcomingFollowups = [
    { date: '2025-11-09', client: 'Fatima Hassan', clientAr: 'فاطمة حسن', time: '10:00 AM' },
    { date: '2025-11-10', client: 'Mohammed Al-Rashid', clientAr: 'محمد الراشد', time: '2:00 PM' },
    { date: '2025-11-11', client: 'Layla Ahmed', clientAr: 'ليلى أحمد', time: '11:00 AM' },
    { date: '2025-11-12', client: 'Omar Saeed', clientAr: 'عمر سعيد', time: '3:00 PM' }
  ];

  const notifications = [
    { id: 1, message: 'Follow-up with Fatima Hassan tomorrow', messageAr: 'متابعة مع فاطمة حسن غداً', time: '1 hour ago' },
    { id: 2, message: 'New lead assigned: Sarah Ali', messageAr: 'عميل جديد: سارة علي', time: '3 hours ago' },
    { id: 3, message: 'Document submitted by Mohammed', messageAr: 'تم تقديم المستند من محمد', time: '5 hours ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New Lead':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Contacted':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Interested':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Closed':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-blue-900">Client Tracker Dashboard</h1>
              <p className="text-gray-600 text-sm" dir="rtl">لوحة تتبع العملاء</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input placeholder="Search clients... / البحث" className="pl-10 w-64" />
            </div>
            <Button 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center gap-2" 
              onClick={() => setShowAgreementDialog(true)}
            >
              <FileText size={18} />
              My Agreements
              <span className="mr-2" dir="rtl">اتفاقياتي</span>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2" onClick={() => setShowAddClientDialog(true)}>
              <UserPlus size={18} />
              Add New Client
              <span className="mr-2" dir="rtl">إضافة عميل</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className={`p-6 border ${stat.color}`}>
              <div className="flex items-center justify-between mb-3">
                <Icon size={24} />
                <span className="text-2xl">{stat.value}</span>
              </div>
              <p className="text-sm mb-1">{stat.label}</p>
              <p className="text-xs" dir="rtl">{stat.labelAr}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content - Client List */}
        <div className="col-span-2">
          <Card className="bg-white rounded-lg shadow-md">
            {/* Tabs for View Selection */}
            <div className="border-b border-gray-200 p-4">
              <Tabs value={view} onValueChange={setView}>
                <TabsList>
                  <TabsTrigger value="table">Table View</TabsTrigger>
                  <TabsTrigger value="kanban">Kanban View</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Table View */}
            {view === 'table' && (
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead>
                      <div>Client ID</div>
                      <div className="text-xs text-gray-500" dir="rtl">رقم العميل</div>
                    </TableHead>
                    <TableHead>
                      <div>Client Name</div>
                      <div className="text-xs text-gray-500" dir="rtl">اسم العميل</div>
                    </TableHead>
                    <TableHead>
                      <div>Contact</div>
                      <div className="text-xs text-gray-500" dir="rtl">الاتصال</div>
                    </TableHead>
                    <TableHead>
                      <div>Property Interest</div>
                      <div className="text-xs text-gray-500" dir="rtl">العقار المهتم به</div>
                    </TableHead>
                    <TableHead>
                      <div>Status</div>
                      <div className="text-xs text-gray-500" dir="rtl">الحالة</div>
                    </TableHead>
                    <TableHead>
                      <div>Next Follow-up</div>
                      <div className="text-xs text-gray-500" dir="rtl">المتابعة القامة</div>
                    </TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id} className="hover:bg-gray-50">
                      <TableCell>
                        <span className="text-blue-600">{client.id}</span>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{client.name}</p>
                          <p className="text-gray-500 text-sm" dir="rtl">{client.nameAr}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Phone size={12} className="text-gray-400" />
                            <span>{client.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Mail size={12} className="text-gray-400" />
                            <span className="text-gray-600">{client.email}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm">{client.property}</p>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(client.status)} border`}>
                          <div className="text-center">
                            <p className="text-xs">{client.status}</p>
                            <p className="text-xs" dir="rtl">{client.statusAr}</p>
                          </div>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm">{client.nextFollowup}</p>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}

            {/* Kanban View */}
            {view === 'kanban' && (
              <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                  {['New Lead', 'Contacted', 'Interested', 'Closed'].map((status, index) => (
                    <div key={status} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm">{status}</h3>
                        <Badge variant="outline" className="text-xs">
                          {clients.filter((c) => c.status === status).length}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {clients
                          .filter((c) => c.status === status)
                          .map((client) => (
                            <Card key={client.id} className="p-3 bg-white border-l-4 border-blue-600 hover:shadow-md transition-shadow cursor-pointer">
                              <p className="text-sm mb-1">{client.name}</p>
                              <p className="text-xs text-gray-500 mb-2" dir="rtl">{client.nameAr}</p>
                              <p className="text-xs text-gray-600 mb-2">{client.property}</p>
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>{client.phone}</span>
                                <CalendarIcon size={12} />
                              </div>
                            </Card>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Right Sidebar - Calendar & Notifications */}
        <div className="space-y-6">
          {/* Upcoming Follow-ups */}
          <Card className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-blue-900">Upcoming Follow-Ups</h3>
                <p className="text-gray-600 text-xs" dir="rtl">المتابعات القادمة</p>
              </div>
              <CalendarIcon className="text-blue-600" size={20} />
            </div>

            {/* Calendar */}
            <div className="mb-4 flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>

            {/* Follow-up List */}
            <div className="space-y-3">
              {upcomingFollowups.map((followup, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <div className="text-center">
                      <p className="text-xs">{new Date(followup.date).getDate()}</p>
                      <p className="text-xs">
                        {new Date(followup.date).toLocaleDateString('en-US', { month: 'short' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{followup.client}</p>
                    <p className="text-xs text-gray-600" dir="rtl">{followup.clientAr}</p>
                    <p className="text-xs text-gray-500 mt-1">{followup.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Notifications */}
          <Card className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-blue-900">Notifications</h3>
                <p className="text-gray-600 text-xs" dir="rtl">الإشعارات</p>
              </div>
              <div className="relative">
                <Bell className="text-blue-600" size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  3
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start gap-2">
                    <Bell size={14} className="text-yellow-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm mb-1">{notification.message}</p>
                      <p className="text-xs text-gray-600" dir="rtl">{notification.messageAr}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4">
              View All Notifications
            </Button>
          </Card>
        </div>
      </div>

      {/* Add Client Dialog */}
      <AddClientDialog 
        open={showAddClientDialog} 
        onOpenChange={setShowAddClientDialog} 
      />

      {/* Agreement Management Dialog */}
      <AgreementManagementDialog 
        open={showAgreementDialog} 
        onOpenChange={setShowAgreementDialog}
        brokerName="Current Broker"
        brokerNameAr="الوسيط الحالي"
        brokerId="BRK-001"
      />
    </div>
  );
}