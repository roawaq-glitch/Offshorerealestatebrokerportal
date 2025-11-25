import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ProjectAssignmentDialog } from "./ProjectAssignmentDialog";
import { AgreementManagementDialog } from "./AgreementManagementDialog";
import {
  Building2,
  Users,
  FileText,
  Settings,
  Search,
  Download,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  LayoutDashboard,
  AlertTriangle,
  Clock,
  Eye,
  TrendingUp,
  BarChart3,
  PieChart,
  Filter,
  Bell,
  Lock,
  Globe,
  Palette,
  FolderKanban,
  RotateCw
} from "lucide-react";

export function AdminPortalDashboard() {
  const [activeMenu, setActiveMenu] = useState(
    "broker-requests",
  );
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  const [showAgreementDialog, setShowAgreementDialog] = useState(false);
  const [selectedBroker, setSelectedBroker] = useState<{
    id: string;
    name: string;
    nameAr: string;
  } | null>(null);

  const menuItems = [
    {
      id: "broker-requests",
      label: "Broker Requests",
      labelAr: "طلبات الوسطاء",
      icon: Users,
    },
    {
      id: "compliance",
      label: "Compliance Queue",
      labelAr: "قائمة الامتثال",
      icon: FileText,
    },
    {
      id: "reports",
      label: "Reports",
      labelAr: "التقارير",
      icon: LayoutDashboard,
    },
    {
      id: "settings",
      label: "Settings",
      labelAr: "الإعدادات",
      icon: Settings,
    },
  ];

  const brokerRequests = [
    {
      id: "BR-001",
      name: "Ahmed Al-Saud",
      nameAr: "أحمد السعود",
      type: "Individual",
      typeAr: "فردي",
      city: "Riyadh",
      cityAr: "الرياض",
      status: "Pending",
      statusAr: "قيد الانتظار",
      date: "2025-11-01",
    },
    {
      id: "BR-002",
      name: "Gulf Properties LLC",
      nameAr: "شركة عقارات الخليج",
      type: "Company",
      typeAr: "شركة",
      city: "Jeddah",
      cityAr: "جدة",
      status: "Approved",
      statusAr: "موافق عليه",
      date: "2025-10-28",
    },
    {
      id: "BR-003",
      name: "Sara Mohammed",
      nameAr: "سارة محمد",
      type: "Individual",
      typeAr: "فردي",
      city: "Dammam",
      cityAr: "الدمام",
      status: "Rejected",
      statusAr: "مرفوض",
      date: "2025-10-25",
    },
    {
      id: "BR-004",
      name: "Eastern Real Estate Co.",
      nameAr: "شركة العقارات الشرقية",
      type: "Company",
      typeAr: "شركة",
      city: "Khobar",
      cityAr: "الخبر",
      status: "Pending",
      statusAr: "قيد الانتظار",
      date: "2025-11-03",
    },
    {
      id: "BR-005",
      name: "Khalid Al-Zahrani",
      nameAr: "خالد الزهراني",
      type: "Individual",
      typeAr: "فردي",
      city: "Riyadh",
      cityAr: "الرياض",
      status: "Approved",
      statusAr: "موافق عليه",
      date: "2025-10-30",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Approved":
        return "bg-green-100 text-green-800 border-green-300";
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const complianceItems = [
    {
      id: "CM-001",
      broker: "Ahmed Al-Saud",
      brokerAr: "أحمد السعود",
      issue: "License Expiry",
      issueAr: "انتهاء الترخيص",
      severity: "High",
      severityAr: "عالي",
      dueDate: "2025-11-15",
      status: "Pending",
    },
    {
      id: "CM-002",
      broker: "Gulf Properties LLC",
      brokerAr: "شركة عقارات الخليج",
      issue: "Missing Documents",
      issueAr: "مستندات مفقودة",
      severity: "Medium",
      severityAr: "متوسط",
      dueDate: "2025-11-20",
      status: "In Review",
    },
    {
      id: "CM-003",
      broker: "Sara Mohammed",
      brokerAr: "سارة محمد",
      issue: "Annual Audit Due",
      issueAr: "التدقيق السنوي مستحق",
      severity: "Low",
      severityAr: "منخفض",
      dueDate: "2025-12-01",
      status: "Pending",
    },
    {
      id: "CM-004",
      broker: "Eastern Real Estate Co.",
      brokerAr: "شركة العقارات الشرقية",
      issue: "Regulatory Update",
      issueAr: "تحديث تنظيمي",
      severity: "High",
      severityAr: "عالي",
      dueDate: "2025-11-12",
      status: "Resolved",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-800 border-red-300";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Low":
        return "bg-blue-100 text-blue-800 border-blue-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getComplianceStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "In Review":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Resolved":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="flex gap-6 max-w-7xl mx-auto">
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-lg shadow-md p-4 h-fit sticky top-6">
        {/* Logo Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Building2 className="text-white" size={20} />
          </div>
          <div>
            <p className="text-blue-900">Admin Portal</p>
            <p className="text-gray-500 text-xs" dir="rtl">
              لوحة الإدارة
            </p>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon size={20} />
                <div className="flex-1 text-left">
                  <p className="text-sm">{item.label}</p>
                  <p
                    className="text-xs text-gray-500"
                    dir="rtl"
                  >
                    {item.labelAr}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600">AD</span>
            </div>
            <div>
              <p className="text-sm">Admin User</p>
              <p className="text-xs text-gray-500">
                admin@portal.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Broker Requests View */}
        {activeMenu === "broker-requests" && (
          <>
            {/* Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-blue-900">
                    Broker Registration Requests
                  </h1>
                  <p
                    className="text-gray-600 text-sm"
                    dir="rtl"
                  >
                    طلبات تسجيل الوسطاء
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <Input
                      placeholder="Search requests... / البحث"
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                    <Download size={18} />
                    Export to Excel
                  </Button>
                </div>
              </div>

              {/* Statistics Cards */}
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <p className="text-gray-600 text-sm mb-1">
                    Total Requests
                  </p>
                  <p
                    className="text-gray-500 text-xs mb-2"
                    dir="rtl"
                  >
                    إجمالي الطلبات
                  </p>
                  <p className="text-blue-900">125</p>
                </Card>
                <Card className="p-4 bg-yellow-50 border-yellow-200">
                  <p className="text-gray-600 text-sm mb-1">
                    Pending
                  </p>
                  <p
                    className="text-gray-500 text-xs mb-2"
                    dir="rtl"
                  >
                    قيد الانتظار
                  </p>
                  <p className="text-yellow-900">42</p>
                </Card>
                <Card className="p-4 bg-green-50 border-green-200">
                  <p className="text-gray-600 text-sm mb-1">
                    Approved
                  </p>
                  <p
                    className="text-gray-500 text-xs mb-2"
                    dir="rtl"
                  >
                    موافق عليه
                  </p>
                  <p className="text-green-900">68</p>
                </Card>
                <Card className="p-4 bg-red-50 border-red-200">
                  <p className="text-gray-600 text-sm mb-1">
                    Rejected
                  </p>
                  <p
                    className="text-gray-500 text-xs mb-2"
                    dir="rtl"
                  >
                    مرفوض
                  </p>
                  <p className="text-red-900">15</p>
                </Card>
              </div>
            </div>

            {/* Table */}
            <Card className="bg-white rounded-lg shadow-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead>
                      <div>Request ID</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        رقم الطلب
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Broker Name</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        اسم الوسيط
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Type</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        النوع
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>City</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        المدينة
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Status</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        الحالة
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Date</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        التاريخ
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Actions</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        الإجراءات
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {brokerRequests.map((request) => (
                    <TableRow
                      key={request.id}
                      className="hover:bg-gray-50"
                    >
                      <TableCell>
                        <span className="text-blue-600">
                          {request.id}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{request.name}</p>
                          <p
                            className="text-gray-500 text-sm"
                            dir="rtl"
                          >
                            {request.nameAr}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{request.type}</p>
                          <p
                            className="text-gray-500 text-sm"
                            dir="rtl"
                          >
                            {request.typeAr}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{request.city}</p>
                          <p
                            className="text-gray-500 text-sm"
                            dir="rtl"
                          >
                            {request.cityAr}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${getStatusColor(request.status)} border`}
                        >
                          <div className="text-center">
                            <p className="text-xs">
                              {request.status}
                            </p>
                            <p className="text-xs" dir="rtl">
                              {request.statusAr}
                            </p>
                          </div>
                        </Badge>
                      </TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0"
                            title="Edit"
                          >
                            <Edit size={14} />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0 text-purple-600 hover:text-purple-700"
                            title="Assign Projects"
                            onClick={() => {
                              setSelectedBroker({
                                id: request.id,
                                name: request.name,
                                nameAr: request.nameAr
                              });
                              setShowProjectDialog(true);
                            }}
                          >
                            <FolderKanban size={14} />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700"
                            title="Manage Agreement"
                            onClick={() => {
                              setSelectedBroker({
                                id: request.id,
                                name: request.name,
                                nameAr: request.nameAr
                              });
                              setShowAgreementDialog(true);
                            }}
                          >
                            <RotateCw size={14} />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                            title="Remove"
                          >
                            <Trash2 size={14} />
                          </Button>
                          {request.status === "Pending" && (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 w-8 p-0 text-green-600 hover:text-green-700"
                                title="Approve"
                              >
                                <CheckCircle size={14} />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                                title="Reject"
                              >
                                <XCircle size={14} />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-600 text-sm">
                  Showing 1-5 of 125 requests
                  <span className="mr-2" dir="rtl">
                    عرض ٠-٥ من ١٢٥ طلب
                  </span>
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-blue-600 text-white"
                  >
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </Card>
          </>
        )}

        {/* Compliance Queue View */}
        {activeMenu === "compliance" && (
          <>
            {/* Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-blue-900">
                    Compliance Queue
                  </h1>
                  <p
                    className="text-gray-600 text-sm"
                    dir="rtl"
                  >
                    قائمة الامتثال
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <Input
                      placeholder="Search compliance... / البحث"
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">
                        All Severity
                      </SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">
                        Medium
                      </SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                    <Download size={18} />
                    Export Report
                  </Button>
                </div>
              </div>

              {/* Statistics Cards */}
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-4 bg-red-50 border-red-200">
                  <div className="flex items-center justify-between mb-2">
                    <AlertTriangle
                      className="text-red-600"
                      size={24}
                    />
                    <p>8</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">
                    High Priority
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    أولوية عالية
                  </p>
                </Card>
                <Card className="p-4 bg-yellow-50 border-yellow-200">
                  <div className="flex items-center justify-between mb-2">
                    <Clock
                      className="text-yellow-600"
                      size={24}
                    />
                    <p>12</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">
                    Pending Review
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    قيد المراجعة
                  </p>
                </Card>
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <Eye className="text-blue-600" size={24} />
                    <p>5</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">
                    In Review
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    قيد التدقيق
                  </p>
                </Card>
                <Card className="p-4 bg-green-50 border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <CheckCircle
                      className="text-green-600"
                      size={24}
                    />
                    <p>42</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">
                    Resolved
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    تم الحل
                  </p>
                </Card>
              </div>
            </div>

            {/* Compliance Table */}
            <Card className="bg-white rounded-lg shadow-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead>
                      <div>ID</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        المعرف
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Broker Name</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        اسم الوسيط
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Compliance Issue</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        مشكلة الامتثال
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Severity</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        الخطورة
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Due Date</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        تاريخ الاستحقاق
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Status</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        الحالة
                      </div>
                    </TableHead>
                    <TableHead>
                      <div>Actions</div>
                      <div
                        className="text-xs text-gray-500"
                        dir="rtl"
                      >
                        الإجراءات
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {complianceItems.map((item) => (
                    <TableRow
                      key={item.id}
                      className="hover:bg-gray-50"
                    >
                      <TableCell>
                        <span className="text-blue-600">
                          {item.id}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{item.broker}</p>
                          <p
                            className="text-gray-500 text-sm"
                            dir="rtl"
                          >
                            {item.brokerAr}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{item.issue}</p>
                          <p
                            className="text-gray-500 text-sm"
                            dir="rtl"
                          >
                            {item.issueAr}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${getSeverityColor(item.severity)} border`}
                        >
                          <div className="text-center">
                            <p className="text-xs">
                              {item.severity}
                            </p>
                            <p className="text-xs" dir="rtl">
                              {item.severityAr}
                            </p>
                          </div>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Clock
                            size={14}
                            className="text-gray-400"
                          />
                          {item.dueDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${getComplianceStatusColor(item.status)} border`}
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0"
                            title="View Details"
                          >
                            <Eye size={14} />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700"
                            title="Edit"
                          >
                            <Edit size={14} />
                          </Button>
                          {item.status !== "Resolved" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 w-8 p-0 text-green-600 hover:text-green-700"
                              title="Mark Resolved"
                            >
                              <CheckCircle size={14} />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </>
        )}

        {/* Reports View */}
        {activeMenu === "reports" && (
          <>
            {/* Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-blue-900">
                    Reports & Analytics
                  </h1>
                  <p
                    className="text-gray-600 text-sm"
                    dir="rtl"
                  >
                    التقارير والتحليلات
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Select defaultValue="month">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">
                        This Week
                      </SelectItem>
                      <SelectItem value="month">
                        This Month
                      </SelectItem>
                      <SelectItem value="quarter">
                        This Quarter
                      </SelectItem>
                      <SelectItem value="year">
                        This Year
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                    <Filter size={18} />
                    Filter
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                    <Download size={18} />
                    Export PDF
                  </Button>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <Users
                      className="text-blue-600"
                      size={24}
                    />
                    <TrendingUp
                      className="text-green-600"
                      size={16}
                    />
                  </div>
                  <p className="text-blue-900 mb-1">156</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Active Brokers
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    الوسطاء النشطون
                  </p>
                  <p className="text-green-600 text-xs mt-1">
                    +12% from last month
                  </p>
                </Card>
                <Card className="p-4 bg-green-50 border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <BarChart3
                      className="text-green-600"
                      size={24}
                    />
                    <TrendingUp
                      className="text-green-600"
                      size={16}
                    />
                  </div>
                  <p className="text-green-900 mb-1">284</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Transactions
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    المعاملات
                  </p>
                  <p className="text-green-600 text-xs mt-1">
                    +24% from last month
                  </p>
                </Card>
                <Card className="p-4 bg-purple-50 border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <PieChart
                      className="text-purple-600"
                      size={24}
                    />
                    <TrendingUp
                      className="text-green-600"
                      size={16}
                    />
                  </div>
                  <p className="text-purple-900 mb-1">98.5%</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Compliance Rate
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    معدل الامتثال
                  </p>
                  <p className="text-green-600 text-xs mt-1">
                    +2.1% improvement
                  </p>
                </Card>
                <Card className="p-4 bg-yellow-50 border-yellow-200">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp
                      className="text-yellow-600"
                      size={24}
                    />
                    <TrendingUp
                      className="text-green-600"
                      size={16}
                    />
                  </div>
                  <p className="text-yellow-900 mb-1">$4.2M</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Total Revenue
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    إجمالي الإيرادات
                  </p>
                  <p className="text-green-600 text-xs mt-1">
                    +18% from last month
                  </p>
                </Card>
              </div>
            </div>

            {/* Report Cards */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <Card className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-blue-900 mb-1">
                      Broker Performance Report
                    </h3>
                    <p
                      className="text-gray-600 text-sm"
                      dir="rtl"
                    >
                      تقرير أداء الوسطاء
                    </p>
                  </div>
                  <BarChart3
                    className="text-blue-600"
                    size={32}
                  />
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">
                      Top Performing Brokers
                    </span>
                    <Badge className="bg-green-100 text-green-800">
                      32
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">
                      Average Brokers
                    </span>
                    <Badge className="bg-blue-100 text-blue-800">
                      89
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">
                      Needs Improvement
                    </span>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      15
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Download size={16} className="mr-2" />
                  Download Full Report
                </Button>
              </Card>

              <Card className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-blue-900 mb-1">
                      Monthly Transaction Report
                    </h3>
                    <p
                      className="text-gray-600 text-sm"
                      dir="rtl"
                    >
                      تقرير المعاملات الشهرية
                    </p>
                  </div>
                  <PieChart
                    className="text-green-600"
                    size={32}
                  />
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">
                      Completed Transactions
                    </span>
                    <Badge className="bg-green-100 text-green-800">
                      284
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">
                      Pending Transactions
                    </span>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      42
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">
                      Cancelled Transactions
                    </span>
                    <Badge className="bg-red-100 text-red-800">
                      8
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Download size={16} className="mr-2" />
                  Download Full Report
                </Button>
              </Card>
            </div>

            {/* Additional Reports */}
            <Card className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-blue-900 mb-1">
                Available Reports
              </h3>
              <p
                className="text-gray-600 text-sm mb-4"
                dir="rtl"
              >
                التقارير المتاحة
              </p>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center gap-2"
                >
                  <FileText
                    size={24}
                    className="text-blue-600"
                  />
                  <span className="text-sm">
                    Compliance Report
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center gap-2"
                >
                  <Users
                    size={24}
                    className="text-purple-600"
                  />
                  <span className="text-sm">
                    Broker Registry
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center gap-2"
                >
                  <BarChart3
                    size={24}
                    className="text-green-600"
                  />
                  <span className="text-sm">
                    Revenue Analysis
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center gap-2"
                >
                  <TrendingUp
                    size={24}
                    className="text-yellow-600"
                  />
                  <span className="text-sm">
                    Growth Metrics
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center gap-2"
                >
                  <PieChart
                    size={24}
                    className="text-red-600"
                  />
                  <span className="text-sm">Market Share</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center gap-2"
                >
                  <Clock size={24} className="text-blue-600" />
                  <span className="text-sm">
                    Time Analytics
                  </span>
                </Button>
              </div>
            </Card>
          </>
        )}

        {/* Settings View */}
        {activeMenu === "settings" && (
          <>
            {/* Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-blue-900 mb-1">
                System Settings
              </h1>
              <p className="text-gray-600 text-sm" dir="rtl">
                إعدادات النظام
              </p>
            </div>

            <div className="space-y-6">
              {/* General Settings */}
              <Card className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Settings
                    className="text-blue-600"
                    size={24}
                  />
                  <div>
                    <h3 className="text-blue-900">
                      General Settings
                    </h3>
                    <p
                      className="text-gray-600 text-sm"
                      dir="rtl"
                    >
                      الإعدادات العامة
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>System Name</Label>
                      <p className="text-sm text-gray-600">
                        Offshore Real Estate Broker Portal
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit size={14} className="mr-2" />
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>
                        Default Language / اللغة الافتراضية
                      </Label>
                      <p className="text-sm text-gray-600">
                        English / Arabic
                      </p>
                    </div>
                    <Select defaultValue="both">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="both">
                          Both / كلاهما
                        </SelectItem>
                        <SelectItem value="en">
                          English
                        </SelectItem>
                        <SelectItem value="ar">
                          Arabic / عربي
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Time Zone</Label>
                      <p className="text-sm text-gray-600">
                        Asia/Riyadh (GMT+3)
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit size={14} className="mr-2" />
                      Change
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Notification Settings */}
              <Card className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Bell className="text-blue-600" size={24} />
                  <div>
                    <h3 className="text-blue-900">
                      Notification Settings
                    </h3>
                    <p
                      className="text-gray-600 text-sm"
                      dir="rtl"
                    >
                      إعدادات الإشعارات
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Email Notifications</Label>
                      <p
                        className="text-sm text-gray-600"
                        dir="rtl"
                      >
                        إشعارات البريد الإلكتروني
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>SMS Alerts</Label>
                      <p
                        className="text-sm text-gray-600"
                        dir="rtl"
                      >
                        تنبيهات الرسائل القصيرة
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Compliance Alerts</Label>
                      <p
                        className="text-sm text-gray-600"
                        dir="rtl"
                      >
                        تنبيهات الامتثال
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Weekly Reports</Label>
                      <p
                        className="text-sm text-gray-600"
                        dir="rtl"
                      >
                        التقارير الأسبوعية
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </Card>

              {/* Security Settings */}
              <Card className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="text-blue-600" size={24} />
                  <div>
                    <h3 className="text-blue-900">
                      Security Settings
                    </h3>
                    <p
                      className="text-gray-600 text-sm"
                      dir="rtl"
                    >
                      إعدادات الأمان
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p
                        className="text-sm text-gray-600"
                        dir="rtl"
                      >
                        المصادقة الثنائية
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Password Expiry</Label>
                      <p className="text-sm text-gray-600">
                        90 days
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit size={14} className="mr-2" />
                      Configure
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Session Timeout</Label>
                      <p className="text-sm text-gray-600">
                        30 minutes
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit size={14} className="mr-2" />
                      Configure
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>IP Whitelist</Label>
                      <p
                        className="text-sm text-gray-600"
                        dir="rtl"
                      >
                        قائمة الآيبي المسموح
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </Card>

              {/* System Preferences */}
              <Card className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Palette
                    className="text-blue-600"
                    size={24}
                  />
                  <div>
                    <h3 className="text-blue-900">
                      System Preferences
                    </h3>
                    <p
                      className="text-gray-600 text-sm"
                      dir="rtl"
                    >
                      تفضيلات النظام
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Theme / المظهر</Label>
                      <p className="text-sm text-gray-600">
                        Light Mode
                      </p>
                    </div>
                    <Select defaultValue="light">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">
                          Light
                        </SelectItem>
                        <SelectItem value="dark">
                          Dark
                        </SelectItem>
                        <SelectItem value="auto">
                          Auto
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Data Retention Period</Label>
                      <p
                        className="text-sm text-gray-600"
                        dir="rtl"
                      >
                        فترة الاحتفاظ بالبيانات
                      </p>
                    </div>
                    <Select defaultValue="5years">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1year">
                          1 Year
                        </SelectItem>
                        <SelectItem value="3years">
                          3 Years
                        </SelectItem>
                        <SelectItem value="5years">
                          5 Years
                        </SelectItem>
                        <SelectItem value="10years">
                          10 Years
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Auto-Backup</Label>
                      <p
                        className="text-sm text-gray-600"
                        dir="rtl"
                      >
                        النسخ الاحتياطي التلقائي
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3">
                <Button variant="outline">
                  Cancel / إلغاء
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Save Changes / حفظ التغييرات
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Project Assignment Dialog */}
      {selectedBroker && (
        <ProjectAssignmentDialog
          open={showProjectDialog}
          onOpenChange={setShowProjectDialog}
          brokerName={selectedBroker.name}
          brokerNameAr={selectedBroker.nameAr}
          brokerId={selectedBroker.id}
        />
      )}

      {/* Agreement Management Dialog */}
      {selectedBroker && (
        <AgreementManagementDialog
          open={showAgreementDialog}
          onOpenChange={setShowAgreementDialog}
          brokerName={selectedBroker.name}
          brokerNameAr={selectedBroker.nameAr}
          brokerId={selectedBroker.id}
        />
      )}
    </div>
  );
}