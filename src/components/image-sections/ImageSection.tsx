
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ImageGrid } from "./ImageGrid";

interface ImageSectionProps {
  title: string | React.ReactNode;
  isOpen: boolean;
  images: string[];
  onOpenChange: (value: boolean) => void;
  onUpload: () => void;
  children?: React.ReactNode;
}

export const ImageSection = ({ title, isOpen, images, onOpenChange, onUpload, children }: ImageSectionProps) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange}>
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg">
        {title}
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4">
        {children}
        <ImageGrid images={images} onUpload={onUpload} />
      </CollapsibleContent>
    </Collapsible>
  );
};
