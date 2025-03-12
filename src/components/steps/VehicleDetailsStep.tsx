
import { VehicleDetailStep, VehicleFormData } from "@/types/vehicle";
// import { EquipmentSection } from "@/components/valuation/form-sections/EquipmentSection";
// import { OptionsGrid } from "@/components/vehicle/OptionsGrid";
import { getOptionsForStep, getStepTitle } from "@/utils/vehicleOptionsHelper";
import { CompletedSections } from "./CompletedSections";
import EquipmentSelection from "../valuation/EquipmentSelection";
import { OptionsGrid } from "../support/OptionsGrid";



interface VehicleDetailsStepProps {
  currentDetailStep: VehicleDetailStep;
  formData: VehicleFormData;
  onOptionSelect: (option: string) => void;
  onEditSection: (section: VehicleDetailStep) => void;
}

export const VehicleDetailsStep = ({
  currentDetailStep,
  formData,
  onOptionSelect,
  onEditSection,
}: VehicleDetailsStepProps) => {
  return (
    <div className="space-y-6">
      <CompletedSections formData={formData} onEditSection={onEditSection} />
      <div className="text-center">
        <h2 className="text-lg font-medium mb-2">{getStepTitle(currentDetailStep)}</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Välj det alternativ som stämmer för din bil
        </p>
      </div>
      {currentDetailStep === 'equipment' ? (
        <EquipmentSelection 
          equipment={formData.equipment || []}
          onEquipmentSelect={onOptionSelect}
        />
      ) : (
        <OptionsGrid
          options={getOptionsForStep(currentDetailStep, formData)}
          selectedOption={formData[currentDetailStep]}
          onSelect={onOptionSelect}
          currentStep={currentDetailStep}
        />
      )}
    </div>
  );
};
