// import { RegistrationTab } from "@/components/vehicle/tabs/RegistrationTab";
// import { VehicleInfoTab } from "@/components/vehicle/tabs/VehicleInfoTab";
// import { TestTab } from "@/components/vehicle/tabs/TestTab";
// import { ImagesTab } from "@/components/vehicle/tabs/ImagesTab";
// import { PriceTab } from "@/components/vehicle/tabs/PriceTab";
import { VehicleDetailStep, VehicleFormData } from "@/types/vehicle";
import { RegistrationTab } from "./RegistrationTab";
import { VehicleInfoTab } from "./VehicleInfoTab";
import { TestTab } from "./TestTab";
import { ImagesTab } from "./ImagesTab";
import { PriceTab } from "./PriceTab";

interface TabContentProps {
  activeTab: string;
  currentStep: number;
  currentDetailStep: VehicleDetailStep;
  formData: VehicleFormData;
  onRegNumberSubmit: (regNumber: string) => void;
  onOptionSelect: (option: string) => void;
  onEditSection: (section: VehicleDetailStep) => void;
}

export const TabContent = ({
  activeTab,
  currentStep,
  currentDetailStep,
  formData,
  onRegNumberSubmit,
  onOptionSelect,
  onEditSection,
}: TabContentProps) => {
  return (
    <>
      {activeTab === "reg" && (
        <RegistrationTab onSubmit={onRegNumberSubmit} />
      )}

      {activeTab === "vehicle-info" && (
        <VehicleInfoTab
          currentStep={currentStep}
          currentDetailStep={currentDetailStep}
          formData={formData}
          onOptionSelect={onOptionSelect}
          onEditSection={onEditSection}
          onRegNumberSubmit={onRegNumberSubmit}
        />
      )}

      {activeTab === "test" && <TestTab />}
      {activeTab === "images" && <ImagesTab />}
      {activeTab === "price" && <PriceTab />}
    </>
  );
};
