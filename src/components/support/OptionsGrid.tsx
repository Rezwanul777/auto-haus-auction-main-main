
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OptionsGridProps {
  options: string[];
  selectedOption?: string;
  onSelect: (option: string) => void;
  currentStep?: string;
}

export const OptionsGrid = ({ options, selectedOption, onSelect, currentStep }: OptionsGridProps) => {
  if (currentStep === 'mileage') {
    return (
      <div className="space-y-4">
        <Label htmlFor="mileage">Ange miltal</Label>
        <Input
          id="mileage"
          type="number"
          placeholder="Ange antal mil"
          value={selectedOption || ''}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <Button
          key={option}
          variant={selectedOption === option ? "default" : "outline"}
          onClick={() => onSelect(option)}
          className="h-12"
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
