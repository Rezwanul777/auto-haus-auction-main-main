import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface EquipmentSectionProps {
  equipment: string[];
  onEquipmentSelect: (equipment: string) => void;
}

const MOCK_EQUIPMENT = [
  "ACC",
  "Adaptiv farthållare",
  "Backkamera",
  "Dragkrok",
  "Elstolar",
  "GPS",
  "Läderklädsel",
  "Panoramatak",
  "Parkeringssensorer",
  "Värmesäten",
];

export const EquipmentSection = ({ equipment, onEquipmentSelect }: EquipmentSectionProps) => {
  const [showAllEquipment, setShowAllEquipment] = useState(false);
  
  return (
    <div className="space-y-1.5">
      <h3 className="font-medium text-sm">Utrustning</h3>
      <div className="grid grid-cols-2 gap-1.5">
        {(showAllEquipment ? MOCK_EQUIPMENT : MOCK_EQUIPMENT.slice(0, 6)).map((item) => (
          <div
            key={item}
            className={`p-1.5 border rounded-md cursor-pointer transition-colors ${
              equipment.includes(item)
                ? 'bg-primary/10 border-primary'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => onEquipmentSelect(item)}
          >
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
      {MOCK_EQUIPMENT.length > 6 && (
        <Button
          variant="ghost"
          className="w-full mt-2 text-sm flex items-center justify-center gap-2"
          onClick={() => setShowAllEquipment(!showAllEquipment)}
        >
          {showAllEquipment ? 'Visa färre' : 'Mer'}
          <ChevronDown className={`h-4 w-4 transition-transform ${showAllEquipment ? 'rotate-180' : ''}`} />
        </Button>
      )}
    </div>
  );
};