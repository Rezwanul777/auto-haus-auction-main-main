
// import { ChevronDown, ChevronUp } from "lucide-react";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { ImageGrid } from "./ImageGrid";

// interface ImageSectionProps {
//   title: string | React.ReactNode;
//   isOpen: boolean;
//   images: string[];
//   onOpenChange: (value: boolean) => void;
//   onUpload: () => void;
//   children?: React.ReactNode;
// }

// export const ImageSection = ({ title, isOpen, images, onOpenChange, onUpload, children }: ImageSectionProps) => {
//   return (
//     <Collapsible open={isOpen} onOpenChange={onOpenChange}>
//       <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg">
//         {title}
//         {isOpen ? <ChevronUp className="h-5 w-5 md:text-black sm:text-black" /> : <ChevronDown className="h-5 w-5 md:text-black sm:text-black " />}
//       </CollapsibleTrigger>
//       <CollapsibleContent className="pt-4">
//         {children}
//         <ImageGrid images={images} onUpload={onUpload} />
//       </CollapsibleContent>
//     </Collapsible>
//   );
// };
// ImageSection.tsx
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
    <Collapsible open={isOpen} onOpenChange={onOpenChange} className="w-full overflow-hidden">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="flex-grow flex items-center justify-between pr-2">
          {title}
        </div>
        <div className="flex-shrink-0">
          {isOpen ? 
            <ChevronUp className="h-5 w-5 text-black dark:text-white" /> : 
            <ChevronDown className="h-5 w-5 text-black dark:text-white" />
          }
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4 w-full">
        {children}
        <ImageGrid images={images} onUpload={onUpload} />
      </CollapsibleContent>
    </Collapsible>
  );
};