
import { VehicleDetailStep, VehicleFormData } from "@/types/vehicle";
import { CompletedSections } from "./CompletedSections";

interface CompletedStepProps {
  formData: VehicleFormData;
  onEditSection: (section: VehicleDetailStep) => void;
}

export const CompletedStep = ({ formData, onEditSection }: CompletedStepProps) => {
  return (
    <div className="space-y-6">
      <CompletedSections formData={formData} onEditSection={onEditSection} />
      <div className="text-center">
        <h2 className="text-lg font-medium mb-2">Information sparad</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Alla fordonsdetaljer har sparats
        </p>
      </div>
    </div>
  );
};
