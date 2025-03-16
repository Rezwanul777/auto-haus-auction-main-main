
// import { ChevronDown, Plus } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ImageSection } from "./ImageSection";

// interface ServiceSectionProps {
//   isOpen: boolean;
//   images: string[];
//   onOpenChange: () => void;
//   onUpload: () => void;
//   onServiceDetailsClick: () => void;
// }

// export const ServiceSection = ({
//   isOpen,
//   images,
//   onOpenChange,
//   onUpload,
//   onServiceDetailsClick,
// }: ServiceSectionProps) => {
//   return (
//     <ImageSection
//       title={
//         <div className="flex  items-center space-x-4 justify-evenly">
//           <span className="text-black font-bold">Servicebilder</span>
//           <Button
//             variant="outline"
//             onClick={onServiceDetailsClick}
//             size="sm"
//           >
//             <Plus className="h-4 w-4 mr-2" />
//             Lägg till servicedetaljer
            
//           </Button>
//           {/* <ChevronDown className="h-5 w-5  rotate-270 md: text-black" /> */}
//         </div>
        
//       }
//       isOpen={isOpen}
//       images={images}
//       onOpenChange={onOpenChange}
//       onUpload={onUpload}
//     />
//   );
// };
// ServiceSection.tsx
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
  // Stop event propagation to prevent triggering the collapsible
  const handleButtonClick = (e) => {
    e.stopPropagation();
    onServiceDetailsClick();
  };

  return (
    <ImageSection
      title={
        <div className="w-full flex items-center justify-between">
          <span className="text-black dark:text-white font-bold">Servicebilder</span>
          <Button
            variant="outline"
            onClick={handleButtonClick}
            size="sm"
            className="ml-2"
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