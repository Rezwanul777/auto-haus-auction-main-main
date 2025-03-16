// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// //import { NORDIC_COUNTRIES, type NordicCountry } from "./registration/constants";
// import { CountrySelector } from "../registration/CountrySelector";
// import { NORDIC_COUNTRIES, NordicCountry } from "../registration/constants";

// interface RegistrationInputProps {
//   onSubmit: (regNumber: string) => void;
// }

// export const RegistrationInput = ({ onSubmit }: RegistrationInputProps) => {
//   const [regNumber, setRegNumber] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState<NordicCountry>(NORDIC_COUNTRIES[0]);

//   const handleCountryChange = (countryId: string) => {
//     const country = NORDIC_COUNTRIES.find(c => c.id === countryId);
//     if (country) setSelectedCountry(country);
//   };

//   return (
//     <div className="space-y-4 max-w-md mx-auto">
//       <div className="space-y-3">
//         <div className="space-y-1.5">
//           <label className="text-xs text-muted-foreground">
           
//           </label>
//           <div className="flex items-start gap-2">
//             <div className="flex-1">
//               <div className="relative w-full">
//                 <CountrySelector 
//                   selectedCountry={selectedCountry}
//                   onCountryChange={handleCountryChange}
//                 />
//                 <Input
//                   value={regNumber}
//                   onChange={(e) => setRegNumber(e.target.value.toUpperCase())}
//                   placeholder="REG. NR."
//                   className="pl-14 text-center uppercase text-[5.0rem] leading-[60px] tracking-[0.2em] h-[60px] w-full bg-white font-medium border-[3px] border-[#0E1116] rounded-md text-[#4A5568]"
//                   maxLength={7}
//                   style={{ width: '380px' }}
//                 />
//               </div>
//             </div>
//             <Button 
//               onClick={() => onSubmit(regNumber)} 
//               size="sm"
//               className="px-6 h-[60px] text-base font-medium"
//             >
//               Sök
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CountrySelector } from "../registration/CountrySelector";
import { NORDIC_COUNTRIES, NordicCountry } from "../registration/constants";

interface RegistrationInputProps {
  onSubmit: (regNumber: string) => void;
}

export const RegistrationInput = ({ onSubmit }: RegistrationInputProps) => {
  const [regNumber, setRegNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<NordicCountry>(NORDIC_COUNTRIES[0]);

  const handleCountryChange = (countryId: string) => {
    const country = NORDIC_COUNTRIES.find(c => c.id === countryId);
    if (country) setSelectedCountry(country);
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <div className="relative w-full">
            <CountrySelector
              selectedCountry={selectedCountry}
              onCountryChange={handleCountryChange}
            />
            <Input
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value.toUpperCase())}
              placeholder="REG. NR."
              className="pl-14 text-center uppercase text-[1.5rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[3.0rem] 
                         leading-[1.2] xs:leading-[1.2] sm:leading-[1.2] md:leading-[50px] 
                         tracking-[0.15em] xs:tracking-[0.2em] 
                         h-[50px] xs:h-[52px] sm:h-[56px] md:h-[60px] 
                         w-full bg-white font-medium 
                         border-[2px] xs:border-[2px] sm:border-[3px] border-[#0E1116] rounded-md text-[#4A5568]"
              maxLength={7}
            />
          </div>
          <Button
            onClick={() => onSubmit(regNumber)}
            size="sm"
            className="px-4 sm:px-6 py-2 h-[40px] sm:h-[56px] md:h-[60px] text-sm sm:text-base font-medium w-full sm:w-auto"
          >
            Sök
          </Button>
        </div>
      </div>
    </div>
  );
};