import { ArrowLeft, X, Save, ChevronRight, ChevronDown } from "lucide-react";
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
import React from "react";


// Custom AnimatedTabs component with Framer Motion for responsive display
const AnimatedTabs = ({ value, onValueChange, children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 530);
    };
    
    // Check initial
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get the label of the currently selected tab
  const getActiveTabLabel = () => {
    const tabLabels = {
      "reg": "Reg nr",
      "vehicle-info": "Fordonsinfo",
      "test": "Test",
      "images": "Bilder",
      "price": "Pris"
    };
    
    return tabLabels[value] || "Välj";
  };

  if (isMobile) {
    // Mobile dropdown version
    return (
      <div className="w-full relative mb-4 sm:mb-8">
        <div 
          className="w-full bg-gray-800/40 backdrop-blur-sm  p-3 rounded-xl border border-gray-700/30 flex items-center justify-between cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="font-medium text-sm">{getActiveTabLabel()}</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
        </div>
        
        {showDropdown && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute mt-1 z-50 w-full bg-gray-800/90 backdrop-blur-sm  rounded-xl border border-gray-700/30 overflow-hidden shadow-lg"
          >
            {React.Children.map(children, (child) => {
              // Clone each child to add onClick handler for mobile
              return React.cloneElement(child, {
                onClick: (val) => {
                  onValueChange(val);
                  setShowDropdown(false);
                }
              });
            })}
          </motion.div>
        )}
      </div>
    );
  }

  // Desktop tabs version
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full backdrop-blur-sm bg-gray-800/40 p-2 rounded-xl border border-gray-700/30 overflow-hidden shadow-lg mb-8"
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
  );
};

// Custom AnimatedTabTrigger component with Framer Motion
const AnimatedTabTrigger = ({ value, activeTab, onClick, children }) => {
  const isActive = value === activeTab;
  
  // For mobile, render as a dropdown item
  const isMobile = window.innerWidth < 530;

// // Custom AnimatedTabs component with Framer Motion
// const AnimatedTabs = ({ value, onValueChange, children }) => {
//   return (
//     <div className="w-full relative mb-8">
//       <motion.div 
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, type: "spring" }}
//         className="w-full backdrop-blur-sm bg-gray-800/40 p-2 rounded-xl border border-gray-700/30 overflow-hidden shadow-lg"
//       >
//         <motion.div 
//           className="flex w-full relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.4 }}
//         >
//           {children}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// // Custom AnimatedTabTrigger component with Framer Motion
// const AnimatedTabTrigger = ({ value, activeTab, onClick, children }) => {
//   const isActive = value === activeTab;
  
  
//     <motion.div 
//       className="relative flex-1"
//       whileHover={{ scale: isActive ? 1 : 1.03 }}
//       transition={{ duration: 0.2 }}
//     >
//       <motion.button 
//         onClick={() => onClick(value)}
//         className={`w-full relative z-10 py-3 px-2 rounded-lg transition-colors duration-300 font-medium ${
//           isActive ? 'text-black' : 'text-gray-400 hover:text-gray-200'
//         }`}
//         whileTap={{ scale: 0.97 }}
//       >
//         {children}
//       </motion.button>
      
//       {isActive && (
//         <motion.div 
//           layoutId="activeTabBackground"
//           className="absolute inset-0 bg-gradient-to-b from-[#D4AF37] to-[#C09C2C] rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)]"
//           initial={false}
//           transition={{ 
//             type: "spring", 
//             stiffness: 400, 
//             damping: 30 
//           }}
//           style={{ zIndex: 0 }}
//         />
//       )}
//     </motion.div>
//   );
// };
if (isMobile) {
  return (
    <motion.button 
      onClick={() => onClick(value)}
      className="w-full text-left py-2.5 px-4 text-sm transition-colors duration-300"
      whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

// Desktop version
return (
  <motion.div 
    className="relative flex-1"
    whileHover={{ scale: isActive ? 1 : 1.03 }}
    transition={{ duration: 0.2 }}
  >
    <motion.button 
      onClick={() => onClick(value)}
      className={`w-full relative z-10 py-2 sm:py-3 px-1 sm:px-2 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-medium ${
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
}
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
              
              <div className="p-3 xs:p-4 sm:p-6">
                {/* <motion.button 
                  variants={itemVariants}
                  whileHover={{ x: -5, color: "#D4AF37" }}
                  onClick={() => onOpenChange(false)}
                  className="text-gray-400 flex items-center text-sm mb-8 transition-colors duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Tillbaka
                </motion.button> */}
                <motion.button 
                variants={itemVariants}
                whileHover={{ x: -5, color: "#D4AF37" }}
                onClick={() => onOpenChange(false)}
                className="text-gray-400 flex items-center text-xs sm:text-sm mb-4 sm:mb-8 transition-colors duration-300"
              >
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
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

// import { ArrowLeft, X, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { DialogContent, DialogClose } from "@/components/ui/dialog";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { TabHeader } from "../tabs/TabHeader";
// import { TabContent } from "../tabs/TabContent";
// import { useVehicleDetailForm } from "@/hooks/useVehicleDetailForm";

// // Custom AnimatedTabs component with Framer Motion
// const AnimatedTabs = ({ value, onValueChange, children }) => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 640);
//     };
    
//     // Check initial
//     checkMobile();
    
//     // Add resize listener
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Get the label of the currently selected tab
//   const getActiveTabLabel = () => {
//     const tabLabels = {
//       "reg": "Reg nr",
//       "vehicle-info": "Fordonsinfo",
//       "test": "Test",
//       "images": "Bilder",
//       "price": "Pris"
//     };
    
//     return tabLabels[value] || "Välj";
//   };

//   if (isMobile) {
//     // Mobile dropdown version
//     return (
//       <div className="w-full relative mb-4 sm:mb-8">
//         <div 
//           className="w-full bg-gray-800/40 backdrop-blur-sm p-3 rounded-xl border border-gray-700/30 flex items-center justify-between cursor-pointer z-10"
//           onClick={() => setShowDropdown(!showDropdown)}
//         >
//           <span className="font-medium text-sm">{getActiveTabLabel()}</span>
//           <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${showDropdown ? 'rotate-90' : ''}`} />
//         </div>
        
//         {showDropdown && (
//           <motion.div 
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -5 }}
//             className="absolute mt-1 z-50 w-full bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/30 overflow-hidden shadow-lg"
//           >
//             {React.Children.map(children, (child) => {
//               // Clone each child to add onClick handler for mobile
//               return React.cloneElement(child, {
//                 onClick: (val) => {
//                   onValueChange(val);
//                   setShowDropdown(false);
//                 }
//               });
//             })}
//           </motion.div>
//         )}
//       </div>
//     );
//   }

//   // Desktop tabs version
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, type: "spring" }}
//       className="w-full backdrop-blur-sm bg-gray-800/40 p-2 rounded-xl border border-gray-700/30 overflow-hidden shadow-lg mb-8 z-10 relative"
//     >
//       <motion.div 
//         className="flex w-full relative"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.4 }}
//       >
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// };

// // Custom AnimatedTabTrigger component with Framer Motion
// const AnimatedTabTrigger = ({ value, activeTab, onClick, children }) => {
//   const isActive = value === activeTab;
//   const isMobile = window.innerWidth < 640;
  
//   // For mobile, render as a dropdown item with transparent background on hover
//   if (isMobile) {
//     return (
//       <motion.button 
//         onClick={() => onClick(value)}
//         className="w-full text-left py-2.5 px-4 text-sm transition-colors duration-300 hover:bg-transparent focus:bg-transparent"
//         whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
//         whileTap={{ scale: 0.98 }}
//       >
//         {children}
//       </motion.button>
//     );
//   }
  
//   // Desktop version
//   return (
//     <motion.div 
//       className="relative flex-1"
//       whileHover={{ scale: isActive ? 1 : 1.03 }}
//       transition={{ duration: 0.2 }}
//     >
//       <motion.button 
//         onClick={() => onClick(value)}
//         className={`w-full relative z-10 py-2 sm:py-3 px-1 sm:px-2 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-medium ${
//           isActive ? 'text-black' : 'text-gray-400 hover:text-gray-200'
//         }`}
//         whileTap={{ scale: 0.97 }}
//       >
//         {children}
//       </motion.button>
      
//       {isActive && (
//         <motion.div 
//           layoutId="activeTabBackground"
//           className="absolute inset-0 bg-gradient-to-b from-[#D4AF37] to-[#C09C2C] rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)]"
//           initial={false}
//           transition={{ 
//             type: "spring", 
//             stiffness: 400, 
//             damping: 30 
//           }}
//           style={{ zIndex: 0 }}
//         />
//       )}
//     </motion.div>
//   );
// };

// // Individual tab option for mobile dropdown
// const TabOption = ({ value, activeTab, onClick, children }) => {
//   const isActive = value === activeTab;
  
//   return (
//     <div 
//       className={`w-full text-left py-3 px-4 text-sm transition-all duration-200 flex items-center
//                 ${isActive 
//                   ? 'bg-black/20 text-white font-medium' 
//                   : 'text-gray-300 hover:bg-transparent hover:text-white'}`}
//       onClick={() => onClick(value)}
//     >
//       {children}
//     </div>
//   );
// };

// const CreateTestDialog = ({ isOpen, onOpenChange }) => {
//   const {
//     currentStep,
//     currentDetailStep,
//     formData,
//     handleRegNumberSubmit,
//     handleOptionSelect,
//     handleEditSection
//   } = useVehicleDetailForm();

//   const [activeTab, setActiveTab] = useState("reg");
//   const [isMobile, setIsMobile] = useState(false);
  
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 640);
//     };
    
//     // Initial check
//     checkMobile();
    
//     // Add resize listener
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);
  
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1,
//         delayChildren: 0.2 
//       } 
//     },
//     exit: { 
//       opacity: 0,
//       transition: { staggerChildren: 0.05, staggerDirection: -1 }
//     }
//   };
  
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { type: "spring", stiffness: 300, damping: 24 }
//     },
//     exit: { 
//       y: -20, 
//       opacity: 0,
//       transition: { duration: 0.2 }
//     }
//   };
  
//   const contentVariants = {
//     hidden: { opacity: 0, scale: 0.98 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.2 }
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 0.96,
//       transition: { duration: 0.2 }
//     }
//   };

//   const tabItems = [
//     { id: "reg", label: "Reg nr" },
//     { id: "vehicle-info", label: "Fordonsinfo" },
//     { id: "test", label: "Test" },
//     { id: "images", label: "Bilder" },
//     { id: "price", label: "Pris" }
//   ];

//   return (
//     <DialogContent className="bg-black rounded-xl shadow-2xl border-0 max-h-[90vh] overflow-y-auto p-0 max-w-4xl mx-auto">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={containerVariants}
//             className="h-full w-full"
//           >
//             {/* Progress bar - z-index modified to stay above other elements */}
//             <motion.div
//               initial={{ scaleX: 0 }}
//               animate={{ 
//                 scaleX: 1,
//                 background: [
//                   "linear-gradient(to right, #D4AF37, #F5E3AA, #D4AF37)",
//                   "linear-gradient(to right, #F5E3AA, #D4AF37, #F5E3AA)",
//                   "linear-gradient(to right, #D4AF37, #F5E3AA, #D4AF37)"
//                 ]
//               }}
//               transition={{ 
//                 duration: 0.8, 
//                 ease: "easeOut",
//                 background: {
//                   duration: 3,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }
//               }}
//               className="h-1.5 w-full rounded-t-xl origin-left relative z-20"
//             />
            
//             {/* Close button - z-index increased */}
//             <DialogClose className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 z-30">
//               <motion.div
//                 whileHover={{ rotate: 90, scale: 1.1 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <X className="h-4 w-4 sm:h-5 sm:w-5" />
//               </motion.div>
//             </DialogClose>
            
//             <div className="p-3 xs:p-4 sm:p-6 relative">
//               {/* Back button with higher z-index to ensure it's always clickable */}
//               <div className="relative z-30">
//                 <motion.button 
//                   variants={itemVariants}
//                   whileHover={{ x: -5, color: "#D4AF37" }}
//                   onClick={() => onOpenChange(false)}
//                   className="text-gray-400 flex items-center text-xs sm:text-sm mb-4 sm:mb-8 transition-colors duration-300"
//                 >
//                   <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
//                   Tillbaka
//                 </motion.button>
//               </div>
              
//               {/* Tab navigation */}
//               {isMobile ? (
//                 // Mobile tabs as simple buttons with transparent background on hover
//                 <div className="mb-6 space-y-1 relative z-20">
//                   {tabItems.map((tab) => (
//                     <div 
//                       key={tab.id}
//                       className={`relative overflow-hidden rounded-lg ${activeTab === tab.id ? 'bg-[#D4AF37]' : 'bg-black/20 hover:bg-transparent'}`}
//                     >
//                       <button
//                         onClick={() => setActiveTab(tab.id)}
//                         className={`w-full text-left py-3 px-4 transition-colors duration-300 ${
//                           activeTab === tab.id ? 'text-black font-medium' : 'text-gray-300'
//                         }`}
//                       >
//                         {tab.label}
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 // Desktop tabs
//                 <motion.div variants={itemVariants}>
//                   <AnimatedTabs value={activeTab} onValueChange={setActiveTab}>
//                     {tabItems.map((tab) => (
//                       <AnimatedTabTrigger 
//                         key={tab.id} 
//                         value={tab.id} 
//                         activeTab={activeTab} 
//                         onClick={setActiveTab}
//                       >
//                         {tab.label}
//                       </AnimatedTabTrigger>
//                     ))}
//                   </AnimatedTabs>
//                 </motion.div>
//               )}
              
//               <motion.div 
//                 key={activeTab}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 className="bg-gradient-to-b from-gray-800/40 to-gray-800/20 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-700/30 shadow-inner relative z-10"
//               >
//                 <motion.div
//                   initial={{ opacity: 0, y: -5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3, duration: 0.3 }}
//                 >
//                   <TabHeader activeTab={activeTab} />
//                 </motion.div>
                
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={activeTab}
//                     initial={{ x: 30, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     exit={{ x: -30, opacity: 0 }}
//                     transition={{ 
//                       type: "spring", 
//                       stiffness: 300, 
//                       damping: 30 
//                     }}
//                     className="mt-4 sm:mt-6"
//                   >
//                     <TabContent
//                       activeTab={activeTab}
//                       currentStep={currentStep}
//                       currentDetailStep={currentDetailStep}
//                       formData={formData}
//                       onRegNumberSubmit={handleRegNumberSubmit}
//                       onOptionSelect={handleOptionSelect}
//                       onEditSection={handleEditSection}
//                     />
//                   </motion.div>
//                 </AnimatePresence>
//               </motion.div>
              
//               <motion.div 
//                 variants={itemVariants}
//                 className="flex flex-col xs:flex-row justify-end gap-3 sm:gap-4 mt-4 sm:mt-8"
//               >
//                 <motion.div 
//                   whileHover={{ scale: 1.03 }} 
//                   whileTap={{ scale: 0.97 }}
//                   className="order-2 xs:order-1"
//                 >
//                   <Button 
//                     variant="outline" 
//                     onClick={() => onOpenChange(false)}
//                     className="bg-transparent border-2 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300 w-full xs:w-auto text-xs sm:text-sm py-1 sm:py-2"
//                   >
//                     Avbryt
//                   </Button>
//                 </motion.div>
                
//                 <motion.div 
//                   whileHover={{ 
//                     scale: 1.03, 
//                     boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" 
//                   }} 
//                   whileTap={{ scale: 0.97 }}
//                   animate={{
//                     boxShadow: ["0 0 0px rgba(212, 175, 55, 0.0)", "0 0 15px rgba(212, 175, 55, 0.3)", "0 0 0px rgba(212, 175, 55, 0.0)"]
//                   }}
//                   transition={{
//                     boxShadow: {
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatType: "loop"
//                     }
//                   }}
//                   className="order-1 xs:order-2"
//                 >
//                   <Button 
//                     className="bg-gradient-to-r from-[#D4AF37] to-[#C09C2C] hover:from-[#C09C2C] hover:to-[#D4AF37] text-black font-medium transition-all duration-500 shadow-md flex items-center w-full xs:w-auto text-xs sm:text-sm py-1 sm:py-2"
//                   >
//                     <span>Spara och fortsätt</span>
//                     <motion.div
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ 
//                         repeat: Infinity, 
//                         repeatDelay: 1.5, 
//                         duration: 0.8,
//                         ease: "easeInOut" 
//                       }}
//                     >
//                       <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" />
//                     </motion.div>
//                   </Button>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </DialogContent>
//   );
// };

// export default CreateTestDialog;