// // import { useState, useEffect } from "react";
import { Camera, Image, ChevronDown, ChevronUp, Plus, Upload, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ServiceSection } from "../image-sections/ServiceSection";
import { ViewButton } from "../image-sections/ViewButton";
import { ServiceDetailsDialog } from "../image-sections/ServiceDetailsDialog";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Yellow theme colors
const primaryYellow = "#D4AF37"; // Gold yellow
const primaryYellowHover = "#C09C2C";
const primaryYellowLight = "#F9F1D9";
const primaryYellowDark = "#917514";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

interface ExteriorView {
  id: string;
  title: string;
  images: string[];
}

interface InteriorView {
  id: string;
  title: string;
  images: string[];
}

interface ImageSection {
  id: string;
  title: string;
  isOpen: boolean;
  images: string[];
}

// Styled Button Component
const AnimatedButton = ({ onClick, children, className = "" }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`bg-[${primaryYellow}] text-black px-4 py-2 rounded-md font-medium transition-colors hover:bg-[${primaryYellowHover}] focus:outline-none focus:ring-2 focus:ring-[${primaryYellow}] focus:ring-opacity-50 ${className}`}
  >
    {children}
  </motion.button>
);

// Enhanced ViewButton replacement
const EnhancedViewButton = ({ title, imageCount, onClick }) => (
  <motion.div
    variants={itemVariant}
    whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 w-full"
  >
    <button
      onClick={onClick}
      className="w-full h-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-opacity-50"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0 pr-2">
          <h3 className="font-medium text-gray-800 dark:text-gray-200 truncate">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
            {imageCount > 0 ? `${imageCount} bilder uppladdade` : "Inga bilder ännu"}
          </p>
        </div>
        <div className="flex-shrink-0">
          {imageCount > 0 ? (
            <CheckCircle className="h-5 w-5 text-[#D4AF37]" />
          ) : (
            <Plus className="h-5 w-5 text-[#D4AF37]" />
          )}
        </div>
      </div>
    </button>
  </motion.div>
);

// Enhanced Image Section
const EnhancedImageSection = ({ title, isOpen, onOpenChange, onUpload, children }) => (
  <motion.div 
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full"
  >
    <div 
      onClick={() => onOpenChange(!isOpen)}
      className={`flex items-center justify-between p-4 cursor-pointer bg-gradient-to-r ${
        isOpen 
          ? "from-[#D4AF37] to-[#C09C2C] text-black" 
          : "from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-white"
      } transition-all duration-300`}
    >
      <h3 className="text-lg font-semibold truncate">{title}</h3>
      <div className="flex-shrink-0 ml-3">
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </div>
    </div>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-4 w-full">
            {children || (
              <div className="flex flex-col items-center justify-center py-8 w-full">
                <Image className="h-12 w-12 text-[#D4AF37] mb-4 opacity-50" />
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-center">Inga bilder uppladdade ännu</p>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onUpload();
                  }}
                  className="bg-[#D4AF37] hover:bg-[#C09C2C] text-black"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Ladda upp bild
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// Custom CSS to hide scrollbars but allow scrolling
const noScrollbarStyles = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: hidden !important;
  }
`;

export const ImagesTab = () => {
  const [exteriorOpen, setExteriorOpen] = useState(true);
  const [interiorOpen, setInteriorOpen] = useState(false);
  const [isServiceDetailsOpen, setIsServiceDetailsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile screens
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 400);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const [exteriorViews, setExteriorViews] = useState<ExteriorView[]>([
    { id: "front", title: "Framsida", images: [] },
    { id: "back", title: "Baksida", images: [] },
    { id: "left", title: "Vänster sida", images: [] },
    { id: "right", title: "Höger sida", images: [] },
  ]);

  const [interiorViews, setInteriorViews] = useState<InteriorView[]>([
    { id: "dashboard", title: "Instrumentpanel", images: [] },
    { id: "driverseat", title: "Förarsäte", images: [] },
    { id: "backseat", title: "Baksäte", images: [] },
    { id: "trunk", title: "Bagageutrymme", images: [] },
    { id: "console", title: "Mittkonsol", images: [] },
    { id: "roof", title: "Innertak", images: [] },
  ]);

  const [sections, setSections] = useState<ImageSection[]>([
    { id: "damage", title: "Skadebilder", isOpen: false, images: [] },
    { id: "service", title: "Servicebilder", isOpen: false, images: [] },
    { id: "tires", title: "Däckbilder", isOpen: false, images: [] },
  ]);

  const handleImageUpload = (sectionId: string, viewId?: string) => {
    toast.success("Bilduppladdning kommer att implementeras här", {
      style: {
        background: "#4B5563",
        color: "#fff",
        border: "none",
      },
      icon: <Camera className="h-5 w-5 text-[#D4AF37]" />,
    });
  };

  const handleNext = () => {
    toast.success("Går vidare till nästa steg", {
      style: {
        background: "#4B5563",
        color: "#fff",
        border: "none",
      },
    });
  };

  const toggleSection = (sectionId: string) => {
    setSections(sections.map(section => ({
      ...section,
      isOpen: section.id === sectionId ? !section.isOpen : section.isOpen
    })));
  };

  const renderServiceSection = () => {
    const serviceSection = sections.find(section => section.id === "service");
    if (!serviceSection) return null;

    return (
      <ServiceSection
        isOpen={serviceSection.isOpen}
        images={serviceSection.images}
        onOpenChange={() => toggleSection("service")}
        onUpload={() => handleImageUpload("service")}
        onServiceDetailsClick={() => setIsServiceDetailsOpen(true)}
      />
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: noScrollbarStyles }} />
      <div className="no-scrollbar overflow-x-hidden w-full px-0 relative" style={{ maxWidth: "100%", margin: "0 auto" }}>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-6 w-full mx-auto overflow-x-hidden" 
          style={{ maxWidth: "100%" }}
        >
          <motion.div 
            variants={slideDown}
            className="text-center mb-6 bg-gradient-to-b from-[#F9F1D9] to-white dark:from-gray-800 dark:to-gray-900 p-4 sm:p-8 rounded-xl shadow-sm w-full"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1
              }}
            >
              <Camera className="h-14 w-14 sm:h-16 sm:w-16 mx-auto text-[#D4AF37] mb-3 sm:mb-4 p-2 bg-[#F9F1D9] dark:bg-[#917514]/30 rounded-full" />
            </motion.div>
            <motion.h2 
              variants={slideDown}
              className="text-xl sm:text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#917514] to-[#D4AF37] dark:from-[#D4AF37] dark:to-[#F9F1D9]"
            >
              Ta bilder på bilen
            </motion.h2>
            <motion.p 
              variants={slideDown}
              className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm sm:text-base"
            >
              Ta tydliga bilder på bilen från olika vinklar för en bättre värdering
            </motion.p>
          </motion.div>

          <motion.div className="space-y-4 sm:space-y-6 w-full" variants={staggerChildren}>
            <EnhancedImageSection
              title="Exteriörbilder"
              isOpen={exteriorOpen}
              onOpenChange={setExteriorOpen}
              onUpload={() => handleImageUpload("exterior")}
            >
              <motion.div 
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className={`grid grid-cols-1 ${isMobile ? '' : 'sm:grid-cols-2'} gap-4 w-full`}
              >
                {exteriorViews.map((view) => (
                  <EnhancedViewButton
                    key={view.id}
                    title={view.title}
                    imageCount={view.images.length}
                    onClick={() => handleImageUpload("exterior", view.id)}
                  />
                ))}
              </motion.div>
            </EnhancedImageSection>

            <EnhancedImageSection
              title="Interiörbilder"
              isOpen={interiorOpen}
              onOpenChange={setInteriorOpen}
              onUpload={() => handleImageUpload("interior")}
            >
              <motion.div 
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className={`grid grid-cols-1 ${isMobile ? '' : 'sm:grid-cols-2'} gap-4 w-full`}
              >
                {interiorViews.map((view) => (
                  <EnhancedViewButton
                    key={view.id}
                    title={view.title}
                    imageCount={view.images.length}
                    onClick={() => handleImageUpload("interior", view.id)}
                  />
                ))}
              </motion.div>
            </EnhancedImageSection>

            {renderServiceSection()}

            {sections
              .filter(section => section.id !== "service")
              .map((section) => (
                <EnhancedImageSection
                  key={section.id}
                  title={section.title}
                  isOpen={section.isOpen}
                  onOpenChange={() => toggleSection(section.id)}
                  onUpload={() => handleImageUpload(section.id)} 
                  children={undefined}            
                />
              ))}
          </motion.div>

          <ServiceDetailsDialog 
            isOpen={isServiceDetailsOpen}
            onClose={() => setIsServiceDetailsOpen(false)}
          />
        
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex justify-center sm:justify-end pt-4 sm:pt-6 w-full"
          >
            <Button
              onClick={handleNext}
              className="bg-[#D4AF37] hover:bg-[#C09C2C] text-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium shadow-md transition-all duration-300 hover:shadow-lg rounded-md w-full sm:w-auto"
            >
              <span>Gå vidare</span>
              <ChevronDown className="h-4 w-4 ml-2 rotate-270" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};




