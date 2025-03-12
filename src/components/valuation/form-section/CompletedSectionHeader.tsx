
import { Check, PenLine } from "lucide-react";

interface CompletedSectionHeaderProps {
  title: string;
  value: string;
  onEdit: (event: React.MouseEvent) => void;
}

export const CompletedSectionHeader = ({ title, value, onEdit }: CompletedSectionHeaderProps) => (
  <div className="flex flex-col space-y-1">
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <Check className="h-4 w-4 text-green-500" />
        <span className="text-gray-700">{title}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-900">{value}</span>
        <button 
          onClick={onEdit}
          className="hover:bg-gray-200 p-1.5 rounded-full transition-colors"
        >
          <PenLine className="h-3.5 w-3.5 text-gray-400" />
        </button>
      </div>
    </div>
  </div>
);
