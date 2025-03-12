import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckSquare, XSquare, CreditCard, Save, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PriceSectionProps {
  price: string;
  onPriceChange: (value: string) => void;
  includesVAT: boolean;
  onVATChange: (value: boolean) => void;
}

export const PriceSection = ({ 
  price, 
  onPriceChange, 
  includesVAT, 
  onVATChange 
}: PriceSectionProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmitForReview = () => {
    if (!price) {
      toast.error("Du måste ange ett pris");
      return;
    }
    toast.success("Annonsen har skickats för granskning");
  };

  const handleSaveTest = () => {
    if (!price) {
      toast.error("Du måste ange ett pris");
      return;
    }
    toast.success("Testet har sparats");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 mt-8 border-t border-gray-200 dark:border-gray-700 pt-8"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-sm"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center">
            <CreditCard className="h-5 w-5 text-[#D4AF37] mr-2" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Prisinformation</h3>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className={`gap-2 transition-all duration-300 ${
                includesVAT 
                  ? "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10" 
                  : "border-gray-300 text-gray-500 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
              }`}
              onClick={() => onVATChange(!includesVAT)}
            >
              {includesVAT ? (
                <>
                  <CheckSquare className="h-4 w-4" />
                  Inkl. moms
                </>
              ) : (
                <>
                  <XSquare className="h-4 w-4" />
                  Exkl. moms
                </>
              )}
            </Button>
          </motion.div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Önskat pris (SEK)
          </label>
          
          <div className="relative">
            <motion.div
              animate={{
                scale: isFocused ? 1.02 : 1,
                boxShadow: isFocused 
                  ? "0 4px 12px rgba(212, 175, 55, 0.15)" 
                  : "0 2px 4px rgba(0, 0, 0, 0.05)"
              }}
              transition={{ duration: 0.2 }}
              className="rounded-lg"
            >
              <Input
                type="number"
                placeholder="Ange önskat pris"
                value={price}
                onChange={(e) => onPriceChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full h-12 text-lg px-4 rounded-lg border-2 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                SEK
              </div>
            </motion.div>
          </div>

          {price && (
            <motion.p 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm text-gray-500 dark:text-gray-400 mt-2"
            >
              Priset motsvarar {Number(price).toLocaleString('sv-SE')} kr {includesVAT ? 'inkl.' : 'exkl.'} moms
            </motion.p>
          )}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 pt-2"
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1"
        >
          <Button 
            variant="outline" 
            className="w-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 h-12 transition-all duration-300 gap-2"
            onClick={handleSaveTest}
          >
            <Save className="h-4 w-4" />
            Spara Test
          </Button>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }}
          className="flex-1"
        >
          <Button 
            className="w-full bg-[#D4AF37] hover:bg-[#C09C2C] text-black h-12 font-medium transition-colors duration-300 gap-2"
            onClick={handleSubmitForReview}
          >
            Skicka för granskning
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};