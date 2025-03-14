
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ProfileSection } from "./ProfileSection";
// import { NotificationSection } from "./NotificationSection";
// import { AuctionSection } from "./AuctionSection";
// import { EconomySection } from "./EconomySection";
// import { DeliverySection } from "./DeliverySection";
// import { GeneralSection } from "./GeneralSection";

// export const SettingsTabs = () => {
//   return (
//     <Tabs defaultValue="general" className="space-y-4">
//       <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 bg-black/20 p-1">
//         <TabsTrigger value="general" className="text-sm">Allmänt</TabsTrigger>
//         <TabsTrigger value="profile" className="text-sm">Profil & Kontakt</TabsTrigger>
//         <TabsTrigger value="notifications" className="text-sm">Notifikationer</TabsTrigger>
//         <TabsTrigger value="auction" className="text-sm">Auktioner</TabsTrigger>
//         <TabsTrigger value="economy" className="text-sm">Ekonomi</TabsTrigger>
//         <TabsTrigger value="delivery" className="text-sm">Leverans</TabsTrigger>
//       </TabsList>

//       <TabsContent value="general">
//         <GeneralSection />
//       </TabsContent>

//       <TabsContent value="profile">
//         <ProfileSection />
//       </TabsContent>

//       <TabsContent value="notifications">
//         <NotificationSection />
//       </TabsContent>

//       <TabsContent value="auction">
//         <AuctionSection />
//       </TabsContent>

//       <TabsContent value="economy">
//         <EconomySection />
//       </TabsContent>

//       <TabsContent value="delivery">
//         <DeliverySection />
//       </TabsContent>
//     </Tabs>
//   );
// };

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSection } from "./ProfileSection";
import { NotificationSection } from "./NotificationSection";
import { AuctionSection } from "./AuctionSection";
import { EconomySection } from "./EconomySection";
import { DeliverySection } from "./DeliverySection";
import { GeneralSection } from "./GeneralSection";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const checkMobile = () => window.innerWidth < 640;
    setIsMobile(checkMobile());

    // Set up resize listener
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle tab change
  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  // Handle dropdown option selection
  const handleOptionSelect = (value) => {
    setActiveTab(value);
    setIsDropdownOpen(false);
  };

  // Get current tab name
  const getTabName = (value) => {
    switch (value) {
      case "general": return "Allmänt";
      case "profile": return "Profil & Kontakt";
      case "notifications": return "Notifikationer";
      case "auction": return "Auktioner";
      case "economy": return "Ekonomi";
      case "delivery": return "Leverans";
      default: return "Allmänt";
    }
  };

  return (
    <div className="space-y-4">
      {/* Navigation */}
      {isMobile ? (
        // Custom styled mobile dropdown
        <div className="relative">
          <button 
            className="w-full bg-black/30 border border-gray-800 rounded-md flex items-center justify-between p-3 text-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{getTabName(activeTab)}</span>
            <ChevronDown className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-black/70 backdrop-blur-sm border border-gray-800 rounded-md overflow-hidden z-20">
              <div className="py-1">
                {["general", "profile", "notifications", "auction", "economy", "delivery"].map((tab) => (
                  <button
                    key={tab}
                    className={`w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors ${activeTab === tab ? 'bg-white/20' : ''}`}
                    onClick={() => handleOptionSelect(tab)}
                  >
                    {getTabName(tab)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        // Desktop tabs
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-6 bg-black/20 p-1 w-full">
            <TabsTrigger value="general" className="text-sm whitespace-nowrap">Allmänt</TabsTrigger>
            <TabsTrigger value="profile" className="text-sm whitespace-nowrap">Profil & Kontakt</TabsTrigger>
            <TabsTrigger value="notifications" className="text-sm whitespace-nowrap">Notifikationer</TabsTrigger>
            <TabsTrigger value="auction" className="text-sm whitespace-nowrap">Auktioner</TabsTrigger>
            <TabsTrigger value="economy" className="text-sm whitespace-nowrap">Ekonomi</TabsTrigger>
            <TabsTrigger value="delivery" className="text-sm whitespace-nowrap">Leverans</TabsTrigger>
          </TabsList>
        </Tabs>
      )}

      {/* Content */}
      <div className="tab-content">
        {activeTab === "general" && <GeneralSection />}
        {activeTab === "profile" && <ProfileSection />}
        {activeTab === "notifications" && <NotificationSection />}
        {activeTab === "auction" && <AuctionSection />}
        {activeTab === "economy" && <EconomySection />}
        {activeTab === "delivery" && <DeliverySection />}
      </div>
    </div>
  );
};