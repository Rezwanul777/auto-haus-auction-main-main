import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { EUPlate } from "./EUPlate";
import { NORDIC_COUNTRIES, type NordicCountry } from "./constants";

interface CountrySelectorProps {
  selectedCountry: NordicCountry;
  onCountryChange: (countryId: string) => void;
}

export const CountrySelector = ({ selectedCountry, onCountryChange }: CountrySelectorProps) => {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-[60px] flex flex-col items-center justify-center overflow-hidden bg-[#003399] rounded-l-md">
      <Select
        value={selectedCountry.id}
        onValueChange={onCountryChange}
      >
        <SelectTrigger 
          className="h-full w-full border-0 bg-transparent hover:bg-transparent focus:ring-0 focus:ring-offset-0"
        >
          <div className="w-full h-[60px] flex items-center justify-center">
            <EUPlate countryCode={selectedCountry.code} />
          </div>
          <ChevronDown className="h-3 w-3 text-white opacity-50 absolute right-1 top-1" />
        </SelectTrigger>
        <SelectContent>
          {NORDIC_COUNTRIES.map((country) => (
            <SelectItem 
              key={country.id} 
              value={country.id}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-5 relative overflow-hidden">
                <img 
                  src={country.plateImage} 
                  alt={country.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <span>{country.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};