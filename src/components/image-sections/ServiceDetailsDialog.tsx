
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ServiceDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceDetailsDialog = ({ isOpen, onClose }: ServiceDetailsDialogProps) => {
  const [odometer, setOdometer] = useState("");
  const [date, setDate] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we would normally save to a database, but for now we'll just show a success message
    toast.success("Servicedetaljer sparade");
    onClose();
    
    // Reset form
    setOdometer("");
    setDate("");
    setServiceType("");
    setNotes("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Lägg till servicedetaljer</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="odometer">Mätarställning (km)</Label>
            <Input
              id="odometer"
              type="number"
              placeholder="T.ex. 12500"
              value={odometer}
              onChange={(e) => setOdometer(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date">Datum</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="serviceType">Typ av service</Label>
            <Input
              id="serviceType"
              type="text"
              placeholder="T.ex. Oljebyte, Bromsar, Däckbyte"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Anteckningar</Label>
            <Input
              id="notes"
              placeholder="Ytterligare information..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" type="button" onClick={onClose}>
              Avbryt
            </Button>
            <Button type="submit">Spara</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
