
//import { RegistrationStep } from "@/components/vehicle/steps/RegistrationStep";

import { RegistrationStep } from "../steps/RegistrationStep";

interface RegistrationTabProps {
  onSubmit: (regNumber: string) => void;
}

export const RegistrationTab = ({ onSubmit }: RegistrationTabProps) => {
  return <RegistrationStep onSubmit={onSubmit} />;
};

