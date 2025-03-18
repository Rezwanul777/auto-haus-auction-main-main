
// import MessageCard from "./MessageCard";
// import { navigationItems } from "./navigationData";
// import TestCard from "./TestCard";
// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { Bookmark } from "lucide-react";

// const NavigationCards = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-2">
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-2">
//         {navigationItems.slice(0, 3).map((item, index) => (
//           index === 1 ? (
//             <MessageCard key={`nav-${index}`} item={item} />
//           ) : (
//             <NavigationCard key={`nav-${index}`} item={item} />
//           )
//         ))}
//       </div>

//       <div className="grid sm:grid-cols-1  md:grid-cols-6 gap-2 mb-2">
//         {navigationItems.slice(3).map((item, index) => (
//           <NavigationCard key={`nav-bottom-${index}`} item={item} />
//         ))}
//       </div>

//       <div className="grid grid-cols-2 gap-2">
//         <TestCard />
//         <Card 
//           className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[120px] animate-fade-in"
//           onClick={() => navigate('/favorites')}
//         >
//           <div className="absolute inset-0 bg-[#ea384c]" />
//           <CardContent className="p-4 relative z-10 h-full flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-lg font-semibold text-white">Favoriter</h3>
//                 <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
                
//               </div>
//               <Bookmark className="h-4 w-4 text-white" />
//             </div>
           
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default NavigationCards;

// import NavigationCard from "./NavigationCard";
// import MessageCard from "./MessageCard";
// import { navigationItems } from "./navigationData";
// import TestCard from "./TestCard";
// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { Bookmark } from "lucide-react";

// // const NavigationCards = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="space-y-2">
// //       <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-2">
// //         {navigationItems.slice(0, 3).map((item, index) => (
// //           index === 1 ? (
// //             <MessageCard key={`nav-${index}`} item={item} />
// //           ) : (
// //             <NavigationCard key={`nav-${index}`} item={item} />
// //           )
// //         ))}
// //       </div>

// //       <div className="grid grid-cols-1  md:grid-cols-6 gap-2 mb-2">
// //         {navigationItems.slice(3).map((item, index) => (
// //          <NavigationCard key={`nav-bottom-${index}`} item={item} />
// //         ))}
// //       </div>

// //       <div className="grid grid-cols-2 gap-2">
// //         <TestCard />
// //         <Card 
// //           className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[120px] animate-fade-in"
// //           onClick={() => navigate('/favorites')}
// //         >
// //           <div className="absolute inset-0 bg-[#ea384c]" />
// //           <CardContent className="p-4 relative z-10 h-full flex flex-col justify-between">
// //             <div className="flex justify-between items-start">
// //               <div>
// //                 <h3 className="text-lg font-semibold text-white">Favoriter</h3>
// //                 <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
                
// //               </div>
// //               <Bookmark className="h-4 w-4 text-white" />
// //             </div>
           
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // };

// export default NavigationCards;
// import NavigationCard from "./NavigationCard";
// import MessageCard from "./MessageCard";
// import { navigationItems } from "./navigationData";
// import TestCard from "./TestCard";
// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { Bookmark } from "lucide-react";

// const NavigationCards = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-2">
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-2">
//         {navigationItems.slice(0, 3).map((item, index) => (
//           index === 1 ? (
//             <MessageCard key={`nav-${index}`} item={item} />
//           ) : (
//             <NavigationCard key={`nav-${index}`} item={item} />
//           )
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mb-2">
//         {navigationItems.slice(3).map((item, index) => (
//           <NavigationCard key={`nav-bottom-${index}`} item={item} />
//         ))}
//       </div>

//       <div className="grid grid-cols-2 gap-2">
//         <TestCard />
//         <Card 
//           className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[120px] animate-fade-in"
//           onClick={() => navigate('/favorites')}
//         >
//           <div className="absolute inset-0 bg-[#ea384c]" />
//           <CardContent className="p-4 relative z-10 h-full flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-lg font-semibold text-white">Favoriter</h3>
//                 <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
//               </div>
//               <Bookmark className="h-4 w-4 text-white" />
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default NavigationCards;

// import NavigationCard from "./NavigationCard";
// import MessageCard from "./MessageCard";
// import { navigationItems } from "./navigationData";
// import TestCard from "./TestCard";
// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { Bookmark } from "lucide-react";

// const NavigationCards = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-2">
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-2">
//         {navigationItems.slice(0, 3).map((item, index) => (
//           item.path === "/messages" ? (
//             <MessageCard key={`nav-${index}`} item={item} />
//           ) : (
//             <NavigationCard key={`nav-${index}`} item={item} />
//           )
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mb-2">
//         {navigationItems.slice(3).map((item, index) => (
//           <NavigationCard key={`nav-bottom-${index}`} item={item} />
//         ))}
//       </div>

//       <div className="grid grid-cols-2 gap-2">
//         <TestCard />
//         <Card 
//           className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[120px] animate-fade-in"
//           onClick={() => navigate('/favorites')}
//         >
//           <div className="absolute inset-0 bg-[#ea384c]" />
//           <CardContent className="p-4 relative z-10 h-full flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-lg font-semibold text-white">Favoriter</h3>
//                 <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
//               </div>
//               <Bookmark className="h-4 w-4 text-white" />
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

//export default NavigationCards;

// import NavigationCard from "./NavigationCard";
// import MessageCard from "./MessageCard";
// import { navigationItems } from "./navigationData";
// import TestCard from "./TestCard";
// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { Bookmark } from "lucide-react";

// const NavigationCards = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-2">
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-2">
//         {navigationItems.slice(0, 3).map((item, index) => (
//           item.path === "/messages" ? (
//             <MessageCard key={`nav-${index}`} item={item} />
//           ) : (
//             <NavigationCard key={`nav-${index}`} item={item} />
//           )
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mb-2">
//         {navigationItems.slice(3).map((item, index) => (
//           <NavigationCard key={`nav-bottom-${index}`} item={item} />
//         ))}
//       </div>

//       <div className="grid grid-cols-2 gap-2">
//         <TestCard />
//         <Card 
//           className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[120px] animate-fade-in"
//           onClick={() => navigate('/favorites')}
//         >
//           <div className="absolute inset-0 bg-[#ea384c]" />
//           <CardContent className="p-4 relative z-10 h-full flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-lg font-semibold text-white">Favoriter</h3>
//                 <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
//               </div>
//               <div className="rounded-full bg-white/20 p-3 group-hover:scale-110 transition-transform">
//                 <Bookmark className="h-6 w-6 text-white" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default NavigationCards;

// 18.03.2015
// import NavigationCard from "./NavigationCard";
// import MessageCard from "./MessageCard";
// import { navigationItems } from "./navigationData";
// import TestCard from "./TestCard";
// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { Bookmark } from "lucide-react";

// const NavigationCards = () => {
//   const navigate = useNavigate();
  
//   // Group cards by their designated size
//   const largeCards = navigationItems.filter(item => item.size === "large");
//   const mediumCards = navigationItems.filter(item => item.size === "medium");
//   const smallCards = navigationItems.filter(item => item.size === "small");
  
//   // Create card with proper component based on path
//   const renderCard = (item, index) => {
//     return item.path === "/messages" ? (
//       <MessageCard key={`nav-${item.path}`} item={item} />
//     ) : (
//       <NavigationCard key={`nav-${item.path}`} item={item} />
//     );
//   };
  
//   return (
//     <div className="space-y-4">
//       {/* First row - optimal arrangement for all screen sizes */}
//       <div className="grid grid-cols-12 gap-4">
//         {/* Large card (Lägg upp annons) - 6 columns on desktop & large tablet, 12 on smaller screens */}
//         <div className="col-span-12 lg:col-span-6">
//           {renderCard(largeCards[0], 0)}
//         </div>
        
//         {/* Medium & small cards in a 6-column section */}
//         <div className="col-span-12 lg:col-span-6">
//           <div className="grid grid-cols-12 gap-4 h-full">
//             {/* Small card (Meddelanden) - full width on mobile, 5 cols on tablet, 6 on desktop */}
//             <div className="col-span-12 md:col-span-5 lg:col-span-6">
//               {renderCard(smallCards[0], 0)}
//             </div>
            
//             {/* Medium card (Annonser) - full width on mobile, 7 cols on tablet, 6 on desktop */}
//             <div className="col-span-12 md:col-span-7 lg:col-span-6">
//               {renderCard(mediumCards[0], 0)}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Second row - optimal arrangement for all screen sizes */}
//       <div className="grid grid-cols-12 gap-4">
//         {/* Medium card (Ekonomi) - 4 columns on desktop, 5 on tablet, full on mobile */}
//         <div className="col-span-12 md:col-span-5 lg:col-span-4">
//           {renderCard(mediumCards[1], 1)}
//         </div>
        
//         {/* Small card (Inställningar) - 3 columns on desktop, 3 on tablet, full on mobile */}
//         <div className="col-span-12 md:col-span-3 lg:col-span-3">
//           {renderCard(smallCards[1], 1)}
//         </div>
        
//         {/* Large card (Support) - 5 columns on desktop, 4 on tablet, full on mobile */}
//         <div className="col-span-12 md:col-span-4 lg:col-span-5">
//           {renderCard(largeCards[1], 1)}
//         </div>
//       </div>
      
//       {/* Third row - Test and Favoriter */}
//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-12 md:col-span-6">
//           <TestCard />
//         </div>
//         <div className="col-span-12 md:col-span-6">
//           <Card
//             className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-full min-h-[120px] animate-fade-in"
//             onClick={() => navigate('/favorites')}
//           >
//             <div className="absolute inset-0 bg-[#ea384c]" />
//             <CardContent className="p-4 md:p-5 relative z-10 h-full flex flex-col justify-between">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-semibold text-white">Favoriter</h3>
//                   <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
//                 </div>
//                 <div className="rounded-full bg-white/20 p-3 group-hover:scale-110 transition-transform">
//                   <Bookmark className="h-6 w-6 text-white" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavigationCards;

// import NavigationCard from "./NavigationCard";
// import MessageCard from "./MessageCard";
// import { navigationItems } from "./navigationData";
// import TestCard from "./TestCard";
// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { Bookmark } from "lucide-react";

// const NavigationCards = () => {
//   const navigate = useNavigate();
  
//   // Create card with proper component based on path
//   const renderCard = (item) => {
//     return item.path === "/messages" ? (
//       <MessageCard key={`nav-${item.path}`} item={item} />
//     ) : (
//       <NavigationCard key={`nav-${item.path}`} item={item} />
//     );
//   };
  
//   return (
//     <div className="space-y-4 navigation-cards">
//       {/* First row - improved layout for 1022px-1399px range */}
//       <div className="grid grid-cols-12 gap-4">
//         {/* First card - full width on mobile, half on larger screens */}
//         <div className="col-span-12 md:col-span-6 xl:col-span-4">
//           {renderCard(navigationItems[0])} {/* Lägg upp annons */}
//         </div>
        
//         {/* 2nd and 3rd cards side by side, with custom arrangement at different breakpoints */}
//         <div className="col-span-12 md:col-span-6 xl:col-span-8">
//           <div className="grid grid-cols-12 gap-4 h-full">
//             {/* Adjusted sizes for 1022px-1399px range */}
//             <div className="col-span-12 sm:col-span-6 xl:col-span-4">
//               {renderCard(navigationItems[1])} {/* Meddelanden */}
//             </div>
//             <div className="col-span-12 sm:col-span-6 xl:col-span-8">
//               {renderCard(navigationItems[2])} {/* Annonser */}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Second row - improved layout for 1022px-1399px range */}
//       <div className="grid grid-cols-12 gap-4">
//         {/* Adjusted sizes with specific medium breakpoint for 1022px-1399px range */}
//         <div className="col-span-12 sm:col-span-4">
//           {renderCard(navigationItems[3])} {/* Ekonomi */}
//         </div>
//         <div className="col-span-12 sm:col-span-3 lg:col-span-3">
//           {renderCard(navigationItems[4])} {/* Inställningar */}
//         </div>
//         <div className="col-span-12 sm:col-span-5">
//           {renderCard(navigationItems[5])} {/* Support */}
//         </div>
//       </div>
      
//       {/* Third row - Test and Favoriter */}
//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-12 sm:col-span-6">
//           <TestCard />
//         </div>
//         <div className="col-span-12 sm:col-span-6">
//           <Card
//             className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-full min-h-[120px] animate-fade-in"
//             onClick={() => navigate('/favorites')}
//           >
//             <div className="absolute inset-0 bg-[#ea384c]" />
//             <CardContent className="p-4 md:p-5 relative z-10 h-full flex flex-col justify-between">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-semibold text-white">Favoriter</h3>
//                   <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
//                 </div>
//                 <div className="rounded-full bg-white/20 p-3 group-hover:scale-110 transition-transform">
//                   <Bookmark className="h-6 w-6 text-white" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavigationCards;

// Updated NavigationCards.tsx
// import NavigationCard from "./NavigationCard";
// import MessageCard from "./MessageCard";
// import { navigationItems } from "./navigationData";
// import TestCard from "./TestCard";
// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { Bookmark } from "lucide-react";

// const NavigationCards = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-2">
//       {/* 
//         Completely restructured grid system:
//         - For 1400px+ (xl): Maintain original layout with specific width ratios
//         - For 1399px-768px (lg-md): Force exactly 2 cards per row with equal widths
//       */}
      
//       {/* First row - Original 3 cards on XL, paired cards below XL */}
//       <div className="grid grid-cols-6 gap-2 mb-2">
//         {/* At XL: Takes 3 columns (half row) */}
//         {/* At LG-MD: Takes half the width */}
//         <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-6">
//           <NavigationCard item={navigationItems[0]} />
//         </div>
        
//         {/* At XL: Takes 1 column */}
//         {/* At LG-MD: Takes half the width */}
//         <div className="xl:col-span-1 lg:col-span-3 md:col-span-3 col-span-6">
//           <MessageCard item={navigationItems[1]} />
//         </div>
        
//         {/* At XL: Takes 2 columns */}
//         {/* At LG-MD: This goes to a new row, takes half the width */}
//         <div className="xl:col-span-2 lg:col-span-3 md:col-span-3 col-span-6">
//           <NavigationCard item={navigationItems[2]} />
//         </div>

//         {/* Add invisible div for proper pairing below XL */}
//         <div className="hidden lg:block xl:hidden lg:col-span-3 md:col-span-3"></div>
//       </div>
      
//       {/* Second row */}
//       <div className="grid grid-cols-6 gap-2 mb-2">
//         {/* At XL: Takes 2 columns */}
//         {/* At LG-MD: Takes half the width */}
//         <div className="xl:col-span-2 lg:col-span-3 md:col-span-3 col-span-6">
//           <NavigationCard item={navigationItems[3]} />
//         </div>
        
//         {/* At XL: Takes 1 column */}
//         {/* At LG-MD: Takes half the width */}
//         <div className="xl:col-span-1 lg:col-span-3 md:col-span-3 col-span-6">
//           <NavigationCard item={navigationItems[4]} />
//         </div>
        
//         {/* At XL: Takes 3 columns (half row) */}
//         {/* At LG-MD: This goes to a new row, takes full width */}
//         <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-6">
//           <NavigationCard item={navigationItems[5]} />
//         </div>
//       </div>
      
//       {/* Bottom row - always 2 cards */}
//       <div className="grid grid-cols-6 gap-2">
//         <div className="col-span-3">
//           <TestCard />
//         </div>
//         <div className="col-span-3">
//           <Card
//             className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[120px] animate-fade-in"
//             onClick={() => navigate('/favorites')}
//           >
//             <div className="absolute inset-0 bg-[#ea384c]" />
//             <CardContent className="p-4 relative z-10 h-full flex flex-col justify-between">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-semibold text-white">Favoriter</h3>
//                   <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
//                 </div>
//                 <div className="rounded-full bg-white/20 p-3 group-hover:scale-110 transition-transform">
//                   <Bookmark className="h-6 w-6 text-white" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavigationCards;

//new update from github
import NavigationCard from "./NavigationCard";
import MessageCard from "./MessageCard";
import { navigationItems } from "./navigationData";
import TestCard from "./TestCard";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

const NavigationCards = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-2">
        {navigationItems.slice(0, 3).map((item, index) => (
          item.path === "/messages" ? (
            <MessageCard key={`nav-${index}`} item={item} />
          ) : (
            <NavigationCard key={`nav-${index}`} item={item} />
          )
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mb-2">
        {navigationItems.slice(3).map((item, index) => (
          <NavigationCard key={`nav-bottom-${index}`} item={item} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <TestCard />
        <Card 
          className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[120px] animate-fade-in"
          onClick={() => navigate('/favorites')}
        >
          <div className="absolute inset-0 bg-[#ea384c]" />
          <CardContent className="p-4 relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-white">Favoriter</h3>
                <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
              </div>
              <div className="rounded-full bg-white/20 p-3 group-hover:scale-110 transition-transform">
                <Bookmark className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NavigationCards;