
//import { RegistrationInput } from "@/components/valuation/RegistrationInput";

// import { RegistrationInput } from "../valuation/RegistrationInput";

// interface RegistrationStepProps {
//   onSubmit: (regNumber: string) => void;
// }

// export const RegistrationStep = ({ onSubmit }: RegistrationStepProps) => {
//   return (
//     <div className="space-y-6">
//       <div className="text-center">
//         <h2 className="text-lg font-medium mb-2">Steg 1: Ange registreringsnummer</h2>
//         <p className="text-sm text-muted-foreground mb-4">
//           Börja med att ange bilens registreringsnummer för att hämta information
//         </p>
//       </div>
//       <RegistrationInput onSubmit={onSubmit} />
//     </div>
//   );
// };

import { RegistrationInput } from "../valuation/RegistrationInput";

interface RegistrationStepProps {
  onSubmit: (regNumber: string) => void;
}

export const RegistrationStep = ({ onSubmit }: RegistrationStepProps) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center">
        <h2 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Steg 1: Ange registreringsnummer</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 px-2">
          Börja med att ange bilens registreringsnummer för att hämta information
        </p>
      </div>
      <RegistrationInput onSubmit={onSubmit} />
    </div>
  );
};
