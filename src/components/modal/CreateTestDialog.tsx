import { ArrowLeft, X, Save, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useVehicleDetailForm } from "@/hooks/useVehicleDetailForm";
import { useState, useEffect } from "react";
import { TabHeader } from "../tabs/TabHeader";
import { TabContent } from "../tabs/TabContent";
import { motion, AnimatePresence } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

// Custom AnimatedTabs component with Framer Motion
const AnimatedTabs = ({ value, onValueChange, children }) => {
  return (
    <div className="w-full relative mb-8">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full backdrop-blur-sm bg-gray-800/40 p-2 rounded-xl border border-gray-700/30 overflow-hidden shadow-lg"
      >
        <motion.div 
          className="flex w-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Custom AnimatedTabTrigger component with Framer Motion
const AnimatedTabTrigger = ({ value, activeTab, onClick, children }) => {
  const isActive = value === activeTab;
  
  return (
    <motion.div 
      className="relative flex-1"
      whileHover={{ scale: isActive ? 1 : 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <motion.button 
        onClick={() => onClick(value)}
        className={`w-full relative z-10 py-3 px-2 rounded-lg transition-colors duration-300 font-medium ${
          isActive ? 'text-black' : 'text-gray-400 hover:text-gray-200'
        }`}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.button>
      
      {isActive && (
        <motion.div 
          layoutId="activeTabBackground"
          className="absolute inset-0 bg-gradient-to-b from-[#D4AF37] to-[#C09C2C] rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          initial={false}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30 
          }}
          style={{ zIndex: 0 }}
        />
      )}
    </motion.div>
  );
};

const CreateTestDialog = ({ isOpen, onOpenChange }) => {
  const navigate = useNavigate();
  const {
    currentStep,
    currentDetailStep,
    formData,
    handleRegNumberSubmit,
    handleOptionSelect,
    handleEditSection
  } = useVehicleDetailForm();

  const [activeTab, setActiveTab] = useState("vehicle-info");
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      } 
    },
    exit: { 
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.2 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.96,
      transition: { duration: 0.2 }
    }
  };

  const tabItems = [
    { id: "reg", label: "Reg nr" },
    { id: "vehicle-info", label: "Fordonsinfo" },
    { id: "test", label: "Test" },
    { id: "images", label: "Bilder" },
    { id: "price", label: "Pris" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {/* <DialogContent className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl shadow-2xl border-0 max-h-[90vh] overflow-y-auto p-0 max-w-4xl mx-auto"> */}
      <DialogContent className="bg-black rounded-xl shadow-2xl border-0 max-h-[90vh] overflow-y-auto p-0 max-w-4xl mx-auto">
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
              className="h-full w-full"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: 1,
                  background: [
                    "linear-gradient(to right, #D4AF37, #F5E3AA, #D4AF37)",
                    "linear-gradient(to right, #F5E3AA, #D4AF37, #F5E3AA)",
                    "linear-gradient(to right, #D4AF37, #F5E3AA, #D4AF37)"
                  ]
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  background: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                className="h-1.5 w-full rounded-t-xl origin-left"
              />
              
              <DialogClose className="absolute top-4 right-4 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 z-20">
                <motion.div
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              </DialogClose>
              
              <div className="p-6 sm:p-8">
                <motion.button 
                  variants={itemVariants}
                  whileHover={{ x: -5, color: "#D4AF37" }}
                  onClick={() => onOpenChange(false)}
                  className="text-gray-400 flex items-center text-sm mb-8 transition-colors duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Tillbaka
                </motion.button>
                
                <motion.div variants={itemVariants}>
                  <AnimatedTabs value={activeTab} onValueChange={setActiveTab}>
                    {tabItems.map((tab) => (
                      <AnimatedTabTrigger 
                        key={tab.id} 
                        value={tab.id} 
                        activeTab={activeTab} 
                        onClick={setActiveTab}
                      >
                        {tab.label}
                      </AnimatedTabTrigger>
                    ))}
                  </AnimatedTabs>
                </motion.div>
                
                <motion.div 
                  key={activeTab}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-gradient-to-b from-gray-800/40 to-gray-800/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 shadow-inner"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <TabHeader activeTab={activeTab} />
                  </motion.div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30 
                      }}
                      className="mt-6"
                    >
                      <TabContent
                        activeTab={activeTab}
                        currentStep={currentStep}
                        currentDetailStep={currentDetailStep}
                        formData={formData}
                        onRegNumberSubmit={handleRegNumberSubmit}
                        onOptionSelect={handleOptionSelect}
                        onEditSection={handleEditSection}
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row justify-end gap-4 mt-8"
                >
                  <motion.div 
                    whileHover={{ scale: 1.03 }} 
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button 
                      variant="outline" 
                      onClick={() => onOpenChange(false)}
                      className="bg-transparent border-2 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300 order-2 sm:order-1 w-full sm:w-auto"
                    >
                      Avbryt
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" 
                    }} 
                    whileTap={{ scale: 0.97 }}
                    animate={{
                      boxShadow: ["0 0 0px rgba(212, 175, 55, 0.0)", "0 0 15px rgba(212, 175, 55, 0.3)", "0 0 0px rgba(212, 175, 55, 0.0)"]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }
                    }}
                  >
                    <Button 
                      className="bg-gradient-to-r from-[#D4AF37] to-[#C09C2C] hover:from-[#C09C2C] hover:to-[#D4AF37] text-black font-medium transition-all duration-500 shadow-md flex items-center order-1 sm:order-2 w-full sm:w-auto"
                    >
                      <span>Spara och fortsätt</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatDelay: 1.5, 
                          duration: 0.8,
                          ease: "easeInOut" 
                        }}
                      >
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTestDialog;