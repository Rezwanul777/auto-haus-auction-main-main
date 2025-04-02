// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { useVehicleDetailForm } from "@/hooks/useVehicleDetailForm";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { useState } from "react";
// import { TabHeader } from "../tabs/TabHeader";
// import { TabContent } from "../tabs/TabContent";

// const CreateTest = () => {
//   const {
//     currentStep,
//     currentDetailStep,
//     formData,
//     handleRegNumberSubmit,
//     handleOptionSelect,
//     handleEditSection
//   } = useVehicleDetailForm();

//   const [activeTab, setActiveTab] = useState("vehicle-info");

//   return (
//     <div className="container max-w-[840px] mx-auto py-3 px-3">
//       <div className="bg-[#0a0d14] rounded-xl shadow-xl overflow-hidden  p-6 border border-black min-h-[120%]">
//         <Link to="/create-ad">
//           <Button variant="ghost" size="sm" className="mb-4">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Tillbaka
//           </Button>
//         </Link>
        
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
//           <TabsList className="w-full">
//             <TabsTrigger value="reg" className="flex-1">Reg nr</TabsTrigger>
//             <TabsTrigger value="vehicle-info" className="flex-1">Fordonsinfo</TabsTrigger>
//             <TabsTrigger value="test" className="flex-1">Test</TabsTrigger>
//             <TabsTrigger value="images" className="flex-1">Bilder</TabsTrigger>
//             <TabsTrigger value="price" className="flex-1">Pris</TabsTrigger>
//           </TabsList>
//         </Tabs>
        
//         <TabHeader activeTab={activeTab} />
        
//         <TabContent
//           activeTab={activeTab}
//           currentStep={currentStep}
//           currentDetailStep={currentDetailStep}
//           formData={formData}
//           onRegNumberSubmit={handleRegNumberSubmit}
//           onOptionSelect={handleOptionSelect}
//           onEditSection={handleEditSection}
//         />
//       </div>
//     </div>
//   );
// };

// export default CreateTest;
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useVehicleDetailForm } from "@/hooks/useVehicleDetailForm";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { TabHeader } from "../tabs/TabHeader";
import { TabContent } from "../tabs/TabContent";

const CreateTest = () => {
  const {
    currentStep,
    currentDetailStep,
    formData,
    handleRegNumberSubmit,
    handleOptionSelect,
    handleEditSection
  } = useVehicleDetailForm();
  
  const [activeTab, setActiveTab] = useState("vehicle-info");
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  
  // Check screen size on mount and when window resizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 480);
      setIsTablet(window.innerWidth >= 480 && window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Get tab label for mobile dropdown
  const getActiveTabLabel = () => {
    const tabLabels = {
      "reg": "Reg nr",
      "vehicle-info": "Fordonsinfo",
      "test": "Test",
      "images": "Bilder",
      "price": "Pris"
    };
    
    return tabLabels[activeTab] || "Välj";
  };
  
  // Tab items for both desktop and mobile
  const tabItems = [
    { value: "reg", label: "Reg nr" },
    { value: "vehicle-info", label: "Fordonsinfo" },
    { value: "test", label: "Test" },
    { value: "images", label: "Bilder" },
    { value: "price", label: "Pris" }
  ];
  
  return (
    <div className="container max-w-[840px] mx-auto py-3 px-3 sm:px-4 md:px-6">
      <div className="bg-[#0a0d14] rounded-xl shadow-xl overflow-hidden p-3 sm:p-4 md:p-6 border border-gray-900 min-h-[120%]">
        <Link to="/dashboard">
          <Button variant="ghost" size="sm" className="mb-4 text-xs sm:text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Tillbaka
          </Button>
        </Link>
        
        {/* Mobile Dropdown for Tabs */}
        {isMobile ? (
          <div className="relative mb-6">
            <button
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
              className="w-full flex items-center justify-between bg-[#111520] px-4 py-3 rounded-lg text-white text-sm"
            >
              <span>{getActiveTabLabel()}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showMobileDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showMobileDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#111520] rounded-lg shadow-lg overflow-hidden z-10">
                {tabItems.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => {
                      setActiveTab(tab.value);
                      setShowMobileDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-[#1a1f2c] ${
                      activeTab === tab.value ? 'text-[#D4AF37] font-medium' : 'text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          // Tablet and Desktop Tabs
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
            <TabsList className="w-full grid grid-cols-5 h-auto p-1 bg-[#111520]">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value} 
                  className={`flex-1 py-2 px-1 text-xs sm:text-sm rounded-lg data-[state=active]:text-black data-[state=active]:bg-[#D4AF37] data-[state=active]:shadow-none ${
                    isTablet ? 'whitespace-nowrap overflow-hidden text-ellipsis' : ''
                  }`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
        
        <div className={isMobile ? "mt-4" : ""}>
          <TabHeader activeTab={activeTab} />
        </div>
        
        <div className="mt-4">
          <TabContent
            activeTab={activeTab}
            currentStep={currentStep}
            currentDetailStep={currentDetailStep}
            formData={formData}
            onRegNumberSubmit={handleRegNumberSubmit}
            onOptionSelect={handleOptionSelect}
            onEditSection={handleEditSection}
          />
        </div>
      </div>
      
      {/* Mobile fixed bottom buttons (optional) */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0a0d14] p-3 border-t border-gray-800 flex gap-3 z-50">
          <Button variant="outline" className="flex-1 text-sm h-10 border-gray-700 text-gray-300">
            Avbryt
          </Button>
          <Button className="flex-1 text-sm h-10 bg-[#D4AF37] text-black hover:bg-[#c4a030]">
            Spara och fortsätt
          </Button>
        </div>
      )}
    </div>
  );
};

export default CreateTest;



// import { ArrowLeft, X, ChevronRight, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link, useNavigate } from "react-router-dom";
// import { useVehicleDetailForm } from "@/hooks/useVehicleDetailForm";
// import { useState, useEffect } from "react";
// import { TabHeader } from "../tabs/TabHeader";
// import { TabContent } from "../tabs/TabContent";
// import { motion, AnimatePresence } from "framer-motion";

// // Custom AnimatedTabs component with Framer Motion for responsive display
// const AnimatedTabs = ({ value, onValueChange, children }) => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 530);
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
//       <div className="w-full relative mb-4">
//         <div 
//           className="w-full bg-[#111520] p-3 rounded-xl flex items-center justify-between cursor-pointer"
//           onClick={() => setShowDropdown(!showDropdown)}
//         >
//           <span className="font-medium text-sm text-white">{getActiveTabLabel()}</span>
//           <ChevronDown className={`h-4 w-4 text-white transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
//         </div>
        
//         {showDropdown && (
//           <motion.div 
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -5 }}
//             className="absolute mt-1 z-50 w-full bg-[#111520] rounded-xl overflow-hidden shadow-lg"
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

//   // Desktop tabs version - matching screenshot 2
//   return (
//     <div className="w-full bg-[#111520] rounded-xl overflow-hidden mb-6">
//       <div className="flex w-full relative">
//         {children}
//       </div>
//     </div>
//   );
// };

// // Custom AnimatedTabTrigger component with Framer Motion
// const AnimatedTabTrigger = ({ value, activeTab, onClick, children }) => {
//   const isActive = value === activeTab;
  
//   // For mobile, render as a dropdown item
//   if (window.innerWidth < 530) {
//     return (
//       <motion.button 
//         onClick={() => onClick(value)}
//         className="w-full text-left py-2.5 px-4 text-sm transition-colors duration-300 text-white"
//         whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
//         whileTap={{ scale: 0.98 }}
//       >
//         {children}
//       </motion.button>
//     );
//   }

//   // Desktop version - matching screenshot 2
//   return (
//     <div className={`flex-1 py-3 px-4 text-center cursor-pointer ${isActive ? 'bg-[#D4AF37] text-black font-medium' : 'text-white hover:bg-[#1a1f2c]'}`} onClick={() => onClick(value)}>
//       {children}
//     </div>
//   );
// };

// const CreateTest = () => {
//   const navigate = useNavigate();
//   const {
//     currentStep,
//     currentDetailStep,
//     formData,
//     handleRegNumberSubmit,
//     handleOptionSelect,
//     handleEditSection
//   } = useVehicleDetailForm();

//   const [activeTab, setActiveTab] = useState("vehicle-info");
  
//   const tabItems = [
//     { id: "reg", label: "Reg nr" },
//     { id: "vehicle-info", label: "Fordonsinfo" },
//     { id: "test", label: "Test" },
//     { id: "images", label: "Bilder" },
//     { id: "price", label: "Pris" }
//   ];

//   return (
//     <div className="max-w-[1000px] mx-auto p-4">
//       {/* Back button */}
//       <Link to="/create-ad" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4">
//         <ArrowLeft className="h-4 w-4 mr-2" />
//         <span>Tillbaka</span>
//       </Link>
      
//       {/* Main content */}
//       <div className="bg-[#0a0d14] rounded-xl shadow-xl overflow-hidden">
//         {/* Tabs */}
//         <AnimatedTabs value={activeTab} onValueChange={setActiveTab}>
//           {tabItems.map((tab) => (
//             <AnimatedTabTrigger 
//               key={tab.id} 
//               value={tab.id} 
//               activeTab={activeTab} 
//               onClick={setActiveTab}
//             >
//               {tab.label}
//             </AnimatedTabTrigger>
//           ))}
//         </AnimatedTabs>
        
//         {/* Content area */}
//         <div className="p-6 bg-[#0a0d14]">
//           {/* Car icon and title */}
//           <div className="flex flex-col items-center mb-6">
//             <div className="w-16 h-16 rounded-full bg-[#1f2737] flex items-center justify-center mb-4">
//               <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M16 6L19 10H21C21.5523 10 22 10.4477 22 11V15C22 15.5523 21.5523 16 21 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M2 16V15C2 14.4477 2.44772 14 3 14H17.8L18.8477 11.1055C18.9327 10.7803 19.2327 10.5503 19.5736 10.5503H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M4 16.01L4.01 15.9989" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M18 16.01L18.01 15.9989" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M7.5 14H13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M16 16V20C16 20.5523 15.5523 21 15 21H13C12.4477 21 12 20.5523 12 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M9 16V20C9 20.5523 8.55228 21 8 21H6C5.44772 21 5 20.5523 5 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//             <h2 className="text-[#D4AF37] text-2xl font-semibold text-center">Fordonsinfo</h2>
//             <div className="w-12 h-1 bg-[#D4AF37] mt-2 rounded-full"></div>
//           </div>
          
//           {/* Step title */}
//           <div className="mb-6">
//             <h3 className="text-white text-xl font-medium text-center">Steg 1: Ange registreringsnummer</h3>
//             <p className="text-gray-400 text-center mt-2">
//               Börja med att ange bilens registreringsnummer för att hämta information
//             </p>
//           </div>
          
//           {/* Registration input */}
//           <div className="flex justify-center mb-8">
//             <div className="flex max-w-md w-full">
//               <div className="bg-blue-600 text-white py-2 px-4 rounded-l-md flex items-center justify-center">
//                 <div className="flex flex-col items-center">
//                   <div className="flex">
//                     {Array(12).fill().map((_, i) => (
//                       <div key={i} className="w-1 h-1 rounded-full bg-yellow-400 mx-0.5"></div>
//                     ))}
//                   </div>
//                   <span className="font-bold">S</span>
//                 </div>
//               </div>
//               <input 
//                 type="text" 
//                 placeholder="REG. NR." 
//                 className="flex-1 py-2 px-4 text-lg text-gray-400 bg-white rounded-none focus:outline-none focus:ring-0"
//               />
//               <button className="bg-[#151c2c] text-white py-2 px-6 rounded-r-md hover:bg-[#1a2235] transition-colors">
//                 Sök
//               </button>
//             </div>
//           </div>
          
//           {/* Bottom buttons - only shown on non-mobile */}
//           <div className="hidden md:flex justify-end gap-4 mt-10">
//             <button className="bg-transparent border border-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors">
//               Avbryt
//             </button>
//             <button className="bg-[#D4AF37] text-black py-2 px-6 rounded-md hover:bg-[#c09c2c] transition-colors flex items-center">
//               <span>Spara och fortsätt</span>
//               <ChevronRight className="h-4 w-4 ml-2" />
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Bottom buttons for mobile - fixed to bottom */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0a0d14] p-4 border-t border-gray-800 flex gap-4">
//         <button className="flex-1 bg-transparent border border-gray-700 text-white py-3 px-4 rounded-md">
//           Avbryt
//         </button>
//         <button className="flex-1 bg-[#D4AF37] text-black py-3 px-4 rounded-md flex items-center justify-center">
//           <span>Spara och fortsätt</span>
//           <ChevronRight className="h-4 w-4 ml-2" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateTest;