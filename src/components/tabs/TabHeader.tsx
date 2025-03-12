import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Car, Clipboard, Camera, CreditCard } from "lucide-react";

interface TabHeaderProps {
  activeTab: string;
}

export const TabHeader = ({ activeTab }: TabHeaderProps) => {
  // Function to determine which icon to display based on the active tab
  const getTabIcon = () => {
    switch (activeTab) {
      case "reg":
        return <FileText className="h-5 w-5" />;
      case "vehicle-info":
        return <Car className="h-5 w-5" />;
      case "test":
        return <Clipboard className="h-5 w-5" />;
      case "images":
        return <Camera className="h-5 w-5" />;
      case "price":
        return <CreditCard className="h-5 w-5" />;
      default:
        return null;
    }
  };

  // Function to get the tab title
  const getTabTitle = () => {
    switch (activeTab) {
      case "reg":
        return "Registreringsnummer";
      case "vehicle-info":
        return "Fordonsinfo";
      case "test":
        return "Test och besiktning";
      case "images":
        return "Bilder";
      case "price":
        return "Pris";
      default:
        return "";
    }
  };

  return (
    <div className="mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center mb-3">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: 0.1, 
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="h-12 w-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center"
            >
              <motion.div className="text-[#D4AF37]">
                {getTabIcon()}
              </motion.div>
            </motion.div>
          </div>
          
          <motion.h1 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C09C2C] dark:from-[#D4AF37] dark:to-[#E6C87A]"
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {getTabTitle()}
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "40px" }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="h-1 bg-[#D4AF37] rounded-full mt-3"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};