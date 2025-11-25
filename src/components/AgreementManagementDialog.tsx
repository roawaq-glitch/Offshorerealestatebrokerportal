import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { FileText, RotateCw, Calendar, AlertCircle } from 'lucide-react';

interface AgreementManagementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  brokerName: string;
  brokerNameAr: string;
  brokerId: string;
}

export function AgreementManagementDialog({ 
  open, 
  onOpenChange, 
  brokerName, 
  brokerNameAr, 
  brokerId 
}: AgreementManagementDialogProps) {
  const [agreements] = useState([
    {
      id: 'AGR-001',
      date: '2025-01-15',
      status: 'Active',
      validUntil: '2026-01-15',
      projects: ['Riyadh Luxury Villas', 'Jeddah Waterfront Towers']
    },
    {
      id: 'AGR-002',
      date: '2024-06-10',
      status: 'Expired',
      validUntil: '2025-06-10',
      projects: ['Dammam Business Hub']
    }
  ]);

  const handleRenewAgreement = (agreementId: string) => {
    console.log('Renewing agreement:', agreementId, 'for broker:', brokerId);
    // Handle renewal logic
  };

  const handleRequestNewAgreement = () => {
    console.log('Broker requesting new agreement:', brokerId);
    // Handle new agreement request logic
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" size={24} />
              <div>
                <p>Agreement Management</p>
                <p className="text-sm text-gray-600" dir="rtl">إدارة الاتفاقيات</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm">
                Broker: <span className="text-blue-600">{brokerName}</span>
              </p>
              <p className="text-sm" dir="rtl">
                الوسيط: <span className="text-blue-600">{brokerNameAr}</span>
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Agreements */}
          <div>
            <h3 className="mb-4">
              Agreement History
              <span className="text-sm text-gray-600 mr-2" dir="rtl">/ سجل الاتفاقيات</span>
            </h3>

            <div className="space-y-4">
              {agreements.map((agreement) => (
                <Card key={agreement.id} className="p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-blue-600">{agreement.id}</p>
                        <Badge
                          className={
                            agreement.status === 'Active'
                              ? 'bg-green-100 text-green-800 border-green-300'
                              : 'bg-red-100 text-red-800 border-red-300'
                          }
                        >
                          {agreement.status}
                          <span className="mr-1" dir="rtl">
                            {agreement.status === 'Active' ? '/ نشط' : '/ منتهي'}
                          </span>
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>Signed: {agreement.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>
                            Valid Until: {agreement.validUntil}
                            {agreement.status === 'Expired' && (
                              <AlertCircle size={14} className="inline ml-2 text-red-500" />
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm mb-2">
                          Assigned Projects:
                          <span className="text-sm text-gray-600 mr-2" dir="rtl">/ المشاريع المعينة</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {agreement.projects.map((project, index) => (
                            <Badge key={index} variant="outline" className="bg-white">
                              {project}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {agreement.status === 'Expired' && (
                      <Button
                        size="sm"
                        onClick={() => handleRenewAgreement(agreement.id)}
                        className="bg-blue-600 hover:bg-blue-700 ml-4"
                      >
                        <RotateCw size={16} className="mr-2" />
                        Renew
                        <span className="mr-1" dir="rtl">/ تجديد</span>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Request New Agreement Section */}
          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-blue-900 mb-2">
                  Request New Agreement
                  <span className="text-sm text-gray-600 mr-2" dir="rtl">/ طلب اتفاقية جديدة</span>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Submit a request for a new agreement with updated project assignments.
                </p>
                <p className="text-sm text-gray-600" dir="rtl">
                  قدم طلبًا للحصول على اتفاقية جديدة مع تعيينات المشاريع المحدثة.
                </p>
              </div>
              <Button
                onClick={handleRequestNewAgreement}
                className="bg-blue-600 hover:bg-blue-700 ml-4"
              >
                <FileText size={16} className="mr-2" />
                Request New
                <span className="mr-1" dir="rtl">/ طلب جديد</span>
              </Button>
            </div>
          </Card>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Close
            <span className="mr-2" dir="rtl">/ إغلاق</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
