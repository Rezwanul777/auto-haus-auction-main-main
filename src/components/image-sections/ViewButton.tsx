
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ViewButtonProps {
  title: string;
  imageCount: number;
  onClick: () => void;
}

export const ViewButton = ({ title, imageCount, onClick }: ViewButtonProps) => {
  return (
    <Button
      variant="outline"
      className="h-24 flex flex-col items-center justify-center gap-2"
      onClick={onClick}
    >
      <Camera className="h-6 w-6" />
      <span>{title}</span>
      {imageCount > 0 && (
        <span className="text-sm text-gray-500">
          {imageCount} bilder
        </span>
      )}
    </Button>
  );
};
