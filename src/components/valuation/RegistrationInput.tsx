import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

//import { NORDIC_COUNTRIES, type NordicCountry } from "./registration/constants";
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
        <div className="space-y-1.5">
          <label className="text-xs text-muted-foreground">
            Registreringsnummer
          </label>
          <div className="flex items-start gap-2">
            <div className="flex-1">
              <div className="relative w-full">
                <CountrySelector 
                  selectedCountry={selectedCountry}
                  onCountryChange={handleCountryChange}
                />
                <Input
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value.toUpperCase())}
                  placeholder="REG. NR."
                  className="pl-14 text-center uppercase text-[5.0rem] leading-[60px] tracking-[0.2em] h-[60px] w-full bg-white font-medium border-[3px] border-[#0E1116] rounded-md text-[#4A5568]"
                  maxLength={7}
                  style={{ width: '380px' }}
                />
              </div>
            </div>
            <Button 
              onClick={() => onSubmit(regNumber)} 
              size="sm"
              className="px-6 h-[60px] text-base font-medium"
            >
              Sök
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

