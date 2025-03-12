
import { Plus, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageGridProps {
  images: string[];
  onUpload: () => void;
}

export const ImageGrid = ({ images, onUpload }: ImageGridProps) => {
  const displayedImages = images.slice(0, 6);
  const hasMoreImages = images.length > 6;
  const gridCols = displayedImages.length >= 2 ? "grid-cols-2" : "grid-cols-1";

  return (
    <div className="space-y-4">
      <div className={`grid ${gridCols} gap-4`}>
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`Uploaded ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {hasMoreImages ? (
        <Button
          variant="outline"
          className="w-full h-12 flex items-center justify-center gap-2"
          onClick={onUpload}
        >
          <Plus className="h-4 w-4" />
          <span>Visa fler bilder ({images.length - 6} st)</span>
        </Button>
      ) : (
        <Button
          variant="outline"
          className="w-full h-24 flex flex-col items-center justify-center gap-2"
          onClick={onUpload}
        >
          <Camera className="h-6 w-6" />
          <span>Lägg till bilder</span>
        </Button>
      )}
    </div>
  );
};
