
import { VehicleDetailStep, MOCK_MAKES, MOCK_MODELS, MOCK_YEARS, MOCK_ENGINES, 
  MOCK_BODY_TYPES, MOCK_FUEL_TYPES, MOCK_TRANSMISSIONS, MOCK_COLORS,
  MOCK_RIMS, MOCK_TIRES } from "@/types/vehicle";
import { VehicleFormData } from "@/types/vehicle";

export const getOptionsForStep = (step: VehicleDetailStep, formData: VehicleFormData) => {
  switch (step) {
    case 'make':
      return MOCK_MAKES;
    case 'model':
      return formData.make ? MOCK_MODELS[formData.make as keyof typeof MOCK_MODELS] || [] : [];
    case 'year':
      return MOCK_YEARS;
    case 'engine':
      return MOCK_ENGINES;
    case 'bodyType':
      return MOCK_BODY_TYPES;
    case 'fuelType':
      return MOCK_FUEL_TYPES;
    case 'transmission':
      return MOCK_TRANSMISSIONS;
    case 'color':
      return MOCK_COLORS;
    case 'keys':
      return ['1 nyckel', '2 nycklar', '3 eller fler nycklar'];
    case 'rims':
    case 'extraRims':
      return MOCK_RIMS;
    case 'tires':
    case 'extraTires':
      return MOCK_TIRES;
    case 'extraWheels':
      return ['yes', 'no'];
    case 'mileage':
      return ['0-4999', '5000-9999', '10000-14999', '15000-19999', '20000+'];
    default:
      return [];
  }
};

export const getStepTitle = (step: VehicleDetailStep) => {
  switch (step) {
    case 'make':
      return "Välj märke";
    case 'model':
      return "Välj modell";
    case 'year':
      return "Välj årsmodell";
    case 'engine':
      return "Välj motor";
    case 'bodyType':
      return "Välj karosstyp";
    case 'fuelType':
      return "Välj bränsletyp";
    case 'transmission':
      return "Välj växellåda";
    case 'color':
      return "Välj färg";
    case 'equipment':
      return "Välj utrustning";
    case 'keys':
      return "Hur många nycklar har bilen?";
    case 'rims':
      return "Välj fälgar";
    case 'tires':
      return "Välj däck";
    case 'extraWheels':
      return "Extra hjuluppsättning?";
    case 'extraRims':
      return "Välj fälgar (extra uppsättning)";
    case 'extraTires':
      return "Välj däck (extra uppsättning)";
    case 'mileage':
      return "Ange miltal";
  }
};
