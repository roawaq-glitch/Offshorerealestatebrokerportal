import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { UserPlus } from 'lucide-react';

interface AddClientDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddClientDialog({ open, onOpenChange }: AddClientDialogProps) {
  const [formData, setFormData] = useState({
    clientName: '',
    contact: '',
    propertyInterest: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Client data:', formData);
    // Reset form
    setFormData({
      clientName: '',
      contact: '',
      propertyInterest: '',
      notes: ''
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPlus className="text-blue-600" size={24} />
            <div>
              <p>Add New Client</p>
              <p className="text-sm text-gray-600" dir="rtl">إضافة عميل جديد</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Client Name */}
          <div className="space-y-2">
            <Label htmlFor="clientName">
              Client Name
              <span className="text-sm text-gray-600 mr-2" dir="rtl">/ اسم العميل</span>
            </Label>
            <Input
              id="clientName"
              placeholder="Enter client name / أدخل اسم العميل"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              required
            />
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <Label htmlFor="contact">
              Contact
              <span className="text-sm text-gray-600 mr-2" dir="rtl">/ معلومات الاتصال</span>
            </Label>
            <Input
              id="contact"
              placeholder="Phone or Email / الهاتف أو البريد الإلكتروني"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
            />
          </div>

          {/* Property Interest */}
          <div className="space-y-2">
            <Label htmlFor="propertyInterest">
              Property Interest
              <span className="text-sm text-gray-600 mr-2" dir="rtl">/ العقار المهتم به</span>
            </Label>
            <Input
              id="propertyInterest"
              placeholder="e.g., 3BR Villa - Riyadh / مثال: فيلا 3 غرف - الرياض"
              value={formData.propertyInterest}
              onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
              required
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">
              Notes
              <span className="text-sm text-gray-600 mr-2" dir="rtl">/ ملاحظات</span>
            </Label>
            <Textarea
              id="notes"
              placeholder="Add any additional notes... / أضف أي ملاحظات إضافية..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
            />
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
              <span className="mr-2" dir="rtl">/ إلغاء</span>
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              <UserPlus size={18} className="mr-2" />
              Add Client
              <span className="mr-2" dir="rtl">/ إضافة عميل</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
