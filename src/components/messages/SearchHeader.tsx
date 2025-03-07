import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchHeader = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          placeholder="Sök meddelanden..." 
          className="pl-9"
        />
      </div>
    </div>
  );
};