import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Building2, CheckCircle } from 'lucide-react';

interface ProjectAssignmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  brokerName: string;
  brokerNameAr: string;
  brokerId: string;
}

const availableProjects = [
  {
    id: 'PRJ-001',
    name: 'Riyadh Luxury Villas',
    nameAr: 'فلل الرياض الفاخرة',
    location: 'Riyadh',
    locationAr: 'الرياض',
    units: 25,
    status: 'Active'
  },
  {
    id: 'PRJ-002',
    name: 'Jeddah Waterfront Towers',
    nameAr: 'أبراج جدة المطلة على البحر',
    location: 'Jeddah',
    locationAr: 'جدة',
    units: 120,
    status: 'Active'
  },
  {
    id: 'PRJ-003',
    name: 'Dammam Business Hub',
    nameAr: 'مركز الدمام التجاري',
    location: 'Dammam',
    locationAr: 'الدمام',
    units: 45,
    status: 'Active'
  },
  {
    id: 'PRJ-004',
    name: 'Khobar Residential Complex',
    nameAr: 'مجمع الخبر السكني',
    location: 'Khobar',
    locationAr: 'الخبر',
    units: 80,
    status: 'Active'
  },
  {
    id: 'PRJ-005',
    name: 'Riyadh Commercial Plaza',
    nameAr: 'بلازا الرياض التجارية',
    location: 'Riyadh',
    locationAr: 'الرياض',
    units: 35,
    status: 'Coming Soon'
  }
];

export function ProjectAssignmentDialog({ 
  open, 
  onOpenChange, 
  brokerName, 
  brokerNameAr, 
  brokerId 
}: ProjectAssignmentDialogProps) {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const handleProjectToggle = (projectId: string) => {
    setSelectedProjects(prev => 
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const handleSave = () => {
    console.log('Assigned projects:', selectedProjects, 'to broker:', brokerId);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-3">
              <Building2 className="text-blue-600" size={24} />
              <div>
                <p>Assign Projects</p>
                <p className="text-sm text-gray-600" dir="rtl">تعيين المشاريع</p>
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

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>
              Available Projects
              <span className="text-sm text-gray-600 mr-2" dir="rtl">/ المشاريع المتاحة</span>
            </Label>
            <Badge className="bg-blue-100 text-blue-800">
              {selectedProjects.length} selected
            </Badge>
          </div>

          <div className="space-y-3">
            {availableProjects.map((project) => (
              <div
                key={project.id}
                className={`p-4 border rounded-lg transition-all cursor-pointer hover:shadow-md ${
                  selectedProjects.includes(project.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white'
                }`}
                onClick={() => handleProjectToggle(project.id)}
              >
                <div className="flex items-start gap-4">
                  <Checkbox
                    checked={selectedProjects.includes(project.id)}
                    onCheckedChange={() => handleProjectToggle(project.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-blue-600">{project.id}</p>
                        <p>{project.name}</p>
                        <p className="text-sm text-gray-600" dir="rtl">{project.nameAr}</p>
                      </div>
                      <Badge
                        className={
                          project.status === 'Active'
                            ? 'bg-green-100 text-green-800 border-green-300'
                            : 'bg-yellow-100 text-yellow-800 border-yellow-300'
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <div>
                        <span>Location: {project.location}</span>
                        <span className="mr-2" dir="rtl">/ {project.locationAr}</span>
                      </div>
                      <div>
                        <span>Units: {project.units}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <Button 
            onClick={handleSave} 
            className="bg-blue-600 hover:bg-blue-700"
            disabled={selectedProjects.length === 0}
          >
            <CheckCircle size={18} className="mr-2" />
            Assign {selectedProjects.length} Project(s)
            <span className="mr-2" dir="rtl">/ تعيين المشاريع</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
