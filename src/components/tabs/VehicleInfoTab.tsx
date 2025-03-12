
// import { RegistrationStep } from "@/components/vehicle/steps/RegistrationStep";
// import { VehicleDetailsStep } from "@/components/vehicle/steps/VehicleDetailsStep";
// import { CompletedStep } from "@/components/vehicle/steps/CompletedStep";
import { VehicleDetailStep, VehicleFormData } from "@/types/vehicle";
import { RegistrationStep } from "../steps/RegistrationStep";
import { VehicleDetailsStep } from "../steps/VehicleDetailsStep";
import { CompletedStep } from "../steps/CompletedStep";

interface VehicleInfoTabProps {
  currentStep: number;
  currentDetailStep: VehicleDetailStep;
  formData: VehicleFormData;
  onOptionSelect: (option: string) => void;
  onEditSection: (section: VehicleDetailStep) => void;
  onRegNumberSubmit: (regNumber: string) => void;
}

export const VehicleInfoTab = ({
  currentStep,
  currentDetailStep,
  formData,
  onOptionSelect,
  onEditSection,
  onRegNumberSubmit
}: VehicleInfoTabProps) => {
  return (
    <>
      {currentStep === 1 && (
        <RegistrationStep onSubmit={onRegNumberSubmit} />
      )}

      {currentStep === 2 && (
        <VehicleDetailsStep
          currentDetailStep={currentDetailStep}
          formData={formData}
          onOptionSelect={onOptionSelect}
          onEditSection={onEditSection}
        />
      )}

      {currentStep === 3 && (
        <CompletedStep
          formData={formData}
          onEditSection={onEditSection}
        />
      )}
    </>
  );
};

