
import { VehicleFormData } from "@/types/vehicle";
//import { CompletedSectionHeader } from "@/components/valuation/form-sections/CompletedSectionHeader";
import { VehicleDetailStep } from "@/types/vehicle";
import { CompletedSectionHeader } from "../valuation/form-section/CompletedSectionHeader";

interface CompletedSectionsProps {
  formData: VehicleFormData;
  onEditSection: (section: VehicleDetailStep) => void;
}

export const CompletedSections = ({ formData, onEditSection }: CompletedSectionsProps) => {
  const sections = [];

  // Box 1: Make, Model, Year, Engine
  if (formData.make && formData.model) {
    const basicInfo = [];
    basicInfo.push(`${formData.make} ${formData.model}`);
    if (formData.year) basicInfo.push(`Modellår: ${formData.year}`);
    if (formData.engine) basicInfo.push(`Motor: ${formData.engine}`);
    
    sections.push(
      <div key="basicInfo" className="bg-gray-50 p-4 rounded-lg mb-4">
        <CompletedSectionHeader
          title="Grundläggande information"
          value={basicInfo.join(', ')}
          onEdit={() => onEditSection('make')}
        />
      </div>
    );
  }

  // Box 2: Body Type, Fuel Type, Transmission, Color
  if (formData.bodyType || formData.fuelType || formData.transmission || formData.color) {
    const technicalInfo = [];
    if (formData.bodyType) technicalInfo.push(`Karosstyp: ${formData.bodyType}`);
    if (formData.fuelType) technicalInfo.push(`Bränsletyp: ${formData.fuelType}`);
    if (formData.transmission) technicalInfo.push(`Växellåda: ${formData.transmission}`);
    if (formData.color) technicalInfo.push(`Färg: ${formData.color}`);

    if (technicalInfo.length > 0) {
      sections.push(
        <div key="technicalInfo" className="bg-gray-50 p-4 rounded-lg mb-4">
          <CompletedSectionHeader
            title="Teknisk information"
            value={technicalInfo.join(', ')}
            onEdit={() => onEditSection('bodyType')}
          />
        </div>
      );
    }
  }

  // Box 3: Equipment
  if (formData.equipment && formData.equipment.length > 0) {
    sections.push(
      <div key="equipment" className="bg-gray-50 p-4 rounded-lg mb-4">
        <CompletedSectionHeader
          title="Utrustning"
          value={formData.equipment.join(', ')}
          onEdit={() => onEditSection('equipment')}
        />
      </div>
    );
  }

  // Box 4: Wheels
  if (formData.rims || formData.tires || formData.hasExtraWheels) {
    const wheelsInfo = [];
    if (formData.rims) wheelsInfo.push(`Fälgar: ${formData.rims}`);
    if (formData.tires) wheelsInfo.push(`Däck: ${formData.tires}`);
    if (formData.hasExtraWheels) {
      if (formData.extraRims) wheelsInfo.push(`Extra fälgar: ${formData.extraRims}`);
      if (formData.extraTires) wheelsInfo.push(`Extra däck: ${formData.extraTires}`);
    }

    if (wheelsInfo.length > 0) {
      sections.push(
        <div key="wheelsInfo" className="bg-gray-50 p-4 rounded-lg mb-4">
          <CompletedSectionHeader
            title="Hjul"
            value={wheelsInfo.join(', ')}
            onEdit={() => onEditSection('rims')}
          />
        </div>
      );
    }
  }

  // Box 5: Mileage
  if (formData.mileage) {
    sections.push(
      <div key="mileage" className="bg-gray-50 p-4 rounded-lg mb-4">
        <CompletedSectionHeader
          title="Miltal"
          value={`${formData.mileage} mil`}
          onEdit={() => onEditSection('mileage')}
        />
      </div>
    );
  }

  return sections.length > 0 ? <div className="space-y-2 mb-6">{sections}</div> : null;
};
