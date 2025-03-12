
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSection } from "./ImageSection";

interface ServiceSectionProps {
  isOpen: boolean;
  images: string[];
  onOpenChange: () => void;
  onUpload: () => void;
  onServiceDetailsClick: () => void;
}

export const ServiceSection = ({
  isOpen,
  images,
  onOpenChange,
  onUpload,
  onServiceDetailsClick,
}: ServiceSectionProps) => {
  return (
    <ImageSection
      title={
        <div className="flex justify-between items-center w-full">
          <span>Servicebilder</span>
          <Button
            variant="outline"
            onClick={onServiceDetailsClick}
            size="sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Lägg till servicedetaljer
          </Button>
        </div>
      }
      isOpen={isOpen}
      images={images}
      onOpenChange={onOpenChange}
      onUpload={onUpload}
    />
  );
};
